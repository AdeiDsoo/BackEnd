import { Router } from "express";
import { cartsManager } from "../cartsManager.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const carts = await cartsManager.getProductsCarts();
        console.log(carts);
        if (!carts.length) {
            res.status(200).json({ message: "No carts found" });
        } else {
            res.status(200).json({ message: "Carts found", carts });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
router.get("/:idCart", async (req, res) => {
    const { idCart } = req.params;

    try {
        const id = Number(idCart);
        const cart = await cartsManager.getProductsCartsById(id);

        if (!cart) {
            res.status(400).json({ message: "No carts found" });
        } else {
            const productsCart = cart.productsCart;
            res
                .status(200)
                .json({ message: "Carts found whit this products", productsCart });
        }
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
});
router.post("/:idCart", async (req, res) => {
    const { idCart } = req.params;
    // console.log(idCart);
    try {
        const id = Number(idCart);
        const newCart = await cartsManager.createCart(id);
        console.log(newCart);
        res
            .status(200)
            .json({ message: "New cart created", productsCart: newCart });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
router.post("/:idCart/product/:idProduct", async (req, res) => {
    const { idCart, idProduct } = req.params;
    try {
        const addProduct = await cartsManager.addProductsInThisCart(
            +idCart,
            +idProduct
        );
        console.log(addProduct)
        res.status(200).json({ message: "Add Product in this cart", addProduct });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
export default router;
