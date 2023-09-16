<script>
	import '../app.postcss';
	import { extractFirstName, greetings } from '$lib/utils.js';
	import { onMount } from 'svelte';
	export let data;

	let currentIndex = 0;
	let currentGreeting = greetings[currentIndex];

	function updateGreeting() {
		currentIndex = (currentIndex + 1) % greetings.length;
		currentGreeting = greetings[currentIndex];
	}

	onMount(() => {
		const interval = setInterval(updateGreeting, 3000);

		onDestroy(() => {
			clearInterval(interval);
		});
	});
</script>

<main class="flex flex-col items-center">
	<div class="navbar bg-base-100 w-1/2">
		<div class="flex-1">
			{#if !data?.user}
				<a href="/"> <h1 class="text-xl">{currentGreeting}</h1></a>
			{:else}
				<a href="/">
					<h1 class="text-xl">
						{currentGreeting}
						{extractFirstName(data?.user?.name)}
					</h1></a
				>
			{/if}
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li>
					<details>
						<summary> Menu </summary>
						<ul class="p-2 bg-base-100">
							{#if data?.user}
								<li>
									<form action="/logout" method="POST">
										<button type="submit">logout</button>
									</form>
								</li>
							{:else}
								<li><a href="/login">Login</a></li>
							{/if}
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>

	<slot />
</main>
