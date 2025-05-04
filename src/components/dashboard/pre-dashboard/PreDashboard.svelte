<script lang="ts">
	import SectionWrapper from './../../SectionWrapper.svelte';
	import { is_loggedin, user, is_loading } from './../../../store.js';
	import { onMount } from 'svelte';

	interface userData {
		_id: string;
		email: string;
		name: string;
		role: string;
		has_chosen: boolean;
		is_alloted: boolean;
	}

	let loggedin = false;
	let user_data: userData = {
		_id: '',
		email: '',
		name: '',
		role: '',
		has_chosen: false,
		is_alloted: false,
	};
	let loading = true;
	let internshipsCategory = [];
	let chosenDomain = '';
	let chosenSubdomain = '';
	let subDomanins = [];
	let isDomainChosen = false;
	let hasChosenSubdomain = false;
	let isAlloted = false;

	onMount(async () => {
		loading = true;
		is_loading.subscribe(value => loading = value);
		is_loggedin.subscribe(value => loggedin = value);
		user.subscribe(value => {
			user_data = value;
			hasChosenSubdomain = user_data?.has_chosen;
			isAlloted = user_data?.is_alloted;
			console.log('user_data', user_data);
			isDomainChosen = hasChosenSubdomain;


		});

		const response = await fetch('http://localhost:5000/domains/getalldomains');
		const data = await response.json();
		internshipsCategory = data.data;
		loading = false;
	});

	function chooseDomain(domain: string, subdomain: any) {
		chosenDomain = domain;
		subDomanins = subdomain;
		isDomainChosen = true;
	}

	async function chooseSubDomain(subdomain: any) {
		chosenSubdomain = subdomain;
		await fetch(`http://localhost:5000/domains/choosedomain/${subdomain}`, {
			method: 'GET',
			credentials: 'include',
			headers: { 'Content-Type': 'application/json' },
		});
	}
</script>

{#if hasChosenSubdomain && !isAlloted}
	<div class="flex flex-col items-center justify-center w-full h-full">
		<p class="text-4xl text-white font-semibold">You have already selected your domain!</p>
	</div>
{/if}

{#if isAlloted}
	<div class="flex flex-col items-center justify-center w-full h-full">
		<p class="text-4xl text-white font-semibold">Congratulations! You are selected please accept the offer letter in your mail</p>
	</div>
{/if}

{#if !isDomainChosen}
	<SectionWrapper id='predashboard' isheader={false}>
		<div class="flex flex-col w-full min-h-screen p-4 gap-6">
			{#each internshipsCategory as intern}
				<div class="w-full">
					<h1 class="font-bold text-3xl my-6 text-gray-800">{intern.title}</h1>
					<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
						{#each intern.internships as internship}
							<button class="group" on:click={() => chooseDomain(intern.title, internship.subdomains)}>
								<div class="flex flex-col items-center justify-center rounded-xl bg-white p-6 hover:scale-105 transition-transform shadow-lg hover:shadow-2xl cursor-pointer">
									<img src={internship.image} alt={internship.title} class="w-24 h-24 rounded-full object-cover mb-4" />
									<h2 class="font-semibold text-lg text-gray-800 group-hover:text-indigo-600">{internship.title}</h2>
								</div>
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</SectionWrapper>
{:else}
	<SectionWrapper id='predashboard' isheader={false}>
		{#if !hasChosenSubdomain}
			<div class="w-full flex justify-start mb-4">
				<button on:click={() => isDomainChosen = false} class="p-2 rounded-full hover:bg-gray-200 transition">
					<i class="fas fa-arrow-left text-2xl text-gray-800"></i>
				</button>
			</div>
		{/if}
		<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-clip">
			{#each subDomanins as internship}
				<button on:click={() => chooseSubDomain(internship.code)} class="group">
					<div class="flex flex-col items-center justify-center rounded-xl bg-white p-6 hover:scale-105 transition-transform shadow-lg hover:shadow-2xl cursor-pointer">
						<h2 class="font-semibold text-lg text-gray-800 group-hover:text-indigo-600">{internship.name}</h2>
					</div>
				</button>
			{/each}
		</div>
	</SectionWrapper>
{/if}

<style>
	description {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>