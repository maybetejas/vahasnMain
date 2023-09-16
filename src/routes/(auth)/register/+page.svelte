<script>
	import { isValidName, isValidContact, isValidPassword } from '$lib/utils.js';

	export let form;

	let name = '';
	let contact = '';
	let password = '';
	let confirmPassword = '';

	let nameValid = false;
	let contactValid = false;
	let passwordValid = false;

	$: {
		nameValid = isValidName(name);
		contactValid = isValidContact(contact);
		passwordValid = isValidPassword(password, confirmPassword);
	}
</script>

<main class="w-full flex flex-col items-center mt-20">
	{#if form?.exists}
		<h1>contact already in use <a class="underline" href="/login">login</a> instead</h1>
	{/if}
	<form action="?/getOtp" method="POST" class="mt-10">
		<div class="form-control w-full">
			<div class="w-full">
				<label class="label">
					<span class="label-text">Full Name</span>
				</label>
				<label class="input-group">
					<span>Name</span>
					<input
						bind:value={name}
						name="name"
						type="text"
						placeholder="Hritvik kadu"
						class="input input-bordered w-full"
					/>
				</label>
				{#if name !== ''}
					<span class={nameValid ? 'text-green-500' : 'text-red-500'}>
						{nameValid ? 'Valid Name' : 'Invalid Name'}
					</span>
				{/if}
			</div>
			<div class="w-full">
				<label class="label">
					<span class="label-text">Contact</span>
				</label>
				<label class="input-group">
					<span>Contact</span>
					<input
						bind:value={contact}
						name="contact"
						placeholder="1234567891"
						type="text"
						class="input input-bordered w-full"
					/>
				</label>
				{#if contact !== ''}
					<span class={contactValid ? 'text-green-500' : 'text-red-500'}>
						{contactValid ? 'Valid Contact' : 'Invalid Contact'}
					</span>
				{/if}
			</div>
			<div class="w-full">
				<label class="label">
					<span class="label-text">Password</span>
				</label>
				<label class="input-group">
					<span>Password</span>
					<input
						bind:value={password}
						name="password"
						type="password"
						class="input input-bordered w-full"
					/>
				</label>
			</div>
			<div class="w-full">
				<label class="label">
					<span class="label-text">Confirm Password</span>
				</label>
				<label class="input-group">
					<span>Confirm Password</span>
					<input
						bind:value={confirmPassword}
						name="confirmPassword"
						type="password"
						class="input input-bordered w-full"
					/>
				</label>
				{#if password !== ''}
					<span class={passwordValid ? 'text-green-500' : 'text-red-500'}>
						{passwordValid ? 'Passwords match' : 'Passwords do not match'}
					</span>
				{/if}
			</div>
			<button class="btn btn-primary w-full mt-4" type="submit">Get OTP</button>
		</div>
	</form>
</main>
