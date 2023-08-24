const Book = require("./../model/book.model");
const createBook = async(req, res) =>{
    console.log(req.file)
    const { bookName , description } = req.body;
    try {
        if(!bookName || !description){
            res.status(400).json({
                message:"all filed is Required!"
            })
        }
        const book = await Book.create({
            bookName:bookName,
            description:description,
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
        const book = await Book.find({_id:req.params._id});
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
    console.log(req.body ,req.params._id)
    try {
        const book = await Book.findByIdAndUpdate(req.params._id,req.body,{new:true})
        if(book === null){
            res.status(400).json({
                message:"Product Not Aviable"
            })
        }else{
            res.status(200).json({
                data:book,
                message:"product Update sucessfully"
            })
        }
    } catch (error) {
        res.status(200).json({
            message:error.message
        })
    }
}

module.exports = { createBook , allBook , singleBook , deleteBook , updateBook};