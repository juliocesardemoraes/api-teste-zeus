import express from "express";
import { mockQuotes } from "../quotes/mockData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(mockQuotes);
});

export default router;
