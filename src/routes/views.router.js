import { Router } from "express";
import { productsManager } from "../productManager.js";

const router = Router();

router.get("/realtimeproducts", async(req, res) => {
  const products = await productsManager.getProducts();
  res.render("realTimeProducts", { products });
});

router.get("/home", async(req, res) => {
  const products = await productsManager.getProducts();
  res.render("home", { products });

});

export default router;