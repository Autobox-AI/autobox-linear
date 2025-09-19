import { Router } from "express";
import { getPing } from "../handlers";

const router: Router = Router();

router.get("/", (req, res) => {
  res.redirect("/swagger");
});

router.get("/ping", getPing);

export default router;
