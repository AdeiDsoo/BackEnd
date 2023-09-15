import express from "express";
import { productsManager } from "./ProductManager.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/products', async (req, res) => {
    try {
        const users = await productsManager.getProducts(req.query)
        if (!users.length) {
            res.status(200).json({ message: 'No Products Found' })
        }
        res.status(200).json({ message: 'Products Found', users })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/products/:idProduct', async (req, res) => {
    const { idProduct } = req.params
    const id = Number(idProduct)
    try {
        const product = await productsManager.getProductById(id)
        if (!product) {
            res.status(400).json({ message: 'Product not found with the id sent' })
        } else {
            res.status(200).json({ message: 'Product found', product })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.listen(8080, () => {
    console.log('Escuchando al puerto 8080');
})