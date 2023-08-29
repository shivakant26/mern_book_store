const Book = require("./../model/book.model");
const createBook = async(req, res) =>{
    const { bookName , description , authorName , price } = req.body;
    try {
        if(!bookName || !description || !price){
            res.status(400).json({
                message:"all filed is Required!"
            })
        }
        const book = await Book.create({
            bookName:bookName,
            description:description,
            authorName:authorName,
            price:price,
            coverImgUrl:`${req.file.destination}/${req.file.filename}`
        })
        res.status(200).json({
            data:book,
            message:"book created !"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const allBook = async(req,res)=>{
    try {      
        const book = await Book.find();
        if(book){
            res.status(200).json({
                data:book,
                message:"fetch book succussfully"
            })
        }else{
            res.status(400).json({
                message:"no Record Avalible!"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const singleBook = async(req,res)=>{
    try {     
        const book = await Book.find({_id:req.params._id}).populate("authorName",{fullName:1,_id:0});
        if(book){
            res.status(200).json({
                data:book,
                message:"fetch single Book succussfully"
            })
        }else{
            res.status(400).json({
                message:"no Record Avalible!"
            })
        }
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const deleteBook = async(req,res)=>{
    try {     
        const book = await Book.findByIdAndDelete({_id:req.params._id});
        if(!book){
            res.status(400).json({
                data:book,
                message:"currently No Book here..."
            })
        }else{
            res.status(200).json({
                message:"delete Book !"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


const updateBook = async(req , res) =>{
    const {_id} = req.params
    try {
        const book = await Book.findByIdAndUpdate(_id,req.body,{new:true})
        if(book === null){
            res.status(400).json({
                message:"Book Not Aviable"
            })
        }else{
            res.status(200).json({
                data:book,
                message:"Book Update sucessfully"
            })
        }
    } catch (error) {
        res.status(200).json({
            message:error.message
        })
    }
}

module.exports = { createBook , allBook , singleBook , deleteBook , updateBook};