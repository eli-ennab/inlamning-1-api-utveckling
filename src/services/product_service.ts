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
