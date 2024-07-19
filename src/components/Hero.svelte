<script>
	import CTA from './CTA.svelte';
    import Header from './Header.svelte';
    import SectionWrapper from './SectionWrapper.svelte';
</script>

<style>
 @media (min-width: 1025px) {
    .flex-container {
        display: flex;
        flex-direction: row;
    }
}
</style>
<SectionWrapper isheader=true>

<Header/>
<div class="m-[7%] " ></div>
<div class="flex flex-col md:flex-col flex-container w-full max-w-[1920] justify-center items-center lg:space-x-1">
<h2 class=" typed-text h-10 text-5xl md:h-20  sm:h-auto min-[1025px]:h-auto  sm:text-6xl md:text-6xl lg:text-8xl   text-center lg:min-w-[28 rem]" id="typed">
  
    </h2>
    <span class="cursor">&nbsp;</span>
    

<h2 class="  text-5xl sm:text-6xl md:text-6xl lg:text-8xl   text-center ">
for everyone!
</h2>
</div>


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
<script>
    const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Internship","Learning"];
const typingDelay =80;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
</script>



</SectionWrapper>
