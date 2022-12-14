// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

type User = {
	id: number
	email: string
	role: string
}

declare namespace App {
	// interface Error {}
	interface Locals {
		user: User | null
	}
	// interface PageData {}
	// interface Platform {}
}
