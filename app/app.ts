import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();
app.use(helmet());
app.use(cors());

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port
const port = process.env.PORT || 3000;

// routing
const router = require("./routes/");
app.use("/", router);

// run server
app.listen(port);
console.log("listen on port " + port);

// setting mongodb
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect("mongodb://localhost:27017/app1db", options);
mongoose.connection.on("error", function (err: any) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

// 参考
// https://qiita.com/ganyariya/items/85e51e718e56e7d128b8
// https://qiita.com/AkihiroTakamura/items/667159eaa8d9e39de6dd
