const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/** 
*@description Root Route
@method GET/
*/
route.get("/", services.homeRoutes);

/** 
*@description add users
@method /add-user
*/
route.get("/add-user", services.add_user);

/** 
*@description update users
@method /update-user
*/
route.get("/update-user", services.update_user);

//API

//post
route.post("/api/users", controller.create);

//get
route.get("/api/users", controller.find);

//put
route.put("/api/users/:id", controller.update);

//delete
route.delete("/api/users/:id", controller.delete);

module.exports = route;
