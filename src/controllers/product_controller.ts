/**
 * Product controller
 */
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Debug from 'debug'
import prisma from '../prisma'

const debug = Debug('prisma-products:product_controller')

/**
 * Get all products
 */
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

/**
 * Get a single product
 */
export const show = async (req: Request, res: Response) => {
	const productId = Number(req.params.productId)
	try {
		const product = await prisma.product.findUniqueOrThrow({
			where: {
				id: productId,
			},
		})
		res.send({
			status: "success",
			data: product,
		})
	} catch (err) {
		debug("Error thrown when finding product with id %o: %o", req.params.productId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Create a product
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
		const product = await prisma.product.create({
			data: {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				images: req.body.images,
				stock_status: req.body.stock_status,
				stock_quantity: req.body.stock_quantity
			}
		})
		res.send({
			status: "success",
			data: product,
		})
	} catch (err) {
		debug("Error thrown when creating a product %o: %o", req.body, err)
		res.status(500).send({ status: "error", message: "Cannot create products" })
	}
}
