const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookName:{
        type:String
    },
    description:{
        type:String
    },
    coverImgUrl:{
        type:String
    }
})
bookSchema.set("timestamps",true)

module.exports = mongoose.model("book",bookSchema)

