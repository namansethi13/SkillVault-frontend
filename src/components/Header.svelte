<script>

let is_hamburger_open = false
let is_login_modal_open = false

function handlehamburger() {
    is_hamburger_open = !is_hamburger_open
}

function handleloginmodal(){
    let API_BASE_URL="http://localhost:5000/account"
    is_login_modal_open = !is_login_modal_open
    if(is_login_modal_open){
        handlehamburger()
        document.body.style.overflow = "hidden"
        document.querySelector("#loginmodal").classList.remove("hidden")
        document.querySelector("#backdrop").classList.remove("hidden")
        document.querySelector("#loginmodal").classList.add("flex")
        document.querySelector("#backdrop").classList.add("flex")
       

    }else{
        document.body.style.overflow = "auto"
        document.querySelector("#loginmodal").classList.remove("flex")
        document.querySelector("#backdrop").classList.remove("flex")
        document.querySelector("#loginmodal").classList.add("hidden")
        document.querySelector("#backdrop").classList.add("hidden")
    }
    

}

function handleLogin(){
    let email = document.querySelector("#LoginEmail").value
    let password = document.querySelector("#LoginPassword").value
    // console.log(email, password)
    let formdata = new FormData()
    formdata.append("email", email)
    formdata.append("password", password)
    fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        body: formdata
    }).then(res => {
        if(res.status === 200){
            console.log("Login success")
            // handleloginmodal()
        }else{
            console.log("Login failed")
        }
    }).catch(err => {
        console.log(err)
    
    })
}
</script>

<header class="flex flex-col relative z-2">

<div class="max-w-[1920] mx-auto w-full flex item-center justify-between p-4 py-6">
    <a href="/" data-sveltekit-reload>
    <h1 class="font-semibold text-lg">SKILL
    <span class="bg-gradient-to-r from-amber-200 to-yellow-400 inline-block text-transparent bg-clip-text ">
    VAULT
    </span>
</h1>
    </a>
    <button class="md:hidden grid place-items-center" on:click={handlehamburger}>
        <i class={"fa-solid " + (is_hamburger_open ? "hidden" : "fa-bars" )} ></i>
    </button>
    <div class={"relative "+ (is_hamburger_open ? "" : "hidden" )}>

        <nav class={"w-44 md:hidden lg:hidden item-center gap-4 lg:gap-6 absolute top-0 right-0 bg-slate-900 p-5 rounded-sm z-50 float-start " + (is_hamburger_open ? "flex flex-col" : "hidden" )}>
            <div class="flex w-full justify-end">

                <button on:click={handlehamburger} class="w-7 ">    
                    <i class="fa-solid fa-x text-end " ></i>
                </button>
            </div>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/#description" data-sveltekit-reload>About internship</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/#faqs" data-sveltekit-reload>FAQs</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/aboutus" data-sveltekit-reload>About us</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/contactus" data-sveltekit-reload>Contact us</a>
            <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 " on:click={()=>handleloginmodal()} data-sveltekit-reload>
            Login
        </button>
    </nav>
</div>
    <nav class="hidden md:flex item-center gap-4 lg:gap-6">
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#description" data-sveltekit-reload>About internship</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#faqs" data-sveltekit-reload>FAQs</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/aboutus" data-sveltekit-reload>About us</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/contactus" data-sveltekit-reload>Contact us</a>
        <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 text-lg " on:click={()=>handleloginmodal()} data-sveltekit-reload>
            Login
        </button>
    </nav>
</div>



</header>


<div class="fixed  pin hidden items-center bg-black w-screen h-screen opacity-60 z-39" id="backdrop"></div>
<div style="height: 500px" class="z-40 hidden items-center justify-center absolute left-0 right-0 top-0 bottom-0 md:m-56 m-40" id="loginmodal">


    <div class="fixed pin flex items-center">

            <div class="shadow-lg bg-white rounded-lg p-8 w-96">
                <div class="flex justify-between mb-6">
                    <div class="w-[100%]">
                        <h1 class="text-center text-2xl text-indigo-600">Login</h1>
                    </div>
                    <button on:click={()=>handleloginmodal()}>
                        <span>
                            <i class="fa fa-x text-black"></i>
                        </span>
                    </button>
                </div>


                <form class="pt-6 pb-2 my-2"  on:submit|preventDefault={handleLogin}>
                    <div class="mb-4">
                        <label class="block text-sm font-bold mb-2 text-black opacity-90" for="email">
                            Email Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black"  id="LoginEmail" type="text" placeholder="Email Address">
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-bold mb-2 text-black opacity-90" for="password" >
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3" id="LoginPassword" type="password" placeholder="Password">
                    </div>
                    <div class="block md:flex items-center justify-between">
                        <div>
                            <input type="submit"class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border border-indigo-700">
                                Sign In
                            <!-- </input> -->
                        </div>

                    </div>
                    <div class="flex items-center justify-between mt-7">
                        <a href="#" class="text-indigo-600 no-underline">New user?</a>
                        <a href="#" class="text-indigo-600 no-underline">Forget Password?</a>
                </div>
                </form>
            </div>
        </div>
    </div>