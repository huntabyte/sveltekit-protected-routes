import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = () => {
	const getCustomers = async () => {
		console.log("Fetched customers from database")
		const res = await fetch(
			"https://dummyjson.com/users?limit=10&skip=10&select=firstName,lastName,id,email",
		)
		const customers = await res.json()
		return customers.users
	}

	return {
		customers: getCustomers(),
	}
}
