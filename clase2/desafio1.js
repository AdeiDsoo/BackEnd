//HANS ON LAB
class ProductManager {

  constructor() {
   
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return 'Datos incompleto, ingresa todo los campos requeridos'
    }

    this.products.forEach(element => {
      const allCodes = element.code
      if (code === allCodes) {
        console.log('este elemento ya existe')
      }
    })

    const product = {
      id: this.products.length
        ? this.products[this.products.length - 1].id + 1
        : 1,
      code,
      title,
      description,
      price,
      thumbnail, stock
    };
    this.products.push(product);
  }

  getProducts() {
    return [...products]
  }
  getProductsById(idProduct) {
    const product = this.products.find((e) => e.id === idProduct);
    if (!product) {
      console.log('Not Found')
    }

  }


}
const product = new ProductManager()

// const product1 = new ProductManager('title1', 'description1',' price1', 'thumbnail1', 'code1', 'stock1')
// const product2 = new ProductManager('title2', 'description2',' price2', 'thumbnail2', 'code2', 'stock2')

product.addProduct('title0', 'description0',' price0', 'thumbnail0', 'code0', 'stock0')
product.addProduct('title1', 'description1',' price1', 'thumbnail1', 'code1', 'stock1')
console.log( product)