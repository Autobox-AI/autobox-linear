import { Request, Response } from "express";

export const getPing = (req: Request, res: Response) => {
  res.status(200).send("pong");
};
