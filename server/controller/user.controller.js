const Users = require("../model/user.model");
const { comparePassword, hashPassword } = require("../helper/becrypt");
const { signToken } = require("../helper/token");
var jwt = require("jsonwebtoken");
const { sendOTPEmail } = require("../helper/mail");
const { randomOtp } = require("../helper/otpGenerator");

const signUp = async (req, res) => {
  const { fullName, email, password, gender, role } = req.body;
  try {
    if (!fullName || !email || !password || !gender) {
      res.status(404).json({
        message: "all field Required!",
      });
    } else {
      const userExits = await Users.findOne({ email: req.body.email });
      if (userExits) {
        return res.status(400).json({
          message: "you are allready registerd",
        });
      }
      const hasedPassword = await hashPassword(password, 10);
      const users = await Users.create({
        fullName: fullName,
        email: email,
        password: hasedPassword,
        gender: gender,
        role: role,
      });

      if (!users) {
        return res.status(500).json({
          message: "something went wrong",
        });
      }

      res.status(200).json({
        data: users,
        message: "Users Registerd !",
      });
    }
  } catch (error) {}
};

const singIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "please fill all fields",
      });
    } else {
      const users = await Users.findOne({
        email: req.body.email,
      });
      if (!users) {
        return res.status(400).json({
          message: "you are not Registerd",
        });
      }
      const isMatch = await comparePassword(req.body.password, users.password);
      if (isMatch) {
        var token = signToken(users._id);
        return res.status(200).json({
          role: users.role,
          email: users.email,
          id: users._id,
          message: "login succussfully",
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "some-thing went wrong",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const allUser = async (req, res) => {
  try {
    const users = await Users.find();
    if (users) {
      res.status(200).json({
        data: users,
        message: "user fetch successufully",
      });
    } else {
      res.status(400).json({
        message: "Record not Avaible",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const users = await Users.findByIdAndDelete({ _id: req.params._id });
    if (!users) {
      res.status(400).json({
        message: "currently No User here...",
      });
    } else {
      res.status(200).json({
        message: "Delete User Succussfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const users = await Users.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (users === null) {
      res.status(400).json({
        message: "No Record Found !",
      });
    } else {
      res.status(200).json({
        data: users,
        message: "User Update Succussfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const singleUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const users = await Users.find({ _id }).select("-password");
    if (users) {
      res.status(200).json({
        data: users,
        message: "fetch single User succussfully",
      });
    } else {
      res.status(400).json({
        message: "no Record Avalible!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    const { _id } = req.user;
    console.log(_id);
    if (!password || !newPassword) {
      return res.status(400).json({
        message: "all fields are require",
      });
    }
    const user = await Users.findOne({ _id });
    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "old Password wrong!",
      });
    }
    const newHasedPassword = await hashPassword(newPassword, 10);
    await Users.findByIdAndUpdate(
      _id,
      { password: newHasedPassword },
      { new: true }
    );
    return res.status(200).json({
      message: "password updated succussfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "please fill all fields",
      });
    }
    const user = await Users.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        message: "user not found for given email id",
      });
    }
    const otp = randomOtp();
    const updatedUser = await Users.findByIdAndUpdate(user._id, { otp: otp });
    if (!updatedUser) {
      return res.status(200).json({
        message: "something went wrong please try again",
      });
    }
    await sendOTPEmail(email, otp);
    return res.status(200).json({
      message: "email sent success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        message: "please fill all fields",
      });
    }
    const user = await Users.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        message: "user not found for given email id",
      });
    }
    if (otp != user.otp) {
      return res.status(400).json({
        message: "otp verification failed",
      });
    }
    return res.status(200).json({
      message: "otp verification successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    let { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({
        message: "please fill all fields",
      });
    }
    const user = await Users.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        message: "user not found for given email id",
      });
    }
    const newHasedPassword = await hashPassword(newPassword, 10);
    const updatedUser = await Users.findByIdAndUpdate(
      user._id,
      { password: newHasedPassword },
      { new: true }
    );
    if (!updatedUser) {
      res.status(400).json({
        message: "someting went wrong!",
      });
    }
    res.status(200).json({
      message: "password updated succussfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  signUp,
  singIn,
  allUser,
  deleteUser,
  updateUser,
  singleUser,
  changePassword,
  sendEmail,
  verifyOtp,
  forgotPassword,
};
