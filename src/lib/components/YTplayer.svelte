<script>
	export let link;
</script>

<div class="h-full pb-[56.25%] w-full rounded-lg relative overflow-hidden">
	<iframe
		class="back-layer absolute top-0 left-0 w-full h-full rounded-lg"
		src={link}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>
