const express = require('express')
const routes = express.Router()
const CifrarController = require('./controller/CifrarController')
const DecifrarController = require('./controller/DecifrarController')

routes.post('/cifrar', CifrarController.index)
routes.post('/decifrar', DecifrarController.index)

module.exports = routes