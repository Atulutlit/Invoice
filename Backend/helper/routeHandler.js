const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/admin";

const adminRoutes = require("../");

// admin(login)
baseRouter.use("/", adminRoutes);


module.exports = { baseRouter, basePath };
