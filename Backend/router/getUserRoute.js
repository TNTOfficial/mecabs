const express = require("express")


const {
 
    getAllProductsTesting,
  
}= require("../controller/userController");
const taskRouter = require("./taskRouter");


//to get data at browser
taskRouter.get("/users", getAllProductsTesting);



module.exports = taskRouter;