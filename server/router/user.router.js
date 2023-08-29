const userController = require("../controller/user.controller")

const router = require("express").Router()

router.post("/signup",userController.signUp)
router.post("/signin",userController.singIn)
router.get("/users",userController.allUser)
router.get("/users/:_id",userController.singleUser)
router.delete("/users/:_id",userController.deleteUser)
router.put("/users/:_id",userController.updateUser)



module.exports = router;