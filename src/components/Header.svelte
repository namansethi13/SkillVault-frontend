<script>
import {is_loggedin, user, is_loading} from '../store.js';
import { onMount } from "svelte";
import {page } from '$app/stores';
let is_hamburger_open = false
let is_login_modal_open = false
let is_forgot_password_modal_open = false
let API_BASE_URL="http://localhost:5000/account"


onMount(() => {

    let auth;
    let profile;
    let loading = true
    let is_alloted;
    let has_chosen;
    let has_accepted;

    is_loading.subscribe(value => {
        loading = value
        
        console.log("loading")
        
        if(!loading){
            console.log("not loading")
            auth = $is_loggedin
            profile = $user
            console.log(profile)
            is_alloted = profile.is_alloted
            has_chosen = profile.has_chosen
            has_accepted = profile.has_accepted
            
            console.log(auth)
            console.log(is_alloted)
            console.log(has_chosen)
            console.log(has_accepted)
            
            
            if(auth){
                console.log("auth")
                if(is_alloted && has_chosen && has_accepted){
                    console.log("alloted")
                    if (page.pathname != "dashboard") {
                        window.location.href = "/dashboard"
                    }

                }
                    if(!is_alloted || !has_chosen || !has_accepted){
                        console.log("not alloted")
                        if (page.pathname != "pre-dashboard") {
                            window.location.href = "/pre-dashboard"
                        }
                    }
                    
            }
            
        }

    })


   
}

)
function handlehamburger() {
    is_hamburger_open = !is_hamburger_open
}

function handleloginmodal(){
    
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
const delay = ms => new Promise(res => setTimeout(res, ms));

async function handleLogin() {
    let email = document.querySelector("#LoginEmail").value;
    let password = document.querySelector("#LoginPassword").value;
    
    // Create a FormData object
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    
    // Send a POST request with credentials included
    let submit_btn = document.querySelector("#submitLogin")
    let loading = document.querySelector("#loading")
    console.log(submit_btn)
    submit_btn.disabled = true
    submit_btn.classList.add("hidden")
    loading.classList.remove("hidden")
    fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        body: formdata,
        credentials: 'include'  // Important for handling cookies
    })
    .then(async res => {
        submit_btn.classList.remove("hidden")
        loading.classList.add("hidden")
        if (res.status === 200) {
            // window.alert("Login success");
            submit_btn.innerHTML = "Success"
            submit_btn.classList.remove("bg-indigo-600")
            submit_btn.classList.remove("hover:bg-indigo-700")
            submit_btn.classList.remove("border-indigo-700")
            submit_btn.classList.add("bg-green-500")
            submit_btn.classList.remove("hover:bg-green-600")
            submit_btn.classList.add("border-green-500")
            submit_btn.classList.add("cursor-not-allowed")
            await delay(2000);
            handleloginmodal()
            submit_btn.innerHTML = "Login"
            submit_btn.classList.remove("bg-green-500")
            submit_btn.classList.add("bg-indigo-600")
            submit_btn.classList.add("hover:bg-indigo-700")
            submit_btn.classList.remove("hover:bg-green-600")
            submit_btn.classList.remove("border-green-500")
            submit_btn.classList.add("border-indigo-700")
            submit_btn.classList.remove("cursor-not-allowed")
            submit_btn.disabled = false
            is_loggedin.set(true)
            window.location.href = "/dashboard"
            // Handle successful login (e.g., redirect or show a success message)
            // handleloginmodal() or other actions
        } else {
            // window.alert("Invalid credentials")
            submit_btn.innerHTML = "Failed"
            submit_btn.classList.add("bg-red-500")
            submit_btn.classList.remove("bg-indigo-600")
            submit_btn.classList.add("hover:bg-red-600")
            submit_btn.classList.remove("hover:bg-indigo-700")
            submit_btn.classList.add("border-red-500")
            submit_btn.classList.remove("border-indigo-700")
            submit_btn.classList.add("cursor-not-allowed")
            await delay(2000);
            submit_btn.innerHTML = "Login"
            submit_btn.classList.remove("bg-red-500")
            submit_btn.classList.add("bg-indigo-600")
            submit_btn.classList.add("hover:bg-indigo-700")
            submit_btn.classList.remove("hover:bg-red-600")
            submit_btn.classList.remove("border-red-500")
            submit_btn.classList.add("border-indigo-700")
            submit_btn.classList.remove("cursor-not-allowed")
            submit_btn.disabled = false
            console.log("Login failed");
            // Handle failed login (e.g., show an error message)
        }
    })
    .catch(err => {
        console.log(err);
        window.alert("Network error");
        handleloginmodal()
        // Handle network or other errors
    });
    
    submit_btn.classList.remove("cursor-not-allowed")
}

function handleforgotpasswordmodal(){
    if(!is_login_modal_open){
        return
    }

    is_forgot_password_modal_open = !is_forgot_password_modal_open
    if(is_forgot_password_modal_open){
        document.querySelector("#loginmodal").classList.add("hidden")
        document.querySelector("#forgotpasswordmodal").classList.remove("hidden")
        document.querySelector("#forgotpasswordmodal").classList.add("flex")
}
else{
    document.querySelector("#loginmodal").classList.remove("hidden")
    document.querySelector("#forgotpasswordmodal").classList.remove("flex")
    document.querySelector("#forgotpasswordmodal").classList.add("hidden")
}
}

function handleForgotPassword(){
    let email = document.querySelector("#ForgotPassEmail").value
    let formdata = new FormData()
    formdata.append("email", email)
    fetch(`${API_BASE_URL}/forgot_password`, {
        method: "POST",
        body: formdata
    }).then(res => {
        handleforgotpasswordmodal()
        window.alert("Password reset link sent to your email")

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
            {#if !($is_loggedin)}
            <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 " on:click={()=>handleloginmodal()} data-sveltekit-reload>
            Login
        </button>
        {/if}
    </nav>
</div>
    <nav class="hidden md:flex item-center gap-4 lg:gap-6">
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#description" data-sveltekit-reload>About internship</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#faqs" data-sveltekit-reload>FAQs</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/aboutus" data-sveltekit-reload>About us</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/contactus" data-sveltekit-reload>Contact us</a>
        {#if !($is_loggedin)}
        <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 text-lg " on:click={()=>handleloginmodal()} data-sveltekit-reload>
            Login
        </button>
        {/if}
    </nav>
</div>



</header>


<div class="fixed  pin hidden items-center bg-black w-screen h-screen opacity-60 z-39" id="backdrop"></div>
<div style="height: 500px" class="z-40 hidden items-center justify-center absolute left-0 right-0 top-[5%] bottom-0" id="loginmodal">


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
                            <button type="submit"class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border border-indigo-700" id="submitLogin" >
                                Login
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-20 hidden " id="loading"><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="30" height="30" x="25" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="32" height="30" x="85" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="30" height="30" x="145" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect></svg>
                            <!-- </input> -->
                        </div>

                    </div>
                    <div class="flex items-center justify-between mt-7">
                        <a href="/register" class="text-indigo-600 no-underline" data-sveltekit-reload >New user?</a>
                        <button class="text-indigo-600 no-underline" on:click={
                            ()=>handleforgotpasswordmodal()
                        } type="button">Forgot Password?</button>
                </div>
                </form>
            </div>
        </div>
    </div>



<!-- forget pass modal -->


<div style="height: 500px" class="z-40 hidden items-center justify-center absolute left-0 right-0 top-[5%] bottom-0" id="forgotpasswordmodal">


    <div class="fixed pin flex items-center">

            <div class="shadow-lg bg-white rounded-lg p-8 w-96">
                <div class="flex justify-between mb-6">
                    <div class="w-[100%]">
                        <h1 class="text-center text-2xl text-indigo-600">Forgot Password</h1>
                    </div>
                    <button on:click={()=>handleforgotpasswordmodal()}>
                        <span>
                            <i class="fa fa-x text-black"></i>
                        </span>
                    </button>
                </div>


                <form class="pt-6 pb-2 my-2"  on:submit|preventDefault={handleForgotPassword}>
                    <div class="mb-4">
                        <label class="block text-sm font-bold mb-2 text-black opacity-90" for="email">
                            Email Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black"  id="ForgotPassEmail" type="text" placeholder="Email Address">
                    </div>
                    
                    <div class="block md:flex items-center justify-between">
                        <div>
                            <input type="submit"class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border border-indigo-700" id="submitForgotPass" value="Submit">
                            <!-- </input> -->
                        </div>

                    </div>
                  
                </form>
            </div>
        </div>
    </div>

