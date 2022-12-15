import { authenticateUser } from "$lib/server/auth"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticateUser(event)
	return resolve(event)
}
