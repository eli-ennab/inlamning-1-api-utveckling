/**
 * Order Service
 */
import prisma from '../prisma'
import { CreateOrderData } from '../types'

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

/**
 * Create an order
 */
export const createOrder = async (data: CreateOrderData) => {
	return await prisma.order.create({
		data: {
			customer_first_name: data.customer_first_name,
			customer_last_name: data.customer_last_name,
			customer_address: data.customer_address,
			customer_postcode: data.customer_postcode,
			customer_city: data.customer_city,
			customer_email: data.customer_email,
			customer_phone: data.customer_phone,
			order_total: data.order_total
		},
	})
}

