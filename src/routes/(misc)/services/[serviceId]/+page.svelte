<script>
	import { servicesList } from '$lib/utils.js';
	import YTplayer from '$lib/components/YTplayer.svelte';
	import { page } from '$app/stores';

	const id = $page.params.serviceId;

	const selectedService = servicesList.find((service) => service.id === parseInt(id));

	let name = '';
	let link = '';
	let services = [];

	if (selectedService) {
		name = selectedService.name;
		link = selectedService.link;
		services = selectedService.services;
	}
</script>

<div class="w-full h-screen flex flex-col">
	<div class="w-full flex items-center justify-between">
		<a href="/"><i class="fi fi-rr-arrow-left" /></a>
		<h1 class="text-2xl">{name}</h1>
		<div />
	</div>
	<div class="w-full">
		<YTplayer {link} />
	</div>
	<div class="flex flex-col">
		<h1 class="text-xl">{name}</h1>
		<ul class="">
			<li>🕐 Time</li>
			<li>💧 No mess</li>
			<li>🏠 Doorstep</li>
		</ul>
	</div>
	<div class="flex flex-col">
		<h1 class="text-xl">Services</h1>
		<ul class="list-disc ml-4">
			{#each services as service}
				<li>{service}</li>
			{/each}
		</ul>
	</div>

	<a href="/book/{id}"><button class="btn btn-secondary absolute bottom-5 w-11/12">Book</button></a>
</div>
