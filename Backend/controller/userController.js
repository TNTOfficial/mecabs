
const User = require("../db/models/userModels")


//get all user in user list
const getAllProductsTesting = async(req,res)=>{
    const content = await User.find({})
    res.status(200).json({
        content
    })

};



module.exports = {getAllProductsTesting}