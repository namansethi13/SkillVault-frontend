<script>
	import SectionWrapper from './../../SectionWrapper.svelte';

	import {is_loggedin, user, is_loading} from './../../../store.js';
	
	
	
	import {onMount} from 'svelte';
    import Loading from '../../Loading.svelte';
	
	
		let loggedin = false;
		let user_data = {};
		let loading = true;
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
		});

	});

	let internshipsCategory = [
		{
			"title": "Tech Internships we offer",
			"internships":[
				{
					"title": "Web Development",
					"image": "https://dummyimage.com/400x400",
				}, 
				{
					"title": "Mobile Development",
					"image": "https://dummyimage.com/400x400",
				},
				{
					"title": "AI/ML",
					"image": "https://dummyimage.com/400x400",
				}
			]
		},
		{
			"title": "Non-Tech Internships we offer",
			"internships":[
				{
					"title": "UI/UX Design",
					"image": "https://dummyimage.com/400x400",
				}, 
				
			]
		}
	];

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




<SectionWrapper>
	<div class="flex flex-col w-full min-h-screen ">
		{#each internshipsCategory as intern }
		<div class="w-full flex-col">
			<h1 class="font-bold text-4xl my-8">{intern.title}</h1>
			<div class="flex md:block w-full justify-center">

				<div class="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1">
					{#each intern.internships as internship}
					<div class="flex flex-col items-center justify-center rounded-md bg-white p-4 m-4 hover:scale-125 transition-all ease-in-out shadow-md lg:w-60 w-48 cursor-pointer hover:shadow-lg"> 
						<img src={internship.image} alt={internship.title} class="w-32 h-32 object-cover my-2 " />
						<h2 class="font-bold text-xl text-black text-center">{internship.title}</h2>
					</div>
					{/each}
				</div>
			</div>
		</div>
		
		
		{/each}
	</div>
</SectionWrapper>
