<script>
	import { servicesList } from '$lib/utils.js';
</script>

<div class="grid grid-cols-3 grid-rows-2 gap-4">
	{#each servicesList as service (service.id)}
		<a
			href={`/services/${service.id}`}
			class=" p-4 rounded-lg shadow-lg cursor-pointer bg-gray-700"
		>
			<img src={service.svg} alt="Service Icon" class="w-16 h-16 mx-auto mb-2" />
			<p class="text-center">{service.name}</p>
		</a>
	{/each}
</div>
