const mongoose = require("mongoose");

const tweetsSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: "Users",
            required: true
        },
        message: {
            type: String,
            trim: true,
            default: ''
        }
    },    
    { timestamps :true }
);


module.exports = mongoose.model("Tweets", tweetsSchema);