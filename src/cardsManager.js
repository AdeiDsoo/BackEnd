import fs from "fs";
import { productsManager } from "./productManager.js";

class CardsManager {
    constructor(path) {
        this.path = path;
    }

    async getProductsCards() {
        try {
            if (fs.existsSync(this.path)) {
                const info = await fs.promises.readFile(this.path, "utf-8");
                const infoParsed = JSON.parse(info);
                return infoParsed;
            } else {
                return [];
            }
        } catch (error) {
            return error;
        }
    }

    async createCard() {
        try {
            const cards = await this.getProductsCards();
            let id;
            let productsCard = [];
            if (!cards.length) {
                id = 1;
            } else {
                id = cards[cards.length - 1].id + 1;
            }
            const newCard = { id, productsCard };
            cards.push(newCard);
            await fs.promises.writeFile(this.path, JSON.stringify(cards));
            return newCard;
        } catch (error) {
            return error;
        }
    }

    async getProductsCardsById(idCard) {
        try {
            const cards = await this.getProductsCards();
            const card = cards.find((c) => c.id === idCard);
            return card;
        } catch (error) {
            return error;
        }
    }

    async addProductsInThisCard(idCard, idProduct) {
        try {
            //agregar condicional para que el idProduct y el idCard sean numeros unicamente -tipo de dato
            if (!idCard || !idProduct) {
                return "this card/product no found or ID is incorrect";
            }
            const cards = await this.getProductsCards();
            const card = cards.find((c) => c.id === idCard);
            // const productsCard = card.productsCard;
            if(!card){
                return 'No found Card'
            }
            const product = await productsManager.getProductById(idProduct);
            if(!product){
                return 'No found Product'
            }

            if (!card.productsCard.find((item) => item.idProduct === idProduct)) {
                card.productsCard.push({ idProduct: product.id, qty: 1 });
                await fs.promises.writeFile(this.path, JSON.stringify(cards));
                return card;
            } 
        //   console.log(cards)
            // await fs.promises.writeFile(this.path, JSON.stringify(productsCard));
            // return productsCard;
            
            // else {
                // const currentProduct=!productsCard.find((item)=>(item.idProduct === idProduct))
                // console.log(currentProduct.qty,'current------>')
                // console.log('else')

            //     const updateProductCard = productsCard.map((item) => {
            //         console.log(idProduct, 'idProduct')
            //         console.log(item.idProduct, 'item')
            //         if (item.idProduct === idProduct) {
            //             console.log(item.qty)
            //             return { idProduct, qty: item.qty + 1 }
            //         } else {
            //             return item
            //         }

            //     })
            //     console.log(updateProductCard)
            // }
            // productsCard.push({ idProduct: product.id, qty: 1 });
            // return card;
        } catch (error) {
            return error;
        }
    }
}

async function testing() {
    const card = new CardsManager("productsCard.json");
    // const result = await cart.getProductsCards();
    // const result = await card.createCard();
    // const result = await card.getProductsCardsById(2);
    const result = await card.addProductsInThisCard(1, 3);
    // const addProducts = await products.addProduct(productExample2);
    // const searchId = await products.getProductsById(1);
    // const deleteProduct = await products.deleteProducts(5);
    // const updateProduct = await products.updateProduct(2, objPrueba);
    console.log(result);
    // console.log(addProducts);
    // console.log(searchId);
    // console.log(deleteProduct);
    // console.log(updateProduct);
}

testing();
