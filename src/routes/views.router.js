import { Router } from "express";
import { productsManager } from "../productManager.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("websocket");
//   res.render("chat");
});

router.get("/home", (req, res) => {
  res.render("home");

});
router.get("/allProducts", async (req, res) => {
  try {
      const product = await productsManager.getProducts({});
      if (!product.length) {
          res.status(200).json({ message: "No products found" });
      } else {
          res.status(200).json({ message: "Products found", product });
      }
  } catch (error) {
      res.status(500).json({ message: error });
  }
});
export default router;