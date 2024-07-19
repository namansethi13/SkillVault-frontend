<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import { content } from "../lib/descriptioncontent";

    

    
</script>
<style>
    .animation-l {
    opacity: 0;
    transform: translateX(-250px);
    transition: all 0.7s ease-out;
    transition-delay: 0.2s;

}
.animation-r {
    opacity: 0;
    transform: translateX(250px);
    transition: all 0.7s ease-out;
    transition-delay: 0.2s;

}

.scroll-animation {
    opacity: 1;
    transform: translateX(0);
}
</style>


<hr class="opacity-10 mb-10">

<SectionWrapper id="description">
   
    <div  class="overflow-hidden">
    {#each content as detail ,index }

    <div class={"flex flex-col animation justify-center md:ml-40 lg:ml-40 ml-20  max-w-[calc(83.33333333333334%_-_6rem)] md:mb-40 lg:mb-40 mb-20 " + (index%2 === 0 ? "md:flex-row-reverse lg:flex-row-reverse animation-l" : "md:flex-row lg:flex-row animation-r" )}>

   
    <div class="flex flex-col md:max-w-[70%] lg:max-w-[70%]">

        <p class="opacity-85 font-semibold text-3xl sm:text-5xl md:text-6xl md:text-left lg:text-left text-center mb-4">{detail.title}</p>
        <!-- <p class="opacity-60 text-lg sm:text-xl md:text-2xl md:text-left lg:text-left text-justify "> -->
            <p class="opacity-50 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl md:text-left lg:text-left">
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
</div>
<script>
    // Ensuring the script runs after the DOM has fully loaded
    window.addEventListener('load', () => {
        const the_animation = document.querySelectorAll('.animation');
        console.log('Elements to animate:', the_animation);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log('Entry:', entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation');
                    console.log('Element is intersecting:', entry.target);
                } else {
                    entry.target.classList.remove('scroll-animation');
                    console.log('Element is not intersecting:', entry.target);
                }
            });
        }, {
            threshold: 0.00001, // Adjusted threshold for better performance
            rootMargin: '0px', // No additional margin
        });

        the_animation.forEach(element => {
            observer.observe(element);
            console.log('Observing element:', element);
        });
    });
</script>

</SectionWrapper>


