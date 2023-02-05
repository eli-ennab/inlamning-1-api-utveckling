/**
 * Order Controller
 */
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Debug from 'debug'
import prisma from '../prisma'

const debug = Debug('prisma-products:order_controller')

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

/**
 * Get a single order
 */
export const show = async (req: Request, res: Response) => {
	const orderId = Number(req.params.orderId)

	try {
		const order = await prisma.order.findUniqueOrThrow({
			where: {
				id: orderId,
			},
			include: {
				order_items: true,
			}
		})

		res.send({
			status: "success",
			data: order,
		})

	} catch (err) {
		debug("Error thrown when finding order with id %o: %o", req.params.orderId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Create an order
 */
export const store = async (req: Request, res: Response) => {
	const validatonErrors = validationResult(req)
	if(!validatonErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validatonErrors.array(),
		})
	}

	try {
		const order = await prisma.order.create({
			data: {
				id: req.body.id,
				customer_first_name: req.body.customer_first_name,
				customer_last_name: req.body.customer_last_name,
				customer_address: req.body.customer_address,
				customer_postcode: req.body.customer_postcode,
				customer_city: req.body.customer_city,
				customer_email: req.body.customer_email,
				customer_phone: req.body.customer_phone,
				order_total: req.body.order_total,
				order_items: {
					create: req.body.order_items
				},
			},
			include: {
				order_items: true,
			}
		})

		res.send({
			status: "success",
			data: order,
		})

	} catch (err) {
		debug("Error thrown when creating an order %o: %o", req.body, err)
		res.status(500).send({ status: "error", message: "Cannot create order" })
	}
}
