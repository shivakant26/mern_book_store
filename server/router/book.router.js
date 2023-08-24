const bookController = require("../controller/book.controller")
const { uploadImage } = require("../helper/multer")
const router = require("express").Router()

router.post("/book",uploadImage.single("coverImgUrl"),bookController.createBook)
router.get("/book",bookController.allBook)
router.get("/book/:_id",bookController.singleBook)
router.delete("/book/:_id",bookController.deleteBook)
router.put("/book/:_id",bookController.updateBook)


module.exports = router;