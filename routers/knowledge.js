const fs = require('fs');
const path = require('path')
const knowledgeController = require("../controller/knowledge.controller");
const {
    file
} = require('googleapis/build/src/apis/file');
const vapiController = require("../controller/vapi.controller")
const { getUserObjectId } = require('../lib/auth')
const notionModel = require('../model/notion')
const publicUrlModel = require('../model/public.url');
const documentsModel = require('../model/documents.model');

// Helper function to create delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async (fastify, opts) => {
    // Define the base directory for files
    fastify.addHook('preHandler', fastify.authenticate);
    // Get list of all uploaded files
    // fastify.get('/files', async (req, reply) => {
    //     try {

    //         const accessToken = req.headers.authorization.split(" ")[1]
    //         const userId = await getUserObjectId(accessToken)
    //         const baseDir = path.join(__dirname, '..', `files/${userId}`);
    //         // Check if directory exists
    //         if (!fs.existsSync(baseDir)) {
    //             return reply.code(200).send({
    //                 files: []
    //             });
    //         }

    //         // Read directory contents
    //         const files = fs.readdirSync(baseDir);

    //         // Filter out .txt files and get file details
    //         const fileDetails = files
    //             .filter(filename => path.extname(filename).toLowerCase() !== '.txt')
    //             .map(filename => {
    //                 const filePath = path.join(baseDir, filename);
    //                 const stats = fs.statSync(filePath);
    //                 return {
    //                     name: filename,
    //                     size: stats.size,
    //                     created: stats.birthtime,
    //                     modified: stats.mtime,
    //                     type: path.extname(filename).toLowerCase().substring(1)
    //                 };
    //             });

    //         return reply.code(200).send({
    //             files: fileDetails
    //         });
    //     } catch (err) {
    //         console.error("Error getting file list:", err);
    //         return reply.code(500).send({
    //             error: "Failed to get file list",
    //             details: err.message
    //         });
    //     }
    // });

    fastify.get('/files', async (req, reply) => {
        try {

            const accessToken = req.headers.authorization.split(" ")[1]

            const files = await documentsModel.find({
                userId: await getUserObjectId(accessToken)
            })

            const fileDetails = files
                .map(file => {
                    return {
                        name: file.name,
                        size: file.size,
                        created: file.created,
                        modified: file.modified,
                        type: file.name.toLowerCase().substring(1)
                    };
                });

            return reply.code(200).send({
                files: fileDetails
            });
        } catch (err) {
            console.error("Error getting file list:", err);
            return reply.code(500).send({
                error: "Failed to get file list",
                details: err.message
            });
        }
    });

    // Delete a file
    fastify.post('/delete', async (req, reply) => {
        try {
            const {
                filename
            } = req.body;

            // console.log("filename => ", filename)
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            // Try to delete from VAPI
            const fileId = await knowledgeController.getFileIdWithName(filename, vapiKey);
            console.log("fileId => ", fileId)
            if (fileId) {
                console.log("fileId found")
                await knowledgeController.deleteFileVapi(fileId, vapiKey);
            } else {
                console.log(`File ${filename} not found in VAPI, skipping VAPI deletion`);
            }

            await knowledgeController.connectAssistants(vapiKey, userId)

            await knowledgeController.deleteDocuments({
                userId,
                documentName: filename
            })


            return reply.code(200).send({
                success: true,
                message: 'File deleted successfully'
            });
        } catch (err) {
            console.error("Error deleting file:", err);
            return reply.code(500).send({
                error: "Failed to delete file",
                details: err.message
            });
        }
    });

    fastify.post('/upload', async (req, reply) => {
        try {
            console.log("upload ...")

            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            const baseDir = path.join(__dirname, '..', `files/${userId}`);

            // Random delay between 2-3 seconds

            const data = await req.file(); // get the first file
            const date = Date.now()
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            if (!data) {
                return reply.code(400).send({
                    msg: "No files uploaded"
                });
            }

            console.log("file => ", {
                filename: data.filename,
                mimetype: data.mimetype
            });

            // Ensure uploads directory exists
            if (!fs.existsSync(baseDir)) {
                fs.mkdirSync(baseDir, {
                    recursive: true
                });
            }

            const saveTo = path.join(baseDir, data.filename);
            await knowledgeController.pumpToDisk(data.file, saveTo);

            await knowledgeController.fileUploadToVapi(data.filename, vapiKey, userId);

            await knowledgeController.connectAssistants(vapiKey, userId)


            const stats = fs.statSync(saveTo);

            await knowledgeController.uploadFile({
                userId,
                name: data.filename,
                size: stats.size,
                created: date,
                modified: date,
                type: data.mimetype,
                date: date,
            })

            fs.unlinkSync(saveTo);

            reply.send({
                name: data.filename,
                mimetype: data.mimetype
            });

        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    });

    fastify.get('/download/:filename', async (req, reply) => {
        try {
            const {
                filename
            } = req.params;

            const baseDir = path.join(__dirname, '..', 'files');

            console.log("fileName => ", filename)
            // Security: Prevent directory traversal attacks
            const sanitizedFilename = path.basename(filename);
            console.log("sanitizedFileName => ", sanitizedFilename)
            if (sanitizedFilename !== filename) {
                return reply.code(400).send({
                    error: 'Invalid filename'
                });
            }

            const filePath = path.join(baseDir, sanitizedFilename);

            console.log("filePath => ", filePath)
            if (!fs.existsSync(filePath)) {
                return reply.code(404).send({
                    error: 'File not found'
                });
            }

            // Get file stats for content length
            const stats = fs.statSync(filePath);
            console.log('File stats:', stats);

            // Determine the correct content type based on file extension
            const ext = path.extname(sanitizedFilename).toLowerCase();
            let contentType = 'application/octet-stream';

            if (ext === '.pdf') {
                contentType = 'application/pdf';
            } else if (ext === '.doc' || ext === '.docx') {
                contentType = 'application/msword';
            } else if (ext === '.xls' || ext === '.xlsx') {
                contentType = 'application/vnd.ms-excel';
            } else if (ext === '.txt') {
                contentType = 'text/plain';
            }

            // Read the file into a buffer
            const fileBuffer = fs.readFileSync(filePath);
            console.log('File buffer size:', fileBuffer.length);

            // Set appropriate headers
            reply
                .header('Content-Type', contentType)
                .header('Content-Length', stats.size)
                .header('Content-Disposition', `attachment; filename="${sanitizedFilename}"`)
                .header('Cache-Control', 'no-cache')
                .header('Pragma', 'no-cache');

            // Send the file buffer
            return reply.send(fileBuffer);
        } catch (err) {
            console.error("Download error:", err);
            return reply.code(500).send({
                error: 'An error occurred while downloading the file'
            });
        }
    });

    fastify.post("/add-notion-link", async (req, reply) => {
        try {
            const {
                userId,
                notionLink,
                notionName
            } = req.body;
            const date = Date.now()


            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            const sendDataToVapi = await knowledgeController.sendDataToVapi({
                userId,
                vapiKey,
                link: notionLink,
                name: notionName
            })

            console.log("send Dta vapi", sendDataToVapi)

            // Add delay of 2-3 seconds
            await delay(2000 + Math.random() * 1000);

            await knowledgeController.fileUploadToVapi(`${notionName}.txt`, vapiKey, userId);

            await knowledgeController.connectAssistants(vapiKey, userId)

            await knowledgeController.uploadNotion({
                userId,
                notionLink,
                notionName,
                date,
            })

            const baseDir = path.join(__dirname, '..', `files/${userId}`);
            const filePath = path.join(baseDir, notionName + '.txt');

            // Check if file exists
            if (!fs.existsSync(filePath)) {
                console.log("file not found")
                return reply.code(404).send({
                    error: 'File not found'
                });
            }

            console.log("file existed")
            // Delete the file
            fs.unlinkSync(filePath);



            return reply.code(200).send({
                msg: "success"
            })
        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })

    fastify.post("/delete-notion-link", async (req, reply) => {
        try {
            const {
                notionLinkId
            } = req.body;


            const notionLink = await notionModel.findById(notionLinkId)

            const filename = `${notionLink.notionName}.txt`

            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)


            // Try to delete from VAPI
            const fileId = await knowledgeController.getFileIdWithName(filename, vapiKey);
            console.log("fileId => ", fileId)
            if (fileId) {
                console.log("fileId found")
                await knowledgeController.deleteFileVapi(fileId, vapiKey);
            } else {
                console.log(`File ${filename} not found in VAPI, skipping VAPI deletion`);
            }

            await knowledgeController.connectAssistants(vapiKey, userId)


            await knowledgeController.deleteNotionLink({
                notionLinkId
            })


            return reply.code(200).send({
                msg: "success"
            })


        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })

    fastify.post("/get-notion-link", async (req, reply) => {
        try {
            const {
                userId
            } = req.body;

            const notion = await knowledgeController.getNotionLink({
                userId
            })

            return reply.code(200).send({
                msg: "success",
                notionLinks: notion
            })
        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })

    fastify.post("/add-public-url", async (req, reply) => {
        try {
            const {
                userId,
                publicUrl,
                publicUrlName
            } = req.body;

            const date = Date.now()


            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            const sendDataToVapi = await knowledgeController.sendDataToVapi({
                userId,
                vapiKey,
                link: publicUrl,
                name: publicUrlName
            })

            console.log("send Dta vapi", sendDataToVapi)

            await delay(2000 + Math.random() * 1000);

            await knowledgeController.fileUploadToVapi(`${publicUrlName}.txt`, vapiKey, userId);

            await knowledgeController.connectAssistants(vapiKey, userId)

            await knowledgeController.uploadPublicUrl({
                userId,
                publicUrl,
                publicUrlName,
                date,
            })
            const baseDir = path.join(__dirname, '..', `files/${userId}`);
            const filePath = path.join(baseDir, publicUrlName + '.txt');

            // Check if file exists
            if (!fs.existsSync(filePath)) {
                console.log("file not found")
                return reply.code(404).send({
                    error: 'File not found'
                });
            }

            console.log("file existed")
            // Delete the file
            fs.unlinkSync(filePath);


            return reply.code(200).send({
                msg: "success"
            })
        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })

    fastify.post("/get-public-url", async (req, reply) => {
        try {
            const {
                userId
            } = req.body;

            const publicUrl = await knowledgeController.getPublicUrl({
                userId
            })

            return reply.code(200).send({
                msg: "success",
                publicUrl: publicUrl
            })
        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })

    fastify.post("/delete-public-url", async (req, reply) => {
        try {
            const {
                publicUrlId
            } = req.body;


            const publicUrl = await publicUrlModel.findById(publicUrlId)

            const filename = `${publicUrl.publicUrlName}.txt`

            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            const baseDir = path.join(__dirname, '..', `files/${userId}`);

            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            // Try to delete from VAPI
            const fileId = await knowledgeController.getFileIdWithName(filename, vapiKey);
            console.log("fileId => ", fileId)
            if (fileId) {
                console.log("fileId found")
                await knowledgeController.deleteFileVapi(fileId, vapiKey);
            } else {
                console.log(`File ${filename} not found in VAPI, skipping VAPI deletion`);
            }

            await knowledgeController.connectAssistants(vapiKey, userId)


            await knowledgeController.deletePublicUrl({
                publicUrlId
            })

            return reply.code(200).send({
                msg: "success"
            })
        } catch (err) {
            console.error("err => ", err);
            reply.code(500).send({
                msg: "failed"
            });
        }
    })
};