// Add your code here
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { connectToMongo } from "./database/connect.js";

connectToMongo();
const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

app.use(express.json());

// SETUP ROUTES
app.get("/", (req, res) => {
  res.status(200).send({ test: true });
});

app.use("/quotes", router);
app.listen("3000");

export default app;
