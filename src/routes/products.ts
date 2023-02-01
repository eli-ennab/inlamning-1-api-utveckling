import express from 'express'
import { index, store} from '../controllers/product_controller'
const router = express.Router()


// GET /products
router.get('/', index)

// POST /products
router.post('/', store)

export default router
