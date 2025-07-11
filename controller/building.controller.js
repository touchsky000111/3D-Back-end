const buildModel = require("../model/build.model")
exports.saveDesign = async (designData) => {
    try {

        // console.log("origin data => ", designData)
        // const jsonString = JSON.parse(designData, null, 2); // pretty print with 2 spaces
        // const jsondata = await designData.json()

        const stringifyData = JSON.stringify(designData)
        console.log("json: ", stringifyData);
        console.log("Data type: ", typeof stringifyData)


        const parsedData = JSON.parse(stringifyData)

        console.log("Parsed Data => ", parsedData)

        const param1 = Object.keys(parsedData)[0]
        const finalData = JSON.parse(param1)
        console.log("Final Data: ", finalData);
        // Now you can access it as a normal object
        const newBuild = new buildModel({ build: finalData })
        await newBuild.save()
        return true
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.find = async ({ id, dt }) => {
  try {
    console.log("getting data")
    const dbdata = await buildModel.find()
    let result 
    dbdata.map(item => {
        if("-" + item.build.id == id){
            console.log("match => ", id)
            result = {...item.build.buildingData,     "porches": [],
    "doorsWindows": [],
    "scaleItems": [],
    "interiorItems": []}
        }
    })
    return JSON.stringify(result)
    // return dbdata[0].build.id
  } catch (err) {
    console.error("err => ", err)
    return null;
  }
}
