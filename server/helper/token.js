var jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const signToken = (users) => {
  const token = jwt.sign({  id: users._id},"sss", { expiresIn: "3h"});
  return token;
};

  const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ error: "only auth" });
    }
    const token = await authorization.replace("Bearer ", "");
    jwt.verify(token, "sss", (err, payload) => {
      if (err) {
        if (err.message == "jwt expired") {
          return res.status(401).json({ error: "jwt token expired" });
        }
        return res.status(401).json({ error: err });
      } else {
        const { id } = payload;
  
        const aauth = User.findById(id).then((userdata) => {
          req.user = userdata;
  
          next();
        });
      }
    });
  };

module.exports = { signToken, verifyToken };
