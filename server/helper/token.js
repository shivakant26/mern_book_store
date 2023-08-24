var jwt = require("jsonwebtoken");

const signToken = (authorId) => {
  var token = jwt.sign({ authorId: authorId }, "sss" , {expiresIn:"1h"});
  return token;
};

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "only auth" });
    }
    const token = await authorization.replace("Bearer ", "");
    jwt.verify(token, "sss", (err, payload) => {
        console.log("payload",payload)
      if (err) {
        if (err.message == "jwt expired") {
          return res.status(401).json({ error: "jwt token expired" });
        }
        return res.status(401).json({ error: err });
      }
      next();
    });
  }

module.exports = { signToken, verifyToken };
