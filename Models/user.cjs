const mongo = require("mongoose");
const bcrypt = require("bcrypt");
const schema = mongo.Schema;

const userSchema = new schema({
  name: String,
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  password: String,
  role: { type: String, default: "User" },
});

userSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

module.exports = mongo.model("Users", userSchema);
