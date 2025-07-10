const LeadsModel = require("../model/leads")

exports.regist = async ({ userId, name, email, phone, source, location, notes, business_type, company_name, preferred_contact_time, date }) => {
    try {
        const newLead = new LeadsModel({
            userId, name, email, phone, source, location, notes, business_type, company_name, preferred_contact_time, date
        })
        await newLead.save()

        return true
    } catch (err) {
        console.error("err => ", err)
    }

}

exports.getAllLeads = async ({ userId }) => {
    try {
        console.log("get all leads searching ...")
        const leads = await LeadsModel.find({ userId })
        return leads
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.deleteLeads = async ({ _id }) => {
    try {
        console.log("deleting ...")
        const leads = await LeadsModel.deleteOne({ _id: _id })
        return true
    } catch (err) {
        console.log("err => ", err)
    }
}