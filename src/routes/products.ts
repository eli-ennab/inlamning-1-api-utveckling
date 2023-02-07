import express from 'express'
import { body } from 'express-validator'
import { index, store, show } from '../controllers/product_controller'
const router = express.Router()

router.get('/', index)
router.get('/:productId', show)
router.post('/', [
	body('name').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('description').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('price').isNumeric().withMessage('price has to contain a number'),
	body('stock_status').isString().withMessage('has to be a string').bail(),
	body('stock_quantity').isLength( { min: 0 } ),
], store)

export default router
