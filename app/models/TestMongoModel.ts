import mongoose from "mongoose"; //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る

const TestMongoSchema = new Schema(
  {
    user: String,
    email: String,
  },
  {
    collection: "test_user",
  }
);

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
const TestMongoModel = mongoose.model("TestMongoModel", TestMongoSchema);
export default TestMongoModel;
