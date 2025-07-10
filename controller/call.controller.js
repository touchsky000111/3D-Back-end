const config = require("../config/index")
const axios = require("axios")
const Bulk_Call_Schedule_Model = require("../model/bulk.call.schedule")
const phoneNumberController = require("../controller/phonenumber.controller")
const leadController = require("./lead.controller")

exports.getScheduleDataOfAutoCall = async () => {
    try {
        const schedules = await Bulk_Call_Schedule_Model.find({})

        if (!schedules || schedules.length === 0) {
            return false;
        }

        const currentDate = new Date()

        // Convert current date to UTC
        const currentUTCDate = new Date(Date.UTC(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth(),
            currentDate.getUTCDate(),
            currentDate.getUTCHours(),
            currentDate.getUTCMinutes(),
            0  // Set seconds to 0
        ));

        let resultSchedule = []
        // Check each schedule
        for (const schedule of schedules) {
            // Combine date and time strings
            const dateTimeStr = `${schedule.date} ${schedule.time}`;
            const scheduleDate = new Date(dateTimeStr);

            // Get the timezone offset in minutes
            const timezoneOffset = scheduleDate.getTimezoneOffset();

            // Adjust the schedule date by the timezone offset
            const adjustedScheduleDate = new Date(scheduleDate.getTime() - (timezoneOffset * 60000));

            // Convert schedule date to UTC
            const scheduleUTCDate = new Date(Date.UTC(
                adjustedScheduleDate.getUTCFullYear(),
                adjustedScheduleDate.getUTCMonth(),
                adjustedScheduleDate.getUTCDate(),
                adjustedScheduleDate.getUTCHours(),
                adjustedScheduleDate.getUTCMinutes(),
                0  // Set seconds to 0
            ));

            // Compare dates (ignoring seconds)
            if (scheduleUTCDate.getTime() === currentUTCDate.getTime()) {
                console.log(">>>>>>>>>>>>>>>> Schedule match found!");
                resultSchedule.push(schedule)
            }
        }
        return resultSchedule;
    } catch (err) {
        console.log("err => ", err);
        return false;
    }
}


exports.makeCall_outBountCall_for_schedule = async ({ customers, phoneNumberIds, assistantIds, vapiKey }) => {
    try {

        // const result = await phoneNumberController.makeCall({ customer: phone })
        // return result
        console.log("customers => ", customers)
        console.log("phoneNumberIds => ", phoneNumberIds)
        console.log("assistantIds => ", assistantIds)
        console.log("vapiKey => ", vapiKey)
        try {
            const batch_size = 10;
            const sleep_time = 2 * 1000;
            // const sleep_time_between_batches = 10 * 60 * 1000;
            const sleep_time_between_batches = 5 * 1000;

            console.log("Total customers:", customers.length);
            console.log("Available phone numbers:", phoneNumberIds.length);
            console.log("Available assistants:", assistantIds.length);

            let customerIndex = 0;
            while (customerIndex < customers.length) {
                const batchPromises = [];
                console.log("customerIndex => ", customerIndex)
                if (customerIndex >= customers.length) return
                // Process each phone number
                for (let i = 0; i < phoneNumberIds.length; i++) {
                    for (let j = 0; j < batch_size && customerIndex < customers.length; j++) {

                        const customer = customers[customerIndex];
                        await phoneNumberController.makeCall_outBountCall_for_schedule_with_each_customer({
                            customer: customer.phone,
                            phoneNumberId: phoneNumberIds[i].id,
                            assistantId: assistantIds[i].id,
                            phoneNumber: phoneNumberIds[i].number,
                            vapiKey: vapiKey
                        });
                        console.log("customer => ", customer.phone, "phoneNumberId => ", phoneNumberIds[i].id, "assistantId => ", assistantIds[i].id);

                        customerIndex++;
                        await new Promise(resolve => setTimeout(resolve, sleep_time));
                    }
                }

                // Wait for 10 minutes before next batch
                console.log("waiting 5 seconds")
                await new Promise(resolve => setTimeout(resolve, sleep_time_between_batches));
            }

            console.log("All calls completed");
        } catch (err) {
            console.log("err => ", err);
            return false;
        }
        return "ok"
    } catch (err) {
        console.log("err => ", err);
        return false;
    }
}


