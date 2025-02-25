<script lang="ts">
	import SectionWrapper from './../../SectionWrapper.svelte';
	import {is_loggedin, user, is_loading} from './../../../store.js';
	import {onMount} from 'svelte';
	

		interface userData {
			_id: string;
			email: string;
			name: string;
			role: string;
			has_chosen: boolean;
		}
		let loggedin = false;
		let user_data: userData = {
			_id: '',
			email: '',
			name: '',
			role: '',
			has_chosen: false
		};
		let loading = true;
		let internshipsCategory = [];
		let chosenDomain = '';
		let chosenSubdomain = '';
		let subDomanins = [];
		let isDomainChosen = false;
		let hasChosenSubdomain = false;

	onMount(async () => {
		loading = true;
		is_loading.subscribe(value => {
			loading = value;
		});

		is_loggedin.subscribe(value => {
			loggedin = value;

			if (!loggedin && !loading) {

			// window.location.href = '/';
			}
		});

		user.subscribe(value => {
			user_data = value;
			if(user_data){
				hasChosenSubdomain = user_data.has_chosen
				if(hasChosenSubdomain){
					isDomainChosen = true;
				}
			}
		});


		// hasChosenSubdomain = user_data.has_chosen



			


		const response = await fetch('http://localhost:5000/domains/getalldomains');
		const data = await response.json();
		internshipsCategory = data.data;
		loading = false;

	});


	function chooseDomain(domain : string,subdomain: any) {
		chosenDomain = domain;
		subDomanins = subdomain;
		isDomainChosen = true;
	}

	async function chooseSubDomain(subdomain: any) {
		chosenSubdomain = subdomain;
		let response = await fetch(`http://localhost:5000/domains/choosedomain/${subdomain}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log(response);
	}

</script>

<!-- 
{#if loading}
		<Loading />
{:else if !loggedin}
	<SectionWrapper>
		You are not logged in
	</SectionWrapper>
{:else}
	<SectionWrapper>
		You are logged in
	</SectionWrapper>
{/if} -->
{#if hasChosenSubdomain}
		<div class="flex flex-col items-center justify-center w-full h-full">
			<p class="text-4xl text-white">krli selelc t ab wai tk ro</p>
		</div>
{/if}


{#if !isDomainChosen}
<SectionWrapper id='predashboard' isheader={false} >

	<div class="flex flex-col w-full min-h-screen ">
		{#each internshipsCategory as intern }
		
		<div class="w-full flex-col">
			<h1 class="font-bold text-4xl my-8">{intern.title}</h1>
			<div class="flex md:block w-full justify-center">
				
				<div class="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1">
					{#each intern.internships as internship}
					<button class="w-full h-full" on:click={() => chooseDomain(intern.title,internship.subdomains)}>
						<div class="flex flex-col items-center justify-center rounded-md bg-white p-4 m-4 hover:scale-125 transition-all ease-in-out shadow-md lg:w-60 w-48 cursor-pointer hover:shadow-lg"> 
							<img src={internship.image} alt={internship.title} class="w-32 h-32 object-cover my-2 " />
							<h2 class="font-bold text-xl text-black text-center">{internship.title}</h2>
						</div>
					</button>
						{/each}
					</div>
				</div>
			</div>
			
		
		{/each}
	</div>
</SectionWrapper>
{:else}
	<SectionWrapper  id='predashboard' isheader={false}>
		{#if !hasChosenSubdomain}
		<div class="w-full justify-start">
			<button on:click={() => isDomainChosen = false}>
				<i class="fas fa-arrow-left text-2xl text-black cursor-pointer" ></i>
		   </button>
	   </div>
	  {/if} 
		<div class="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1">
			{#each subDomanins as internship}
			<button class="w-full h-full" on:click={() => chooseSubDomain(internship.code)}>
				<div class="flex flex-col items-center justify-center rounded-md bg-white p-4 m-4 hover:scale-125 transition-all ease-in-out shadow-md lg:w-60 w-48 cursor-pointer hover:shadow-lg"> 
					<!-- <img src={internship.image} alt={internship.title} class="w-32 h-32 object-cover my-2 " /> -->
					<h2 class="font-bold text-xl text-black text-center">{internship.name}</h2>
				</div>
			</button>
				{/each}
		</div>
		
	</SectionWrapper>
{/if}