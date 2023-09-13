const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    blogTitle:{
        type:String
    },
    blogImage:{
        type:String
    },
    description:{
        type:String
    }
},{
    timesstamps : true
})
// blogSchema.set("timestamps",true)

module.exports = mongoose.model("blog", blogSchema)