<script>
	import { currentCar } from '$lib/utils.js';
	import FAQs from './../../lib/components/FAQs.svelte';
	import Card from './../../lib/components/Card.svelte';
	import ReviewCarousel from './../../lib/components/ReviewCarousel.svelte';
	import { servicesList, subscriptions } from '$lib/utils.js';
	import YTplayer from '$lib/components/YTplayer.svelte';
	export let data;
</script>

<div class="w-full flex flex-col items-center">
	<!-- Access the currentCar variable from the layout -->
	<div class="h-full w-11/12">
		<div><YTplayer link="https://www.youtube.com/embed/6F2XzwW4X-I?si=pTeyw0VMOgSDQhma" /></div>
		<div>
			<div class="grid grid-cols-3 grid-rows-2 gap-4">
				{#each servicesList as service}
					<a
						data-sveltekit-reload
						href="/services/{service.id}"
						class=" p-4 rounded-lg shadow-lg cursor-pointer bg-gray-700"
					>
						<img src={service.svg} alt="Service Icon" class="w-16 h-16 mx-auto mb-2" />
						<p class="text-center">{service.name}</p>
					</a>
				{/each}
			</div>
		</div>
		<div class="w-full bg-slate-200 flex justify-center">
			<ReviewCarousel />
		</div>
		<div class="w-full flex flex-col items-center">
			<h1>Subscribe</h1>
			<div class="grid grid-cols-3 grid-rows-1 gap-4 w-full">
				{#each subscriptions as subs}
					<a
						data-sveltekit-reload
						href="/services/{subs.id}"
						class=" p-4 rounded-lg shadow-lg cursor-pointer bg-gray-700"
					>
						<img src={subs.svg} alt="Service Icon" class="w-16 h-16 mx-auto mb-2" />
						<p class="text-center">{subs.name}</p>
					</a>
				{/each}
			</div>
		</div>
		<div class="w-full flex flex-col items-center">
			<h1>Refer a friend</h1>
			<Card />
		</div>
		<div class="w-full flex flex-col items-center">
			<FAQs />
		</div>
	</div>
</div>
