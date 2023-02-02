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

/**
 * Get a single order
 *
 * @param orderId The id of the order to get
 */
export const getOrder = async (orderId: number) => {
	return prisma.order.findUniqueOrThrow({
		where: {
			id: orderId,
		},
		// include: {
		// 	items: true,
		// }
	})
}

