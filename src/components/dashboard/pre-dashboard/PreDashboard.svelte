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
				window.location.href = '/';
			}
		});

		user.subscribe(value => {
			user_data = value;
		});

	});

</script>


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
{/if}




<SectionWrapper>

	this is the pre-dashboard
</SectionWrapper>
