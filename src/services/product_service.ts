/**
 * Product Service
 */
import prisma from '../prisma'

/**
 * Get all products
 */
export const getProducts = async () => {
	return await prisma.product.findMany()
}

/**
 * Get a single product
 *
 * @param productId The id of the product to get
 */
export const getProduct = async (productId: number) => {
	return prisma.product.findUniqueOrThrow({
		where: {
			id: productId,
		}
	})
}
