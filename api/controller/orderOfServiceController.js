
const requireDir = require('require-dir')
const mongoose = require('../../config/database')
requireDir('../model/');

const Client = mongoose.model('Client');
const Equipment = mongoose.model('Equipment');
const OrderOfService = mongoose.model('OrderOfService');
module.exports = {
    async doCreate(httpMethod, opt) {

        let c = new Client({
            name: "Robert deniro",
            address: "EUA, seatle"
        });
        Client.create(c);
        let equipmentVar = new Equipment({
            name: 'camera',
            model: 'LCDPV',
            serial: '1394599',
            Client: c._id
        })
        Equipment.create(equipmentVar);

        let orderOfService = new OrderOfService({
            Equipment: [equipmentVar],
            Client: c._id
        });
        OrderOfService.create(orderOfService)
        return opt.json(orderOfService)
    },
    async getAll(httpMethod, opt) {

        OrderOfService.find({}).then(function (e) {
            opt.send(e);
        }
        );
    }
};