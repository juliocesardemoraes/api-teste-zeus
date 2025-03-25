import { Router } from "express";
import { mockQuotes } from "../quotes/mock.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send(mockQuotes);
});

export default router;
