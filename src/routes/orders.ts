import express from 'express'
import { index, store } from '../controllers/order_controller'
const router = express.Router()


// GET /orders
router.get('/', index)

// POST /orders
router.post('/', store)

export default router
