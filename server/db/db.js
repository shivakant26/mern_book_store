const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookstore").then(() => {
    console.log("connected!")
})