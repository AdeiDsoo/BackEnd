import express from "express";
import productsRouter from "./router/products.router.js";
import cardsRouter from "./router/card.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productsRouter);
app.use("/api/cards", productsRouter);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
