<script>
	let numRaindrops = 40;

	const raindrops = Array.from({ length: numRaindrops }, () => {
		const delay = Math.random() * 2; // Adjust the delay value
		const leftPercentage = 100 * Math.random();
		const topPercentage = 100 * Math.random();
		const animationDuration = 2 + Math.random() * 1;
		return { delay, leftPercentage, topPercentage, animationDuration };
	});
</script>

<div class="rain-container">
	{#each raindrops as { delay, leftPercentage, topPercentage, animationDuration }, i}
		<div
			class="raindrop"
			style="
          left: {leftPercentage}%;
          top: {topPercentage}%;
          animation-duration: {animationDuration}s;
          animation-delay: {-delay}s;"
		>
			💧
		</div>
	{/each}
</div>

<style>
	/* Define animation class */
	@keyframes falling {
		to {
			transform: translateY(calc(100vh + 20px));
		}
	}

	.rain-container {
		pointer-events: none;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0);
		overflow: hidden;
	}

	.raindrop {
		position: absolute;
		font-size: 24px; /* Adjust font size as needed */
		animation: falling linear infinite;
	}
</style>
