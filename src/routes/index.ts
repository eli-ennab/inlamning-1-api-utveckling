import express from "express"
import products from './products'

// instantiate a new router
const router = express.Router()

// GET /
router.get('/', (req, res) => {
	res.send({
		message: "WELCOME TO THE CANDYSHOP",
	})
})

// /products
router.use('/products', products)

export default router
