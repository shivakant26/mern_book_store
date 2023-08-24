const bcrypt = require("bcrypt");

const hashPassword = async(password) =>{
    const hPassword = await bcrypt.hash(password, 10);
    return hPassword;
}

const comparePassword = async(reqPassword , userPassword) =>{
    const isMatch = await bcrypt.compare(reqPassword , userPassword);
    return isMatch;
}

module.exports = { hashPassword , comparePassword }