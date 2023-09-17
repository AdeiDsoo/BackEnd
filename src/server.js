
import express from 'express'
import { productsManager } from './productManager.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  try {
    const product = await productsManager.getProducts(req.query)
    if (!product.length) {
      res.status(200).json({ message: 'No users found' })
    } else {
      res.status(200).json({ message: 'Users found', product})
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})
//http://localhost:8080?limit=2
//http://localhost:8080

app.get('/:idProduct', async (req, res) => {
  const { idProduct } = req.params
  try {
    const id= Number(idProduct)
    const product = await productsManager.getProductById(id)

    if (!product) {
      res.status(400).json({ message: 'User not found with the id sent' })
    } else {
      res.status(200).json({ message: 'User found', product })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

//http://localhost:8080/3

app.post('/', async (req, res) => {
  const { title, description, code, price, status, stock, category, thumbails } = req.body
  if (!title || !description || !code || !price ||  !stock || !category ) {
    return res.status(400).json({ message: 'Some data is missing' })
  }
  if( typeof price !== "number" || typeof code !== "string" || typeof description !== "string" || typeof title !== "string"  || typeof category !== "string" || typeof stock !== "number"){
return res.status(400).json({ message: 'Enter correct type data' })
  }
  try {
    const newProduct = await productsManager.createProduct(req.body)
    res.status(200).json({ message: 'Product created', product: newProduct })
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.delete('/:idProduct', async (req, res) => {
  const { idProduct } = req.params
  try {
    const response = await productsManager.deleteProduct(+idProduct)
    if (response === -1) {
      res.status(400).json({ message: 'User not found with the id sent' })
    } else {
      res.status(200).json({ message: 'User deleted' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.put('/:idProduct', async (req, res) => {
  const { idProduct } = req.params
  try {
    const response = await productsManager.updateProduct(+idProduct, req.body)
    if(req.body.id){
     return res.status(200).json({ message: 'id is a non-editable propety' })
    }
    if (response === -1) {
      res.status(400).json({ message: 'Product not found with the id sent' })
    } else {
      res.status(200).json({ message: 'Product updated' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.post('/api/carts', async (req, res) => {
//   const { title, description, code, price, status, stock, category, thumbails } = req.body
//   if (!title || !description || !code || !price ||  !stock || !category ) {
//     return res.status(400).json({ message: 'Some data is missing' })
//   }
//   if( typeof price !== "number" || typeof code !== "string" || typeof description !== "string" || typeof title !== "string"  || typeof category !== "string" || typeof stock !== "number"){
// return res.status(400).json({ message: 'Enter correct type data' })
//   }
//   try {
//     const newProduct = await productsManager.createProduct(req.body)
//     res.status(200).json({ message: 'Product created', product: newProduct })
//   } catch (error) {
//     res.status(500).json({ message: error })
//   }
})

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})