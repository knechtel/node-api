const express = require('express')

const routes = express.Router()
const clientService = require('../api/controller/clientController')
const orderOfService = require('../api/controller/orderOfServiceController')


routes.get("/api/Equipament",clientService.getTest)
routes.get("/api/Equipament/all",clientService.getAll)
routes.get("/api/os/create",orderOfService.doCreate)
routes.get("/api/os/all",orderOfService.getAll)
module.exports = routes;