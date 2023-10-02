const mongoose = require('mongoose')
const captainLogsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    entry:{
        type: String,
        required: true,
    },
    shipIsBroken:{
        type:Boolean,
    }
})
const CaptainLogs = mongoose.model("CaptainLogs", captainLogsSchema)
module.exports = CaptainLogs