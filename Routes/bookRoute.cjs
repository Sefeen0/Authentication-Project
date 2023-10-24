const ex = require("express");
const bookControl = require("../Controllers/bookController.cjs");
const middleWare = require("../MiddleWares/auth.cjs");
const router = ex.Router();
router.get("/api/books", bookControl.getAll);
router.get("/api/books/:id", bookControl.getOne);
router.post("/api/books", middleWare, bookControl.addBook);
router.put("/api/books/:id", middleWare, bookControl.updateDetails);
router.delete("/api/books/:id", middleWare, bookControl.deleteBook);

module.exports = router;
