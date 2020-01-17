
const requireDir = require('require-dir')
const mongoose = require('../../config/database')
requireDir('../model/');

const Client = mongoose.model('Client');
const Equipment = mongoose.model('Equipment');
const OrderOfService = mongoose.model('OrderOfService');
module.exports = {
    async doCreate(req,res) {
     

        console.log(" ola mundo -> " +req.body['client'].name);

        let c = new Client(
         req.body['client']
            // name: req.body['client'].name,
            // address: req.body['client'].address
        );
        await Client.create(c);
        let equipmentVar = new Equipment(
          
          req.body['Equipment']
            // name: 'camera',
            // model: 'LCDPV',
            // serial: '1394599',
            // Client: c._id
        )
       await Equipment.create(equipmentVar);

        let orderOfService = new OrderOfService({
            Equipment: [equipmentVar],
            Client: c._id
        });
        OrderOfService.create(orderOfService)
        return res.json(orderOfService)
    },
    async getAll(httpMethod, opt) {

        OrderOfService.find({}).then(function (e) {
            opt.send(e);
        }
        );
    }
};