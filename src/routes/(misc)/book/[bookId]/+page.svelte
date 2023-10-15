<script>
	import Rain from '$lib/components/Rain.svelte';
	import { servicesList } from '$lib/utils.js';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';
	import { Datepicker } from 'svelte-calendar';

	let store;

	const id = $page.params.bookId;

	const selectedService = servicesList.find((service) => service.id === parseInt(id));

	let name = '';
	let link = '';
	let services = [];

	if (selectedService) {
		name = selectedService.name;
		link = selectedService.link;
		services = selectedService.services;
	}

	let triggerRain = false;

	function rain() {
		triggerRain = !triggerRain;
	}
</script>

<div class="w-full h-screen flex flex-col">
	<div class="w-full flex items-center justify-between">
		<a href="/services/{id}"><i class="fi fi-rr-arrow-left" /></a>
		<h1 class="text-2xl">{name}</h1>
		<div />
	</div>
	<div class="bg-red w-3/4">
		<Datepicker bind:store let:key let:send let:receive>
			<button
				class="btn btn-primary btn-outline"
				in:receive|local={{ key }}
				out:send|local={{ key }}
			>
				{#if $store?.hasChosen}
					<p class="text-white font-thin">{dayjs($store.selected).format('ddd MMM D, YYYY')}</p>
				{:else}
					<p class="text-white font-thin">Date</p>
				{/if}
			</button>
		</Datepicker>
	</div>
	<div>
		<select class="select select-primary w-1/2 max-w-xs">
			<option disabled selected>Pick Time</option>
			<option>8 am</option>
			<option>9 am</option>
			<option>10 am</option>
			<option>11 am</option>
		</select>
	</div>
	<div class="flex flex-col">
		<h1 class="text-xl">Services</h1>
		<ul class="list-disc ml-4">
			{#each services as service}
				<li>{service}</li>
			{/each}
		</ul>
	</div>
	<div class="alert flex">
		<span>💸</span>
		<span class="text-sm">You pay after the wash is done </span>
	</div>
	{#if triggerRain}
		<Rain />
		<a href="/"
		><button on:click={rain} class="btn btn-secondary absolute bottom-5 w-11/12">Go to bookings</button></a
	>
		{:else}
	<button on:click={rain} class="btn btn-secondary absolute bottom-5 w-11/12">Book</button>
	{/if}
</div>
