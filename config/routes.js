const express = require('express')

const routes = express.Router()
const clientService = require("../api/controller/clientController")
// routes.get('/api',(req,resp) =>{
//     resp.send("Hello World");
// });
routes.get("/api/test",clientService.getTest)
module.exports = routes;