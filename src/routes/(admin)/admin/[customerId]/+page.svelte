<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h3>Manage Customer: {data.customer.firstName} {data.customer.lastName}</h3>
	<pre>{JSON.stringify(data.customer, null, 2)}</pre>
</main>
