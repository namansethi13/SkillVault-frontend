<script>
    let events=[
        {
            "name":"Resume Building Session",
            "date":"2021-09-01",
            "time":"10:00",
            "platform":"Google meet",
            "link":"hos-uzda-myr",
        },
        {
            "name":"Career Guidance Session",
            "date":"2021-09-02",
            "time":"10:00",
            "platform":"Google meet",
            "link":"hos-uzda-myr",
        },
        {
            "name":"Technology Stack choice Session",
            "date":"2021-09-03",
            "time":"10:00",
            "platform":"Google meet",
            "link":"hos-uzda-myr",
        },
        {
            "name":"Technology Stack choice Session",
            "date":"2021-09-03",
            "time":"10:00",
            "platform":"Google meet",
            "link":"hos-uzda-myr",
        },
        
       
    ]
    
</script>
<div class=" flex flex-col bg-red-500 w-full h-full">
    <!-- have to add picture to this  -->
    <div id="main" class="flex flex-col justify-end items-center bg-white h-60 relative ">
        <img src="https://images.pexels.com/photos/4238524/pexels-photo-4238524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Upcoming Events" class="w-full" />
        
        <p class="text-yellow-200 font-bold md:font-extrabold md:text-5xl text-3xl absolute bottom-0 font-sans pb-2">What's coming up next ????</p>
    

    </div>

    <div class="flex flex-col  bg-[#F3E4CF] h-full overflow-auto items-stretch ">
        {#each events as event , index }
        <div class=" border border-black border-x-2 my-1 border-y-2 text-black bg-[#B4D2BD]  pl-2 ">
        <div class="flex space-x-1.5">
            <i class="fa-regular fa-calendar-days text-3xl"></i>
        
        <h3 class="text-red-600 font-extrabold text-3xl font-sans">{event.name}</h3>
        </div>
        <div class="flex space-x-0.5">
        <p class="text-black font-bold text-lg"> Date: </p>
        <p class="text-black font-semibold text-lg"> {event.date}</p>
        
    </div>
    <div class="flex space-x-0.5">
        <p class="text-black font-bold text-lg"> Time: </p>
        <p class="text-black font-semibold text-lg"> {event.time}</p>

    </div>
        
        <div class="flex space-x-0.5">
        <p class="text-black font-bold text-lg"> Platform: </p>
        <p class="text-black font-semibold text-lg"> {event.platform}</p>
        </div>
        <div class="flex space-x-0.5">
        <p class="text-black font-bold text-lg"> Link: </p>
        <a href="https://meet.google.com/{event.link}"><p class="text-black underline font-semibold text-lg"> https://meet.google.com/{event.link}</p></a>
        </div>
        
            
        
        
    </div>
    {/each}
    
        </div>

</div>