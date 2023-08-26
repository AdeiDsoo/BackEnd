//HANS ON LAB
class ProductManager {

  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return 'Datos incompleto, ingresa todo los campos requeridos'
    }

    products.forEach(element => {
      const allCodes = element.code
      if (code === allCodes) {
        console.log('este elemento ya existe')
      }
    })

    const product = {
      id: this.eventos.length
        ? this.eventos[this.eventos.length - 1].code + 1
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
const algo = new ProductManager()
