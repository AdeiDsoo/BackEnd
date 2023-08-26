//HANS ON LAB
class ProductManager {
   
    constructor() {
      this.products = [];
    //   const product = {
    //     title, description, price, thumbnail, code, stock
    //   };
    }
   
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        id: this.eventos.length
          ? this.eventos[this.eventos.length - 1].code + 1  //como validar que no se repida el code?
          : 1,
          code,
        title,
        description,
        price,
        thumbnail, stock
      };
      this.products.push(product);
    }
  
    getProducts(){
        return [...products]
    }
    getProductsById(idProduct){
        const product = this.products.find((e) => e.id === idProduct);
        if(!product){
            console.log('Not Found')
        }

    }
   
  
  }
  const algo= new ProductManager()
