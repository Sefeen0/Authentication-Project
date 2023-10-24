const userModel = require("../Models/user.cjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const hashpass = await bcrypt.hash(req.body.password, 10);
    newUser.password = hashpass;
    let user = await newUser.save();
    return res.json({
      message: "registered",
      user: { name: user.name, email: user.email, id: user._id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err });
  }
};
exports.login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: "failed" });
    }
    const token = jwt.sign(
      { name: user.name, email: user.email, id: user._id, role: user.role },
      "securitykey"
    );
    return res.json({
      message: "logged in",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
        role: user.role,
        token: token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
