import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete("auth")
	throw redirect(303, "/")
}
