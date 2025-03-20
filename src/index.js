// Add your code here
import express from "express";
import cors from "cors";

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
