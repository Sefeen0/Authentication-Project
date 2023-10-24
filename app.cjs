const ex = require("express");
const mongo = require("mongoose");
const bp = require("body-parser");
const routerUser = require("./Routes/userRoute.cjs");
const routerBook = require("./Routes/bookRoute.cjs");
const app = ex();
app.use(bp.json());
const url =
  "mongodb+srv://mag:M123M@mag.reze6s3.mongodb.net/data?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    mongo.set("strictQuery", false);
    mongo.connect(url);
    console.log("connected");
  } catch (err) {
    console.log("error" + err);
    process.exit();
  }
};
connectDb();
app.use("/", routerUser);
app.use("/", routerBook);
app.listen(5000);
