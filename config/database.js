
const requireDir = require('require-dir')
const restful = require('node-restful')
const mongoose = restful.mongoose
 mongoose.connect('mongodb://localhost/db_node_api', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose
