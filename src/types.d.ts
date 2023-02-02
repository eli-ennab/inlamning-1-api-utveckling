/**
 * Type Definitions
 */

export type CreateOrderData = {
	customer_first_name: string,
	customer_last_name: string,
	customer_address: string,
	customer_postcode: string,
	customer_city: string,
	customer_email: string,
	customer_phone: string?,
	order_total: number,
}

export type CreateOrderItems = {
	order_id: number?,
	product_id: number,
	qty: number,
	item_price: number,
	item_total: number,
}

