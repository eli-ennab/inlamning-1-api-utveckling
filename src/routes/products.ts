import express from 'express'
import { index } from '../controllers/product_controller'
const router = express.Router()


// GET /products
router.get('/', index)

export default router
