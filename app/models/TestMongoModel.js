"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose")); //mongoDBに接続するためのライブラリ
const Schema = mongoose_1.default.Schema; //mongoDBのスキーマを作る
const TestMongoSchema = new Schema({
    user: String,
    email: String,
}, {
    collection: "test_user",
});
// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
const TestMongoModel = mongoose_1.default.model("TestMongoModel", TestMongoSchema);
exports.default = TestMongoModel;
