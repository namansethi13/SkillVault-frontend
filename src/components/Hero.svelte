<script>
	import CTA from './CTA.svelte';
    import Header from './Header.svelte';
    import SectionWrapper from './SectionWrapper.svelte';
</script>
<SectionWrapper>
<Header/>
<div class="m-[7%]"></div>
<h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1920] mx-auto w-full text-center ">
Internship for  everyone!
</h2>
<h3 class="m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center ">
    Are you looking for an internship? We got you covered! <br>Register Now!
</h3>
<CTA/>

<div class="flex items-center justify-center gap-2">

<p class="mt-2">4.5</p>

{#each [0,1,2,3,4] as index}
<div class="grid place-items-center relative">
<i class="fa-solid fa-star opacity-0"></i>
<div class={"absolute top-0 left-0 place-items-center " +  (index===4 ? "w-[50%] overflow-hidden": "") }>
    <i class="fa-solid fa-star text-amber-400"></i>
</div>
</div>

{/each}
<p class="mt-2">10+</p>

</div>


</SectionWrapper>
