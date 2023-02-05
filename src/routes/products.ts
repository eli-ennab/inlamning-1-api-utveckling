import express from 'express'
import { index, store, show} from '../controllers/product_controller'
const router = express.Router()

// GET /products
router.get('/', index)

// GET /products/:productId
router.get('/:productId', show)

// POST /products
router.post('/', store)

export default router
