import "dotenv/config";
import express from "express";
import cors from "cors";

import { EXPRESS_APP } from "./core/secrets/index.js";

import { router as usersRouter } from "./modules/users/routes.js";
import { router as productsRouter } from "./modules/products/routes.js";

const app = express();
const serverPort = EXPRESS_APP.port;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "Server is Running." });
});

app.use(usersRouter);
app.use(productsRouter);

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});
