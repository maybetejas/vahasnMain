<!-- ServiceDetail.svelte -->
<script>
	import { page } from '$app/stores'; // Import the page store
	import { onMount } from 'svelte';

	let serviceName = '';

	// Fetch service details when the component mounts
	onMount(() => {
		const { params } = $page;
		serviceName = params.serviceName; // Assuming the parameter name is 'serviceName'
		// Fetch additional service details if needed
	});
</script>

<h1>Service Detail: {serviceName}</h1>
<!-- Display additional service details here -->
