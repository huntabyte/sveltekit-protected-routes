<script>
	import '../app.postcss';
</script>

<div class="navbar">
	<a href="/" class="btn">Home</a>
	<a href="/protected" class="btn">Protected</a>
	<form action="/logout" method="POST">
		<button class="btn btn-primary">Logout</button>
	</form>
</div>
<slot />
