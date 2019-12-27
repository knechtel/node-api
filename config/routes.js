const express = require('express')

const routes = express.Router()
const clientService = require("../api/controller/clientController")
// routes.get('/api',(req,resp) =>{
//     resp.send("Hello World");
// });
routes.get("/api/Equipament",clientService.getTest)
routes.get("/api/Equipament/all",clientService.getAll)
module.exports = routes;