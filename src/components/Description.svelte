<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import { content } from "../lib/descriptioncontent";
    
</script>
<hr class="opacity-10 mb-10">
<SectionWrapper id="description">
    <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
    {#each content as detail ,index }
    <div class={"flex flex-col  duration-[1000ms] taos:opacity-0  justify-center md:ml-40 lg:ml-40 ml-20  max-w-[calc(83.33333333333334%_-_6rem)] md:mb-40 lg:mb-40 mb-20 " + (index%2 === 0 ? "md:flex-row-reverse lg:flex-row-reverse" : "md:flex-row lg:flex-row" )}>

   
    <div class="flex flex-col md:max-w-[70%] lg:max-w-[70%]">

        <p class="opacity-100 font-semibold text-3xl sm:text-5xl md:text-6xl md:text-left lg:text-left text-center mb-4">{detail.title}</p>
        <p class="opacity-60 text-lg sm:text-xl md:text-2xl md:text-left lg:text-left text-justify">
           {detail.description}
        </p>
    </div>
    <div class="flex justify-center items-center mt-9 md:mt-0 lg:mt-0">
        <img src={detail.pictureurl} alt=""
        
        class="w-[15rem] sm:w-[25rem] lg:w-[40rem]"
        >
    </div>
</div>
<hr class="opacity-10 mb-10">
{/each}
</SectionWrapper>


