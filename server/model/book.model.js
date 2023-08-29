const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookName:{
        type:String
    },
    authorName:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    price:{
        type:Number
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

