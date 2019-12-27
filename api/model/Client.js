const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
});

mongoose.model('Client',ClientSchema);