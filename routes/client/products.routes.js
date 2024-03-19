const express = require("express");
const routes = express.Router();
const controller = require("../../controller/client/product.controller")
routes.get("/products",controller.index);
module.exports = routes;