<script>
import { questions } from './../lib/FAQS.js';
import SectionWrapper from "./SectionWrapper.svelte";
import CTA from './CTA.svelte';
let faq = []
questions.forEach(element => {
    faq.push("opacity-0 hidden")
});
function showdescription(id) {
    if(faq[id] === "opacity-0 hidden"){
        faq[id] = "opacity-85"
    }
    else{
        faq[id] = "opacity-0 hidden"
    }

}

</script>

<SectionWrapper id="faqs">
    <div class="flex justify-center items-center">
        <p class="opacity-100 font-semibold text-3xl sm:text-5xl md:text-6xl md:text-left lg:text-left text-center mb-4 md:mb-10 lg:mb-12">Frequently Asked Questions</p>
    </div>
    <div class="flex justify-center items-center flex-col gap-5">
        {#each questions as question , index }
        
        <button on:click={() => showdescription(index)}>
            
            <div class="h-10 w-[85vw] md:w-[70vw] lg:md:w-[50vw] py-6 bg-slate-500 flex justify-between items-center" >
                
                <p class="ml-6 font-semibold text-base text-left md:text-2xl lg:text-2xl">{question.q}</p>
                
                <p class={"mr-6 transition-transform font-semibold md:text-3xl lg:text-3xl text-base " + (faq[index]==="opacity-0 hidden" ? "" : "rotate-45")}>+</p>
            </div>
            <div class=" w-[85vw] md:w-[70vw] lg:md:w-[50vw] h-auto bg-slate-700  justify-between items-center  " id={"faq_des_"+index}>
                <p class={"mx-6 font-medium text-left text-base md:text-2xl lg:text-2xl ease-in-out transition-opacity " + (faq[index])}>{question.a}</p>
            </div>
        </button>
        {/each}


        <h3 class="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center ">
            Ready to get Started?
        </h3>
        <CTA/>
    </div>
</SectionWrapper>