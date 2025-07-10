const FormData = require('form-data');
const axios = require("axios")
const config = require("../config/index")
const fs = require('fs');
const Notion = require("../model/notion")
const PublicUrl = require("../model/public.url")
const FileMetaModel = require("../model/file.model")
const ToolsModel = require("../model/tools.model")
const UserModel = require("../model/users")
const AssistantModel = require("../model/assistants.model")
const path = require('path');
const { JSDOM } = require('jsdom');
const { jsPDF } = require('jspdf');
const { htmlToText } = require('html-to-text');
const DocumentsModel = require("../model/documents.model")

exports.pumpToDisk = (fileStream, filePath) => {
    return new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(filePath);
        fileStream.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
}

exports.getVapiFileList = async (vapiKey) => {
    try {
        const response = await axios.get('https://api.vapi.ai/file', {
            headers: {
                'Authorization': `Bearer ${vapiKey}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Failed to get filelist details:", error.response ? error.response.data : error.message);
    }
}

exports.deleteFileVapi = async (fileId, vapiKey) => {
    try {
        const response = await axios.delete(`https://api.vapi.ai/file/${fileId}`, {
            headers: {
                Authorization: `Bearer ${vapiKey}`,
                "Content-Type": "application/json"
            },
        });

        console.log(">>>> deleted >>>>");

        const fileMeta = await FileMetaModel.findOne({
            fileId
        })

        await FileMetaModel.findByIdAndDelete(fileMeta._id)

        return true;
    } catch (error) {
        console.error("Failed to delete details:", error.response ? error.response.data : error.message);
    }
}

exports.getFileIdWithName = async (fileName, vapiKey) => {
    try {
        const result = await this.getVapiFileList(vapiKey);
        if (!result) {
            console.error("Failed to get file list from VAPI");
            return null;
        }

        const found = result.find(item => fileName.includes(item.name));
        if (!found) {
            console.error(`File ${fileName} not found in VAPI`);
            return null;
        }
        console.log("Found file:", found);
        return found.id;
    } catch (err) {
        console.error("Error in getFileIdWithName:", err);
    }
}

exports.fileUploadToVapi = async (fileName, vapiKey, userId) => {
    try {
        const filePath = `./files/${userId}/${fileName}`;

        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));

        const response = await axios.post('https://api.vapi.ai/file', form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${vapiKey}`,
            },
        });

        const fileMeta = new FileMetaModel({
            userId,
            fileName,
            fileId: response.data.id,
            date: new Date()
        })

        await fileMeta.save()
        return true;
    } catch (err) {
        console.error('Error uploading file to VAPI:');
    }
}


exports.uploadNotion = async ({
    userId,
    notionLink,
    notionName,
    date
}) => {
    try {
        const notion = new Notion({
            userId,
            notionLink,
            notionName,
            date
        })

        await notion.save()

        return true
    } catch (err) {
        console.error("err => ", err);
    }
}

exports.getNotionLink = async ({
    userId
}) => {
    try {

        console.log("userId => ", userId)

        const notion = await Notion.find({
            userId
        })

        console.log("notion => ", notion)
        return notion
    } catch (err) {
        console.error("err => ", err);
    }
}


exports.uploadPublicUrl = async ({
    userId,
    publicUrl,
    publicUrlName,
    date
}) => {
    try {
        const newPublicUrl = new PublicUrl({
            userId,
            publicUrl,
            publicUrlName,
            date
        })

        await newPublicUrl.save()

        return true
    } catch (err) {
        console.error("err => ", err);
    }
}

exports.getPublicUrl = async ({
    userId
}) => {
    try {
        const publicUrl = await PublicUrl.find({
            userId
        })

        return publicUrl
    } catch (err) {
        console.error("err => ", err);
    }
}

exports.deleteNotionLink = async ({
    notionLinkId
}) => {
    try {
        await Notion.findByIdAndDelete(notionLinkId)
    } catch (err) {
        console.error("err => ", err);
    }
}

exports.deletePublicUrl = async ({
    publicUrlId
}) => {
    try {
        await PublicUrl.findByIdAndDelete(publicUrlId)
    } catch (err) {
        console.error("err => ", err);
    }
}


exports.connectAssistants = async (vapiKey, userId) => {
    try {
        console.log("connectAssistants => ")

        // // get tool id for delete tools

        const toolsModel = await ToolsModel.findOne({
            userId
        })


        console.log("toolsModel => ", toolsModel)
        if (toolsModel) {
            // delete tools
            const response_delelete = await axios.delete(`https://api.vapi.ai/tool/${toolsModel.toolId}`, {
                headers: {
                    'Authorization': `Bearer ${vapiKey}`,
                },
            })
            console.log("tool id deleted",)

            await ToolsModel.findByIdAndDelete(toolsModel._id)
        }
        //get files for creating tools

        // create tools


        const fileMetamodel = await FileMetaModel.find({
            userId
        })


        const fileIds = fileMetamodel.map(file => file.fileId)

        console.log("fileIds => ", fileIds)

        const data = {
            type: "query",
            function: {
                name: userId
            },
            knowledgeBases: [
                {
                    provider: "google",
                    name: "product-kb",
                    description: "Use this knowledge base when the user asks or queries about the product or services",
                    fileIds: fileIds
                }
            ]
        };

        const response_query = await axios.post('https://api.vapi.ai/tool/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${vapiKey}`
            }
        })

        console.log("response_query => ", response_query.data)

        // save tool id
        const toolId = response_query.data.id

        const user = await UserModel.findById(userId)

        console.log("knowledge user => ", user)

        const newToolsModel = new ToolsModel({
            userId,
            email: user.email,
            toolId,
            date: new Date()
        })

        await newToolsModel.save()


        // get assistant id


        const assistantModelIds = await AssistantModel.find({
            userId
        })

        const assistantIds = assistantModelIds.map(assistant => assistant.assistantId)

        console.log("assistantIds => ", assistantIds)

        // add tool to assistant
        const data_knowledge = {
            model: {
                temperature: 0.2,
                provider: "openai",
                model: "gpt-4o",
                toolIds: [
                    response_query.data.id
                ]
            }
        };

        // add tool to assistant
        Promise.all(assistantIds.map(async (assistantId) => {
            try {
                const result = await axios.patch(`https://api.vapi.ai/assistant/${assistantId}`, data_knowledge, {
                    headers: {
                        'Authorization': `Bearer ${vapiKey}`,
                    }
                })
            } catch (err) {
                console.log("failed => ", assistantId)
            }
        }))

        console.log("Assistant connected")
    } catch (error) {
        // console.error('Error Connecting Assistant:', error.response ? error.response.data : error.message);
        console.error('Error Connecting Assistant:');
    }
}


exports.sendDataToVapi = async ({
    userId,
    vapiKey,
    link,
    name
}) => {
    try {
        // Check if file is .txt and ignore it
        if (name.toLowerCase().endsWith('.txt')) {
            return true;
        }

        const dir = path.join(__dirname, '..', 'files', userId);

        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const res = await axios.get(link);
        const html = res.data;

        // Convert HTML to plain text
        const data = htmlToText(html, {
            wordwrap: 80,  // Wrap lines at 80 characters (optional)
        });

        const file = await fs.createWriteStream(path.join(dir, `${name}.txt`))
        await file.write(data)
        await file.end()
        return true
    } catch (error) {
        console.error("Error fetching or saving HTML:", error.message);
    }
}

exports.uploadFile = async ({ userId,
    name,
    size,
    created,
    modified,
    type: data,
    date, }) => {
    try {
        const newDocument = new DocumentsModel({
            userId,
            name,
            size,
            created,
            modified,
            type: data,
            date
        })

        await newDocument.save()
        return true
    } catch (err) {
        console.error("Error uploading file:", err);
        return false;
    }
}


exports.deleteDocuments = async ({ documentName, userId }) => {
    try {
        console.log("documentName => ", documentName)

        const document = await DocumentsModel.findOne({
            name: documentName,
            userId: userId
        })

        if (!document) {
            console.error("Document not found");
            return false;
        }

        await DocumentsModel.findByIdAndDelete(document._id);
        return true;
    } catch (err) {
        console.error("Error deleting document:", err);
        return false;
    }
}