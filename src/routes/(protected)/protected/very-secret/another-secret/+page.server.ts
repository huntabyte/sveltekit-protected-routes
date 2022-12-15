import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const getSensitiveInformationFromDB = () => {
		return "This is another secret item from the database"
	}

	return {
		anotherSecret: getSensitiveInformationFromDB(),
	}
}
