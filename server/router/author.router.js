const authorController = require("../controller/author.controller")

const router = require("express").Router()

router.post("/signup",authorController.signUp)
router.post("/signin",authorController.singIn)
router.get("/users",authorController.allUser)



module.exports = router;