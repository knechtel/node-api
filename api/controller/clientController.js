
const requireDir = require('require-dir')
const mongoose = require('../../config/database')
requireDir('../model/');

const Client = mongoose.model('Client');
const Equipment = mongoose.model('Equipment');
module.exports = {
    async getTest(req, resp) {
        var c = await new Client({
            name: "Robert deniro",
            address: "EUA, seatle"
        });
        await Client.create(c);
        var equipmentVar = new Equipment({
            name:'camera',
            model:'LCDPV',
            serial:'1394599',
            Client:c._id    
        })
        Equipment.create(equipmentVar);
        return resp.json(equipmentVar)
    },
    async getAll(httpMethod, opt) {
        
        Equipment.find({}).then(function (e) {
            opt.send(e);}
        );
    }
};