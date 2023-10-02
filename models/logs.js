const mongoose = require('mongoose')
const captainsSchema = new mongoose.Schema({
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
const Captain = mongoose.model("Captain", captainsSchema)
module.exports = Captain