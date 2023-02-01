// Product Controller
import { Request, Response } from 'express'
import Debug from 'debug'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('prisma-products:product_controller')

// Get all orders
export const index = async (req: Request, res: Response) => {
	try {
		const products = await prisma.product.findMany()

		res.send({
			status: "success",
			data: products,
		})

	} catch (err) {
		debug("Error thrown when finding products", err)
		res.status(500).send({ status: "error", message: "Something went wrong" })
	}
}
