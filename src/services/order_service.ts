/**
 * Order Service
 */
import prisma from '../prisma'

/**
 * Get all orders
 */
export const getOrders = async () => {
	return await prisma.order.findMany()
}
