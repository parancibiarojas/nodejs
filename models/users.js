// Inicio del Programa...!!

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            trim: true,
            required: true
        },
        surnames: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            unique: true
        },
        birthdate: {
            type: Date,
            default: Date.now
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        avatar: {
            type: String,
            trim: true,
            default: ''
        },
        banner: {
            type: String,
            trim: true,
            default: ''
        },
        biography: {
            type: String,
            trim: true,
            default: ''
        },
        location: {
            type: String,
            trim: true,
            default: ''
        },
        website: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { timestamps :true }

);


module.exports = mongoose.model("Users", usersSchema);

