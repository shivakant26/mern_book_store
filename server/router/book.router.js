const bookController = require("../controller/book.controller");
const { uploadImage } = require("../helper/multer");
const { verifyToken } = require("../helper/token");
const router = require("express").Router();

router.post(
  "/book",
  uploadImage.single("coverImgUrl"),
  verifyToken,
  bookController.createBook
);
router.get("/book", bookController.allBook);
router.get("/book/:_id", bookController.singleBook);
router.delete("/book/:_id", bookController.deleteBook);
router.put(
  "/book/:_id",
  uploadImage.single("coverImgUrl"),
  bookController.updateBook
);
router.post("/session/create", bookController.createSession);

module.exports = router;
