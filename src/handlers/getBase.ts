import { Request, Response } from "express";

export const getBase = (req: Request, res: Response) => {
  res.redirect("/swagger");
};
