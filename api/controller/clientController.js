
const requireDir = require('require-dir')
const restful = require('node-restful')
const mongoose = restful.mongoose
mongoose.connect('mongodb://localhost/db_node_api', { useNewUrlParser: true, useUnifiedTopology: true });
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
    async getAll(req, resp) {
        Equipment.find({}).then(function (e) {
            resp.send(e);
        });
    }
};