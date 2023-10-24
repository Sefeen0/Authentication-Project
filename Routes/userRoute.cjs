const ex = require("express");
const userControl = require("../Controllers/userController.cjs");
const router = ex.Router();
router.post("/api/users/register", userControl.register);
router.post("/api/users/login", userControl.login);
module.exports = router;
