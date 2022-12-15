<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<div>
		<h3>Admin Home</h3>
		{#if data.user}
			<p>You are currently logged in as: {data.user.email}</p>
		{/if}
	</div>
	<h4>Customers:</h4>
	<div class="user-list">
		{#each data.customers as customer}
			<a href="/admin/{customer.id}">{customer.firstName} {customer.lastName}</a>
		{/each}
	</div>
</main>

<style lang="postcss">
	h4 {
		padding-top: 1rem;
	}
	.user-list {
		display: flex;
		flex-direction: column;

		& a {
			padding: 4px;
			border: 1px solid green;
			margin: 5px 0;
		}
	}
</style>
