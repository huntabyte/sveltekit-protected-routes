<script>
	import '../app.postcss';
</script>

<div class="navbar">
	<a href="/" class="btn">Home</a>
	<a href="/admin" class="btn">Admin</a>
	<form action="/logout" method="POST">
		<button class="btn btn-primary">Logout</button>
	</form>
</div>
<slot />
