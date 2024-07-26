<script>

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
    <div id="sidebar"  class="flex flex-col h-screen  justify-between bg-[#0B2533] w-[30%] max-w-96  min-w-[162px] items-center rounded-lg">
        <div id="profile" class="flex justify-between md:justify-center w-full">
            <p class="m-2">this is profile</p>
            <i class="fa fa-x md:hidden lg:hidden text-white text m-2"></i>
        </div>
        <div id="navigation" class="flex flex-col justify-between h-40">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
        <div id="logout">this is logout</div>



    </div>
    <div id="main"></div>
</div>