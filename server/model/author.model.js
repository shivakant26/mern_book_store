const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    }
})

module.exports = mongoose.model("author",authorSchema);