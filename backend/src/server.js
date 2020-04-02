const express = require('express')
const server = express()
const routes = require('./routes')
server.use(routes)
server.listen(3333, () => {
    console.log("Server started")
})