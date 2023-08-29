const Users = require("../model/user.model");
const { comparePassword, hashPassword } = require("../helper/becrypt");
const { signToken } = require("../helper/token");

const signUp = async (req, res) => {
  const { fullName, email, password, gender , role } = req.body;
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
        email:email,
        password: hasedPassword,
        gender: gender,
        role:role
      });
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
          role:users.role,
          email:users.email,
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
    const users = await Users.findByIdAndUpdate(req.params._id,req.body,{new:true})
    if(users === null){
      res.status(400).json({
        message:'No Record Found !'
      })
    }else{
      res.status(200).json({
        data:users,
        message:"User Update Succussfully"
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const singleUser = async(req,res)=>{
  try {     
      const users = await Users.find({_id:req.params._id});
      if(users){
          res.status(200).json({
              data:users,
              message:"fetch single User succussfully"
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

module.exports = { signUp, singIn, allUser, deleteUser , updateUser , singleUser};
