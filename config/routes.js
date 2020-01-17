const express = require('express')

const routes = express.Router()
const clientService = require('../api/controller/clientController')
const orderOfService = require('../api/controller/orderOfServiceController')




routes.post("/api/client/create",clientService.create)
routes.get("/api/Equipament/all",clientService.getAll)
routes.post("/api/os/create",orderOfService.doCreate)
routes.get("/api/os/all",orderOfService.getAll)
module.exports = routes;