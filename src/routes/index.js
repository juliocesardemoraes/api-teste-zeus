import { Router } from "express";
import { mockQuotes } from "../quotes/mock.js";
import { Quote } from "../database/schema/Quote.js";

const router = Router();

router.get("/", async (req, res) => {
  const response = await Quote.find(req.body); // BUSCAR TODOS

  res.status(200).send(response);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  if (!req?.body?.id) {
    return res
      .status(400)
      .send({ error: true, message: "Você deve enviar o id da quote" });
  }

  try {
    const response = await Quote.create(req.body); // INSERIR DADOS
    res.status(200).send(response);
  } catch (error) {
    console.log(error.code);

    const customMessage =
      error.code === 11000 ? "id já foi inserido" : "Erro na aplicação";

    res.status(500).send({ error: true, message: customMessage });
  }
});

router.post("/bulk/", async (req, res) => {
  try {
    const response = await Quote.insertMany(req.body); // INSERIR DADOS
    res.status(200).send(response);
  } catch (error) {
    console.log(error.code);

    const customMessage =
      error.code === 11000 ? "id já foi inserido" : "Erro na aplicação";

    res.status(500).send({ error: true, message: customMessage });
  }
});

export default router;
