const buildModel = require("../model/build.model")
exports.saveDesign = async (designData) => {
    try {

        // console.log("origin data => ", designData)
        // const jsonString = JSON.parse(designData, null, 2); // pretty print with 2 spaces
        // const jsondata = await designData.json()


        console.log("json: ", typeof designData);

        // Now you can access it as a normal object
        console.log(designData.id);
        const newBuild = new buildModel({ build: JSON.stringify(designData) })
        await newBuild.save()
        return true
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.find = async ({ id, dt }) => {
    try {
        console.log("getting data")
        const data = await buildModel.find()
        const keys = Object.keys(rawObj);

        if (keys.length > 0) {
            let rawKey = keys[0]; // malformed JSON string stored as key

            // clean up trailing ="
            if (rawKey.endsWith('="') || rawKey.endsWith('="\"')) {
                rawKey = rawKey.replace(/="\s*"?$/, '');
            }

            try {
                const parsedData = JSON.parse(rawKey);
                return parsedData;
            } catch (err) {
                console.error("JSON parse failed:", err);
            }
        }
    } catch (err) {
        console.error("err => ", err)
    }
}