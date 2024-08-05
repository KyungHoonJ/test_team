import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.get("/api/todo/:page", (req: Request, res: Response) => {
  res.send("now testing");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
