const buildModel = require("../model/build.model")
const { sendSMS, emailJsSMS } = require("../lib/etc")
const config = require("../config/index")
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

    console.log("Project ID: ", projectId);
    console.log("Project Email: ", projectEmail);
    // Now you can access it as a normal object
    const newBuild = new buildModel({ build: finalData })
    await newBuild.save()
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const link = `${config.DOMAIN}?id=-${projectId}&dt=${formattedDate}`
    console.log("link => ", link)
    // await sendSMS(projectEmail, link)
    await emailJsSMS(projectEmail, link)
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

exports.getAll = async (email) => {
  try {
    const dbdata = await buildModel.find()
    const result = dbdata.filter(item => item.build?.userData?.email === email)
    return result
  } catch (err) {
    console.error("err => ", err)
    return null;
  }
}