import express from 'express'
import { body } from 'express-validator'
import { index, store, show } from '../controllers/order_controller'
const router = express.Router()

router.get('/', index)
router.get('/:orderId', show)
router.post('/', [
	body('customer_first_name').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('customer_last_name').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('customer_address').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('customer_postcode').isString().withMessage('has to be a string').bail().isLength({ max: 6 }).withMessage('has to be less than 7 chars long'),
	body('customer_city').isString().withMessage('has to be a string').bail().isLength({ min: 2 }).withMessage('has to at least 2 chars long'),
	body('customer_email').isEmail().bail().withMessage('has to be an emailaddress'),
	body('customer_phone').optional()
], store)

export default router
