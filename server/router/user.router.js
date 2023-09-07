const userController = require("../controller/user.controller")
const { verifyToken } = require("../helper/token")

const router = require("express").Router()

router.post("/signup",userController.signUp)
router.post("/signin",userController.singIn)
router.get("/users",userController.allUser)
router.get("/user",verifyToken,userController.singleUser)
router.delete("/users/:_id",userController.deleteUser)
router.put("/users/:_id",userController.updateUser)
router.post("/users/change-password",verifyToken, userController.changePassword)
router.post("/users/send-otp",userController.sendEmail)
router.post("/users/verify-otp",userController.verifyOtp)
router.post("/users/forgot-password",userController.forgotPassword)



module.exports = router;