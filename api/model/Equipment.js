const mongoose = require('mongoose')
, Schema = mongoose.Schema
const Client = require('./Client')

const EquipmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    model:{
        type: String,
        required:true
    },
    serial:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
    Client : { type: Schema.Types.ObjectId, ref: 'Client' }
});

mongoose.model('Equipment',EquipmentSchema);