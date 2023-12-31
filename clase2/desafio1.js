class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return "Datos incompleto, ingresa todo los campos requeridos";
    }
    const productCode = this.products.find((e) => e.code === codge);
    if (productCode) {
      return "ya existe este codigo";
    }
    

    const product = {
      id: this.products.length
        ? this.products[this.products.length - 1].id + 1
        : 1,
      code,
      title,
      description,
      price,
      thumbnail,
      stock,
    };
    this.products.push(product);
  }

  getProducts() {
    return [...this.products]
  }
  getProductsById(idProduct) {
    const product = this.products.find((e) => e.id === idProduct);
    if (!product) {
      return "Not Found";
    }
    console.log('si hay concidencia')
    return product
  }
}
const product = new ProductManager();
console.log(product.getProducts());
product.addProduct(
  "title0",
  "description0",
  " price0",
  "thumbnail0",
  "code0",
  "stock0"
);
console.log(product.getProducts()); 
product.addProduct(
  "title1",
  "description1",
  " price1",
  "thumbnail1",
  "code1",
  "stock1"
);
product.addProduct(
  "title2",
  "description2",
  "price2",
  "thumbnail2",
  "code1",
  "stock2"
);

console.log(product.getProducts());
