const authorController = require("../controller/author.controller")

const router = require("express").Router()

router.post("/signup",authorController.signUp)
router.post("/signin",authorController.singIn)
router.get("/users",authorController.allUser)
router.get("/users/:_id",authorController.singleUser)
router.delete("/users/:_id",authorController.deleteUser)
router.put("/users/:_id",authorController.updateUser)



module.exports = router;