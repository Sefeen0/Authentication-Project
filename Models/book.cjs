const mongo = require("mongoose");
const schema = mongo.Schema;

const bookSchema = new schema({
  name: String,
  author: String,
  Description: String,
  price: Number,
});

module.exports = mongo.model("Books", bookSchema);
