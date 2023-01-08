import express from "express";
import helmet from "helmet";
import cors from "cors";
import { TestMongoService } from "../services/TestMongoService";
const app = express();
app.use(helmet());
app.use(cors());
// routing
const router = express.Router();

// routerにルーティングの動作を記述する
router.get("/test/mongo/:user", (req, res, next) => {
  const { user } = req.params;
  const service = new TestMongoService();

  service
    .run(user)
    .then((result) => res.status(200).send(result))
    .catch(next);
});

router.get("/test/mongo/delete/:user", (req, res, next) => {
  const { user } = req.params;
  const service = new TestMongoService();

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
