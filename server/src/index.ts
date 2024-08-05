import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import path from "path";

config({ path: path.join(__dirname, ".env") });

const app: Express = express();
app.use(express.json());

app.set("port", process.env.PORT || 3000);
console.log(process.env.PORT);

app.get("/api/todo/:page", (req: Request, res: Response) => {
  console.log("testing");
  res.json([{ content: "testing" }]);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
