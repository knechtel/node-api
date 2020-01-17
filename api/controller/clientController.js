
const requireDir = require('require-dir')
const mongoose = require('../../config/database')
requireDir('../model/');

const Client = mongoose.model('Client');
const Equipment = mongoose.model('Equipment');

module.exports = {
    async create(req, resp) {
        var c = await new Client(
            req.body['client']
        );
        await Client.create(c);
  
        return resp.json(c)
    },
    async getAll(httpMethod, opt) {
        
        Equipment.find({}).then(function (e) {
            opt.send(e);}
        );
    }
};