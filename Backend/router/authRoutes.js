const Router = require("express");
const { registerUser,loginUser } = require("../controller/authController.js");
const Product = require("../db/models/taskModel.js");


const authRoutes = Router();

authRoutes.post("/user/register", registerUser);
authRoutes.post("/user/login", loginUser);


module.exports = authRoutes;

