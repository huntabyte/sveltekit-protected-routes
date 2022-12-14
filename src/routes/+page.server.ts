import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {}

export const actions: Actions = {
	login: async ({ cookies }) => {
		cookies.set("auth", "regularusertoken", {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})

		return {
			success: true,
		}
	},
}
