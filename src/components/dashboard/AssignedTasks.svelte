<script>
    let isviewall=false;
    function handleviewall(){
        isviewall=!isviewall;   
        
        
    }
</script>
<div class="bg-[#D9D9D9] w-full h-full">
    <div id="main" class="flex flex-col justify-end  bg-[#3461FF] md:h-60 h-40 ">
        <p class="md:text-white text-white font-medium md:font-semibold md:text-5xl text-2xl bottom-0 font-sans pb-1">Web Development Intern</p>
        <p class="md:text-white text-white font-normal md:font-medium md:text-4xl text-2xl  bottom-0 font-sans pb-2">(August-September 2024)</p>
    

    </div>
    <!-- parent div of both two side by side boxes -->
    <div class="flex flex-row  bg-[#D9D9D9] h-[28.8rem] " > 
        <!-- 1st child left  -->
        <div class={" bg-[#F3E4CF] border border-black w-44  pl-1 md:pl-0 md:w-96 relative "+(isviewall?"h-full":"h-28")}>
            <p class="text-black text-lg md:text-xl font-semibold">Upcoming</p>
            <p class="text-black text-sm md:text-lg mt-1">Wohoo! No work at all</p>
            <div class="flex w-full justify-end h-auto absolute bottom-0">
            <button class="text-[#7F3A13] text-sm md:text-lg font-bold pr-2" on:click={()=>handleviewall()}> {isviewall?"Collapse":"View all"}</button>
        </div>

        </div>
        <!-- 2nd child right -->
        <div class=" bg-[#F3E4CF] border border-black w-full h-full">
            <div class=" flex bg-[#B4D2BD] border border-black h-16 md:h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black  text-2xl md:text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                <p class="text-black pl-2 pt-1 font-semibold mt-1  text-sm md:text-xl w-full ">Task 1: Make a to do list </p>
                <p class="text-black pl-2 md:mt-2 mt-0 ml-1 font-normal text-sm md:text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-auto justify-end">
                    <button onclick="task_1_modal.showModal()">

                        <i class="fa-solid fa-chevron-right text-black text-xl md:text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-16 md:h-20 w-full space-x-0.5 mb-1  ">
                <i class="fa-regular fa-clipboard text-black  text-2xl md:text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                    <p class="text-black pl-2 pt-1 font-semibold mt-1 text-sm md:text-xl w-full">Task 1: Make a to do list </p>
                    <p class="text-black pl-2 md:mt-2 mt-0 ml-1 font-normal text-sm md:text-xl w-full">Posted: 5 August 2024 </p>
                    
                </div>
                <div class="flex w-auto justify-end">
                    <button>
                        <i class="fa-solid fa-chevron-right text-black text-xl md:text-5xl pr-1"></i>
                </button>
            </div>
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-16 md:h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black  text-2xl md:text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full">
                    <p class="text-black pl-2 pt-1 font-semibold mt-1  text-sm md:text-xl w-full">Task 1: Make a to do list </p>
                    <p class="text-black pl-2 md:mt-2 mt-0 ml-1 font-normal text-sm md:text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-auto justify-end">
                    <button>
                        <i class="fa-solid fa-chevron-right text-black text-xl md:text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            <div class=" flex bg-[#B4D2BD] border border-black h-16 md:h-20 w-full space-x-0.5 mb-1 mt-1  ">
                <i class="fa-regular fa-clipboard text-black  text-2xl md:text-6xl pl-1 mt-1"></i>
                <div class="flex flex-col w-full ">
                    <p class="text-black pl-2 pt-1 font-semibold mt-1  text-sm md:text-xl w-full">Task 1: Make a to do list </p>
                    <p class="text-black pl-2 md:mt-2 mt-0 ml-1 font-normal text-sm md:text-xl w-full">Posted: 5 August 2024 </p>
                
            </div>
                <div class="flex w-auto justify-end">
                    <button>
                    <i class="fa-solid fa-chevron-right text-black text-xl md:text-5xl pr-1"></i>
                </button>
            </div>
        
            </div>
            


        </div>
        
    </div>

</div>



<dialog id="task_1_modal" class="modal">
  <div class="modal-box bg-white">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
    </form>
    <h3 class="text-xl font-bold text-black">Submit your task now!</h3>

    <form action="" >
        <div class="border border-black my-5">

        <label class="input input-bordered flex items-center gap-2 bg-white text-black font-bold ">
            Github/Drive link:
            <input type="text" class="grow font-normal " placeholder="github.com/torvalds/linux" />
        </label>
        </div>



        <div class="border border-black  my-5">

        <label class="input input-bordered flex items-center gap-2 bg-white text-black font-bold border">
            Video link:
            <input type="text" class="grow font-normal border-black hover:border-black" placeholder="www.youtube.com/" />
        </label>
        </div>
        <div class="border border-black  my-5">

            <label for="comments" class="input input-bordered flex items-center gap-2 bg-white text-black font-bold">
                Comments:
            </label>
            <textarea name="comments" class="textarea textarea-bordered  bg-white text-black w-full" placeholder="Any other comments you would like to include"></textarea>
        </div>
        <div class="w-full flex justify-center">

            <button type="submit" class="btn bg-blue-500 text-white hover:bg-blue-600 border-hidden">Submit</button>
        </div>
    </form>
   
  </div>
</dialog>
