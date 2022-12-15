import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const getBankAccountInfo = () => {
		return {
			accountNumber: 129304040,
			routingNumber: 9404293040,
		}
	}

	return {
		bankAccount: getBankAccountInfo(),
	}
}
