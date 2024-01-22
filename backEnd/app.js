const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoute = require("./Routes/routes");
const url = "mongodb://127.0.0.1:27017/SR_Marketing";
//const url = "mongodb+srv://somesh:cjZ4uGZM6cLIHJhx@learn0.3lykpkd.mongodb.net/";
const app = new express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", mainRoute);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("open", () => {
  console.log("connected...");
});

app.listen(2000, (err) => {
  if (!err) {
    console.log(`Server is running on port: ${2000}!`);
  }
});
