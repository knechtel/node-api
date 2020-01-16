const mongoose = require('mongoose')
const Client = require('./Client')
const Equipment = require('./Equipment')
const Schema = mongoose.Schema


const OrderOfServiceSchema = new mongoose.Schema({
 
    
    createdAt:{
        type:Date,
        default: Date.now,
    },
    Equipment: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }
      ],
    Client : { type: Schema.Types.ObjectId, ref: 'Client' }
});

mongoose.model('OrderOfService',OrderOfServiceSchema);