// Product Controller
import { Request, Response } from 'express'
import Debug from 'debug'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('prisma-products:product_controller')

// Get all orders
export const index = async (req: Request, res: Response) => {
	try {
		const orders = await prisma.order.findMany()

		res.send({
			status: "success",
			data: orders,
		})

	} catch (err) {
		debug("Error thrown when finding products", err)
		res.status(500).send({ status: "error", message: "Something went wrong" })
	}
}

// Create an order
export const store = async (req: Request, res: Response) => {
	try {
		const order = await prisma.order.create({
			data: {
				customer_first_name: req.body.customer_first_name,
				customer_last_name: req.body.customer_last_name,
				customer_address: req.body.customer_address,
				customer_postcode: req.body.customer_postcode,
				customer_city: req.body.customer_city,
				customer_email: req.body.customer_email,
				customer_phone: req.body.customer_phone,
				order_total: req.body.order_total
			}
		})

		res.send({
			status: "success",
			data: order,
		})

	} catch (err) {
		debug("Error thrown when creating a book %o: %o", req.body, err)
		res.status(500).send({ status: "error", message: "Cannot create order" })
	}
}
