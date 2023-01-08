"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const TestMongoService_1 = require("../services/TestMongoService");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// routing
const router = express_1.default.Router();
// routerにルーティングの動作を記述する
router.get("/test/mongo/:user", (req, res, next) => {
    const { user } = req.params;
    const service = new TestMongoService_1.TestMongoService();
    service
        .run(user)
        .then((result) => res.status(200).send(result))
        .catch(next);
});
router.get("/test/mongo/delete/:user", (req, res, next) => {
    const { user } = req.params;
    const service = new TestMongoService_1.TestMongoService();
    service
        .run(user)
        .then((result) => res.status(200).send(result))
        .catch(next);
});
// NOT FOUND
app.use((req, res) => {
    res.status(404);
    res.render("error", {
        param: {
            status: 404,
            message: "not found",
        },
    });
});
//routerをモジュールとして扱う準備
module.exports = router;
