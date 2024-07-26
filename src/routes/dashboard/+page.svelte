<script>

let issidebaropen=false
function handlesidebar(){
    issidebaropen = !issidebaropen
}
</script>

<!-- <button on:click={ () =>{

    //clear all cookies
    fetch('http://localhost:5000/account/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ logout: true }),
        credentials: 'include'  // Important for handling cookies

    
    
    
    }).then(() => {
        window.location.href = '/'
    })
} }> log out</button> -->


<div class="flex">
    <div id ="closingsidebar" class={"md:hidden h-screen w-8  bg-[#0B2533] rounded-tr-lg rounded-br-lg  items-center justify-center "+(issidebaropen?"hidden":"flex")}>
        <button on:click={()=>handlesidebar()}>
        <div id="arrowslide" >
            <i class="fa-solid fa-arrow-left-long text-3xl"></i>
        </div>
    </button>
    </div>
    <div id="sidebar"  class={" md:flex flex-col h-screen  justify-between bg-[#0B2533] w-[20%] max-w-96  min-w-[12rem] items-center rounded-lg "+(issidebaropen?"flex":"hidden")}>
        <div class=" flex flex-col w-full ">
        <div id="profile" class="flex justify-between md:justify-center w-full">
            <div class="flex justify-center w-full items-center text-md md:text-3xl lg:text-4xl mt-8 pb-2 text-lg">
                <i class="fa-solid fa-user m-1 mr-4"></i>

                <p class="m-1">Profile</p>
                
            </div>
            
            <button on:click={()=>handlesidebar()}>
            <i class="fa fa-x md:hidden lg:hidden text-white text m-2 mt-10 mb-4"></i>
        </button>
            
                
            
            
        </div>
        <span class="bg-gray-400 w-full h-0.5"></span>
    </div>
        
        

      
        <div id="navigation" class="flex flex-col justify-between h-40 mt-10 text-lg lg:mt-20 w-full">
            <div class="flex justify-start w-full items-center text-md md:text-2xl lg:text-3xl mb-5">
            <i class="fa-solid fa-list m-1"></i>
            <p class="m-1"> Assigned Tasks </p>
        </div>

        <div class="flex justify-start w-full items-center text-md md:text-2xl lg:text-3xl mb-5">
            <i class="fa-regular fa-calendar m-1"></i>
            <p class="m-1"> Upcoming Events</p>
        </div>

        <div class="flex justify-start w-full items-center text-md md:text-2xl lg:text-3xl mb-1 ">
            <i class="fa-solid fa-headset m-1"></i>
            <p class="m-1"> Mentor Support </p>
        </div>

        <!-- md is tab
        lg is pc -->
        </div>
        
       
       <div class="flex flex-col w-full">
            <span class="bg-gray-400 w-full h-0.5 "></span>
            <div class="flex justify-center w-full items-center text-md md:text-3xl lg:text-4xl mt-8 mb-3 text-lg">

            <i class="fa-solid fa-right-from-bracket m-1 mr-3"></i>

            <p class="m-1 ">Logout</p>

            
        </div>
    </div>
        



    </div>
    <div id="main"></div>
</div>