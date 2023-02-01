import express from 'express'
import { index } from '../controllers/order_controller'
const router = express.Router()


// GET /products
router.get('/', index)

export default router
