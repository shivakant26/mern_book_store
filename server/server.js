require("./db/db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user.router");
const bookRouter = require("./router/book.router");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use("/public/assets/images", express.static("public/assets/images"));
app.use("/v1", userRouter);
app.use("/v1", bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
