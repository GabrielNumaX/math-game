const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const playersSchema = new Schema({
    player: {
        type: String,
        trim: true,
        max: 25
    },
    points: {
        type: Number
    },
    // position: {
    //     type: Number,
    //     default: 1
    // },
    level: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
      }  
}, {timestamps: true});

module.exports = model('Players', playersSchema);