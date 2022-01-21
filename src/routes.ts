import { Express, Request, Response } from "express";
export default function (app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
  });
}
