const bookModel = require("../Models/book.cjs");
exports.getAll = async (req, res) => {
  try {
    const books = await bookModel.find();
    if (books.length === 0) {
      return res.json({ Message: "Books Not Founded", data: [] });
    } else {
      return res.json({ Message: "All Books Founded", data: books });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err });
  }
};
exports.getOne = async (req, res) => {
  try {
    const book = await bookModel.find({ _id: req.params.id });
    if (book.length === 0) {
      return res.json({ Message: "Book Not Founded", data: [] });
    } else {
      return res.json({ Message: "Book Founded", data: book });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
exports.addBook = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const newBook = await bookModel.create(req.body);
      return res.json({ Message: "Book Added", data: newBook });
    } else {
      return res.status(403).send({ massage: "Do Not Allowed" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
exports.updateDetails = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      await bookModel.findByIdAndUpdate(req.params.id, req.body);
      return res.json({ Message: "Book updated", data: [] });
    } else {
      return res.status(403).send({ massage: "Do Not Allowed" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
exports.deleteBook = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      await bookModel.findByIdAndDelete(req.params.id);
      return res.json({ Message: "Book Deleted", data: [] });
    } else {
      return res.status(403).send({ massage: "Do Not Allowed" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
