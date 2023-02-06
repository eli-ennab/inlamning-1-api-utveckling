import express from 'express'
import { index, store, show} from '../controllers/product_controller'
import { body } from 'express-validator'
const router = express.Router()

// GET /products
router.get('/', index)

// GET /products/:productId
router.get('/:productId', show)

// POST /products
router.post('/',
	body('name').isString(),
	body('price').isLength( { min: 1 }),
	body('images').isJSON(),
	body('stock_status').isString(),
	body('stock_quantity').isLength( { min: 0 })
, store)

export default router
