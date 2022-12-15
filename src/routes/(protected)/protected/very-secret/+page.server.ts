import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const getSensitiveInformationFromDB = () => {
		return "This is a sensitive item from the database"
	}

	return {
		sensitiveInfo: getSensitiveInformationFromDB(),
	}
}
