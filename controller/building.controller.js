const buildModel = require("../model/build.model")
exports.saveDesign = async (designData) => {
  try {

    const stringifyData = JSON.stringify(designData)
    const parsedData = JSON.parse(stringifyData)
    const param1 = Object.keys(parsedData)[0]

    let finalData

    if (param1[param1.length - 1] == "}" && param1[param1.length - 2] == '"') {
      finalData = JSON.parse(param1)
    } else {
      finalData = JSON.parse(param1 + '"}')
    }

    console.log("Final Data: ", finalData);
    const projectId = finalData.id
    const projectEmail = finalData.userData.email

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
      if ("-" + item.build.id == id) {
        console.log("match => ", id)
        result = {
          ...item.build.buildingData, "porches": [],
          "doorsWindows": [],
          "scaleItems": [],
          "interiorItems": []
        }
      }
    })

    const input = result
    const stringifiedParams = Object.fromEntries(
      Object.entries(input.params).map(([key, value]) => [key, String(value)])
    );

    // Build the new object
    const output = {
      ...input,
      params: stringifiedParams
    };
    // Optionally stringify to JSON string
    const jsonString = JSON.stringify(output, null, 2); // pretty printed

    return jsonString
    // return dbdata[0].build.id
  } catch (err) {
    console.error("err => ", err)
    return null;
  }
}
