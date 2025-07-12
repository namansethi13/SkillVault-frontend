<script>
    import { onMount } from "svelte";
    import {user} from "./../../store.js";

    let domain = "";

    user.subscribe((value) => {
        domain = value.domain;
    });
    // let events=[
    //     {
    //         "name":"Resume Building Session",
    //         "date":"2021-09-01",
    //         "time":"10:00",
    //         "platform":"Google meet",
    //         "link":"hos-uzda-myr",
    //     },
    //     {
    //         "name":"Career Guidance Session",
    //         "date":"2021-09-02",
    //         "time":"10:00",
    //         "platform":"Google meet",
    //         "link":"hos-uzda-myr",
    //     },
    //     {
    //         "name":"Technology Stack choice Session",
    //         "date":"2021-09-03",
    //         "time":"10:00",
    //         "platform":"Google meet",
    //         "link":"hos-uzda-myr",
    //     },
    //     {
    //         "name":"Technology Stack choice Session",
    //         "date":"2021-09-03",
    //         "time":"10:00",
    //         "platform":"Google meet",
    //         "link":"hos-uzda-myr",
    //     },
        
       
    // ]
    let events = [];
    $: console.log("events", events);

    onMount(() => {
        // Fetch events from the server
        fetch(`http://localhost:5000/events/event?domain=${domain}`)
            .then(response => response.json())
            .then(data => {
                events = data.data;
                console.log("Fetched events:", events);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    });
    
</script>
<div class=" flex flex-col bg-red-500 w-full h-full">
    <!-- have to add picture to this  -->
    <div id="main" class="flex flex-col justify-end items-center bg-white h-60 relative ">
        <img src="https://images.pexels.com/photos/4238524/pexels-photo-4238524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Upcoming Events" class="w-full" />
        
        <p class="md:text-yellow-200 text-orange-500 font-bold md:font-extrabold md:text-5xl text-2xl absolute bottom-0 font-sans pb-2">What's coming up next ????</p>
    

    </div>

    <div class="flex flex-col  bg-[#F3E4CF] h-full overflow-auto items-stretch ">
        {#each events as event , index }
        <div class=" border border-black border-x-2 my-1 border-y-2 text-black bg-[#B4D2BD] pl-2 ">
        <div class="flex space-x-1.5">
            <i class="fa-regular fa-calendar-days text-3xl"></i>
        
        <h3 class="text-red-600 font-extrabold md:text-3xl text-xl font-sans">{event.title}</h3>
        </div>
        <div class="flex space-x-2">
        <p class="text-black font-bold text-sm md:text-lg"> Date: </p>
        <p class="text-black font-semibold text-sm md:text-lg"> {event.date}</p>
        
    </div>
    <div class="flex space-x-2">
        <p class="text-black font-bold text-sm md:text-lg"> Time: </p>
        <p class="text-black font-semibold text-sm md:text-lg"> {event.time}</p>

    </div>
        
        <div class="flex space-x-2">
        <p class="text-black font-bold text-sm md:text-lg"> Platform: </p>
        <p class="text-black font-semibold text-sm md:text-lg"> {event.platform}</p>
        </div>
        <div class="flex space-x-2">
        <p class="text-black font-bold text-sm md:text-lg"> Link: </p>
        <a href="https://meet.google.com/{event.link}"><p class="text-black underline font-semibold text-sm md:text-lg">{event.link}</p></a>
        </div>
        
            
        
        
    </div>
    {/each}
    {#if events.length === 0}
       <div class="bg-gray-200 flex flex-col items-center justify-around w-full h-full p-4 over">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 text-center">
        No Upcoming Events
    </h1>
    <img src="work in progress.svg" alt="Work in progress" class="w-64 sm:w-80 md:w-[30rem] mb-4">
</div>
    {/if}
        </div>

</div>