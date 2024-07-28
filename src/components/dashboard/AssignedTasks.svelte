<script>
    let isviewall=false;
    function handleviewall(){
        isviewall=!isviewall;   
        
        
    }
</script>
<div class="bg-[#D9D9D9] w-full h-full">
    <div id="main" class="flex flex-col justify-end  bg-[#3461FF] h-60 ">
        <p class="md:text-white text-white font-medium md:font-semibold md:text-5xl text-2xl bottom-0 font-sans pb-1">Web Development Intern</p>
        <p class="md:text-white text-white font-normal md:font-medium md:text-4xl text-2xl  bottom-0 font-sans pb-2">(August-September 2024)</p>
    

    </div>
    <!-- parent div of both two side by side boxes -->
    <div class="flex flex-row  bg-[#D9D9D9] h-[28.8rem] "> 
        <!-- 1st child left  -->
        <div class={" bg-[#F3E4CF] border border-black w-96  relative "+(isviewall?"h-full":"h-28")}>
            <p class="text-black text-xl font-semibold">Upcoming</p>
            <p class="text-black text-lg mt-1">Wohoo! No work at all</p>
            <div class="flex w-full justify-end h-auto absolute bottom-0">
            <button class="text-[#7F3A13] text-lg font-bold pr-2" on:click={()=>handleviewall()}> {isviewall?"Collapse":"View all"}</button>
        </div>

        </div>
        <!-- 2nd child right -->
        <div class=" bg-[#F3E4CF] border border-black w-full h-full">
            <div class=" flex bg-[#B4D2BD] border border-black h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                <p class="text-black pl-2 pt-1 font-semibold mt-1 text-xl w-full">Task 1: Make a to do list </p>
                <p class="text-black pl-2 mt-2 ml-1 font-normal text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-full justify-end">
                    <button>
                    <i class="fa-solid fa-chevron-right text-black text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-20 w-full space-x-0.5 mb-1  ">
                <i class="fa-regular fa-clipboard text-black text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                    <p class="text-black pl-2 pt-1 font-semibold mt-1 text-xl w-full">Task 2: Make a to do list </p>
                <p class="text-black pl-2 mt-2 ml-1 font-normal text-xl w-full">Posted: 7 August 2024 </p>
                    
                </div>
                <div class="flex w-full justify-end">
                    <button>
                    <i class="fa-solid fa-chevron-right text-black text-5xl pr-1"></i>
                </button>
            </div>
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                <p class="text-black pl-2 pt-1 font-semibold mt-1 text-xl w-full">Task 3: Make a to do list </p>
                <p class="text-black pl-2 mt-2 ml-1 font-normal text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-full justify-end">
                    <button>
                    <i class="fa-solid fa-chevron-right text-black text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                <p class="text-black pl-2 pt-1 font-semibold mt-1 text-xl w-full">Task 4: Make a to do list </p>
                <p class="text-black pl-2 mt-2 ml-1 font-normal text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-full justify-end">
                    <button>
                    <i class="fa-solid fa-chevron-right text-black text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            


        </div>
        
    </div>

</div>