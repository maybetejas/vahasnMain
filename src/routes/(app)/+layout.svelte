<script>
	import { currentCar, formatAddress } from '$lib/utils.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		if (data?.user?.car) {
			currentCar.set(data?.user?.car);
		} else {
			currentCar.set('Select a car');
		}
	});

	function handleCarChange(event) {
		currentCar.set(event.target.value); // Update the store with the selected value
	}
</script>

<main class="h-full w-full flex flex-col items-center">
	<div class="navbar bg-base-100">
		<div class="flex-none">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#if data?.user}
						<li>
							<form action="/logout" method="POST">
								<button type="submit">logout</button>
							</form>
						</li>
						<li><a href="/bookings">bookings</a></li>
					{:else}
						<li><a href="/login">Login</a></li>
						<li><a href="/bookings">bookings</a></li>
					{/if}
				</ul>
			</div>
		</div>
		<div class="flex-1">
			<div>
				<select class="select select-sm w-full max-w-xs" on:change={handleCarChange}>
					<option disabled selected>{$currentCar}</option>
					<option value="hatchback">hatchback</option>
					<option value="sedan">sedan</option>
					<option value="suv">suv</option>
					<option value="bike">bike</option>
				</select>
			</div>
		</div>
		<div class="flex-none">
			{#if data?.user}
				{formatAddress(data?.user?.address)}
			{:else}
				set location
			{/if}
			<a href="/set-location">
				<button class="btn btn-square btn-ghost">
					<i class="fi fi-rr-marker" />
				</button>
			</a>
		</div>
	</div>
	<slot />
	<footer class="footer p-10 bg-base-300 text-base-content flex relative bottom-0">
		<nav>
			<header class="footer-title">Services</header>
			<a class="link link-hover">Branding</a>
			<a class="link link-hover">Design</a>
			<a class="link link-hover">Marketing</a>
			<a class="link link-hover">Advertisement</a>
		</nav>
		<nav>
			<header class="footer-title">Company</header>
			<a class="link link-hover">About us</a>
			<a class="link link-hover">Contact</a>
			<a class="link link-hover">Jobs</a>
			<a class="link link-hover">Press kit</a>
		</nav>
		<nav>
			<header class="footer-title">Social</header>
			<div class="grid grid-flow-col gap-4">
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					></a
				>
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/></svg
					></a
				>
			</div>
		</nav>
	</footer>
</main>
