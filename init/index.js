const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//connection to our DataBase
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
//creating a initialize DB function
const initDB = async () => {
    //initially deleting our all data if it exist 
    await Listing.deleteMany({});
    //initData is an object itself in data.js
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();