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
                return "producto eliminado";
            }
            return "no existe el producto que desea eliminar";
        } catch (error) {
            return error;
        }
    }

    async updateProduct(idProduct, obj) {
        //actualiza alguno de los campos o todo el objeto
        try {
            const products = await this.getProducts();
            const newArrayProducts = products.filter(
                (product) => product.id !== idProduct
            );
            const product = products.find((e) => e.id === idProduct);
            if (product) {
                newArrayProducts.push({ ...product, ...obj });
                await fs.promises.writeFile(
                    this.path,
                    JSON.stringify(newArrayProducts)
                );

                return `Producto con el id ${idProduct}, ha sido actualizado`;
            }
            return "no existe el producto que desea actualizar, introduce un id valido";
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
const productExample2 = {
    title: "title2",
    description: "description2",
    price: 10,
    thumbnail: "url2",
    code: 123,
    stock: 22,
};
const objPrueba = {
    price: 5,
    stock: 100,
};

async function testing() {
    const products = new ProductManager("products.json");
    // const result = await products.getProducts();
    const addProducts = await products.addProduct(productExample2);
    // const searchId = await products.getProductsById(1);
    // const deleteProduct = await products.deleteProducts(5);
    // const updateProduct = await products.updateProduct(2, objPrueba);
    // console.log(result);
    console.log(addProducts);
    // console.log(searchId);
    // console.log(deleteProduct);
    // console.log(updateProduct);
}

testing();
