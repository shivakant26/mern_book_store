const router = require("express").Router();
const blogController = require("../controller/blog.controller");
const { uploadImage } = require("../helper/multer");

router.post("/blog",uploadImage.single("blogImage"), blogController.createBlog);
router.get("/blog",blogController.allBlog);
router.get("/blog/:_id",blogController.singleBlog);
router.delete("/blog/:_id",blogController.deleteBlog);


module.exports = router;