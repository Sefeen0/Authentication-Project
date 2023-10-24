const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const fullToken = req.headers.authorization;
    const token = fullToken?.split(" ")[1];
    if (!token) return res.status(403).send({ Message: "Access Denied" });
    let user = jwt.verify(token, "securitykey");
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Invalid Jwt");
  }
};
