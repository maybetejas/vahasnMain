<script>
	import { getUserLocation, currentCar } from '$lib/utils.js';
	import { onMount } from 'svelte';

	export let data;
	let address = data?.user?.address || '';
	let location = {};
	let geoLocError = false;

	async function fetchGeolocation() {
		try {
			location = await getUserLocation();
		} catch (error) {
			geoLocError = true;
		}
	}

	onMount(() => {
		fetchGeolocation();
	});
</script>

<main class="w-full flex flex-col items-center mt-20">
	{#if geoLocError}
		☝️ Allow Geolocation To Accurate Address And Refresh
	{/if}

	<form action="?/updateLocation" method="POST" class="mt-10">
		<div class="form-control w-full">
			<div class="w-full">
				<label class="label">
					<span class="label-text">Update your address</span>
				</label>
				<label class="input-group">
					<span>Address</span>
					<input
						bind:value={address}
						name="address"
						type="text"
						class="input input-bordered w-full"
					/>
				</label>
			</div>
			<input type="hidden" name="car" value={$currentCar} />
			<input type="hidden" name="lat" value={location.lat} />
			<input type="hidden" name="lng" value={location.lng} />
			<button class="btn btn-primary w-full mt-4" type="submit">Set Location</button>
		</div>
	</form>
</main>
