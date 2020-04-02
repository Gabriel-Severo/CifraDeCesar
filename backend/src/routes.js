const express = require('express')
const CifrarController = require('./controller/CifrarController')
const DecifrarController = require('./controller/DecifrarController')
const routes = express.Router()

routes.post('/cifrar', CifrarController.index)
routes.post('/decifrar', DecifrarController.index)

module.exports = routes