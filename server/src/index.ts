import express, { Express } from "express";
import { config } from "dotenv";

config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
