import express from 'express'
import { index } from '../controllers/order_controller'
const router = express.Router()


// GET /orders
router.get('/', index)

// POST /orders
// router.post('/orders', store)

export default router
