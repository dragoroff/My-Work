const mongoose = require('mongoose');

// let defaultType = {type: String, unique: true, required: true}
let personSchema = new mongoose.Schema({
        picture: String,
        name: String,
        phone: String,
        address: String
});

let Person = mongoose.model("Person", personSchema, "persons");

mongoose.connect('mongodb://localhost:27017/Shindler_List', (err)=>{
    console.log("We're connected to DB");
})

module.exports = Person;