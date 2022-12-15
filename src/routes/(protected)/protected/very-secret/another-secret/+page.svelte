<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1>Very Secret</h1>
	<p>You should be authenticated to see this information!</p>
	{#if data.user}
		<p>You are currently logged in as {data.user.email}</p>
	{/if}

	<p>Here is your sensitive information: {data.anotherSecret}</p>
	<div class="button-container">
		<a href="/" class="btn btn-secondary">Home</a>
		<a href="/protected/very-secret/another-secret" class="btn btn-secondary">Another Secret Page</a
		>
	</div>
</main>
