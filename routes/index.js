const myController = require("../controllers");
const routes = require("express").Router()


routes.get("/", myController.awesomeFunction)
routes.get("/tooele", myController.makeBtn)




module.exports = routes