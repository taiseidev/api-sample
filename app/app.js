"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
//body-parser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
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
mongoose.connection.on("error", function (err) {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
});
// 参考
// https://qiita.com/ganyariya/items/85e51e718e56e7d128b8
// https://qiita.com/AkihiroTakamura/items/667159eaa8d9e39de6dd
