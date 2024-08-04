const mongoose=require("mongoose")
require('dotenv').config()
DATABASE=process.env.DATABASEURL
const url="mongodb+srv://admin:admin@admin.47chxkp.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}