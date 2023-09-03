//geProductsById- recibe un id y traer la informacion del producto con el id correspondenidnte-devuelve un objeto
//updateProduct - recobe el id y actualizar alguno de los campos o todo el objeto .- del articulo con ese id
//deleteProduct - recibe un id y elimina el producto con dicho id

const fs = require("fs");

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const allProducts = await fs.promises.readFile(this.path, "utf-8");
                return JSON.parse(allProducts);
            } else {
                return [];
            }
        } catch (error) {
            return error;
        }
    }

    async addProduct(obj) {
        try {
            if (
                !obj.title ||
                !obj.description ||
                !obj.price ||
                !obj.thumbnail ||
                !obj.code ||
                !obj.stock
            ) {
                return "Datos incompleto, ingresa todo los campos requeridos";
            }
            const products = await this.getProducts();
            const productCode = products.find((e) => e.code === obj.code);
            if (productCode) {
                return "ya existe este codigo, ingresa otro codigo para el producto";
            }

            let id;
            if (!products.length) {
                id = 1;
            } else {
                id = products[products.length - 1].id + 1;
            }

            // !products.length ? products[products.length - 1].id + 1 : id=1

            products.push({ id, ...obj });
            await fs.promises.writeFile(this.path, JSON.stringify(products));
            return "Producto agregado";
        } catch (error) {
            return error;
        }
    }

    async getProductsById(idProduct) {
        try {
            const products = await this.getProducts();
            const product = products.find((e) => e.id === idProduct);
            if (product) {
                return product;
            }
            return "no hay coincidencias en la busqueda";
        } catch (error) {
            return error;
        }
    }
 
    async deleteProducts(idProduct) {
        try {
            const products = await this.getProducts();
            const product = products.find((e) => e.id === idProduct);
            if (product) {
                const productsWithoutProduct = products.filter(
                    (product) => product.id !== idProduct
                );
                await fs.promises.writeFile(
                    this.path,
                    JSON.stringify(productsWithoutProduct)
                );
                return "procuto eliminado";
            }
            return "no existe el producto que desea eliminar";
        } catch (error) {
            return error;
        }
    }

    async updateProduct() {
        try {
        } catch (error) {
            return error;
        }
    }
    
}

const productExample = {
    title: "title1",
    description: "description1",
    price: 30,
    thumbnail: "url1",
    code: 563,
    stock: 3,
};

async function testing() {
    const products = new ProductManager("clase3/products.json");
    const addProducts = await products.addProduct(productExample);
    const searchId = await products.getProductsById(7);
    const deleteProduct = await products.deleteProducts(5);
    const result = await products.getProducts();
    console.log(result);
    console.log(addProducts);
    console.log(searchId);
    console.log(deleteProduct);
}

testing();
