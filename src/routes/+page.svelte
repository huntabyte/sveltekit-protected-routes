<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>Don't use +layouts for auth</h1>
	<p>Let's learn why.</p>
	{#if data.user}
		Logged in as: {data.user.email}
	{:else}
		<div class="button-container">
			<form action="?/login" method="POST">
				<button type="submit" class="btn btn-primary">Login</button>
			</form>
		</div>
	{/if}
</main>
