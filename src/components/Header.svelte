<script>

let is_hamburger_open = false

function handlehamburger() {
    is_hamburger_open = !is_hamburger_open
}
</script>

<header class="flex flex-col relative z-20">

<div class="max-w-[1920] mx-auto w-full flex item-center justify-between p-4 py-6">
    <a href="/">
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
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/#description">About internship</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/#faqs">FAQs</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/aboutus">About us</a>
            <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out" href="/contactus">Contact us</a>
            <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 ">
            Login
        </button>
    </nav>
</div>
    <nav class="hidden md:flex item-center gap-4 lg:gap-6">
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#description">About internship</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/#faqs">FAQs</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/aboutus">About us</a>
        <a class="duration-400 hover:text-yellow-400 cursor-pointer transition ease-in-out text-lg" href="/contactus">Contact us</a>
        <button class="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-3xl transition ease-in-out delay-100 text-lg ">
            Login
        </button>
    </nav>
</div>



</header>


<div style="height: 500px" class="z-40"><!-- height set to show correctly on TailwindComponents not required when used -->
    <div class="fixed pin flex items-center">
        <div class="fixed pin bg-black opacity-75 z-10"></div>

        <div class="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
            <div class="shadow-lg bg-white rounded-lg p-8 w-96">
                <div class="flex justify-end mb-6">
                    <button>
                        <span class="mr-2">Close</span>
                        <span>
                            <i class="fa fa-times"></i>
                        </span>
                    </button>
                </div>

                <h1 class="text-center text-2xl text-indigo-600">Login</h1>

                <form class="pt-6 pb-2 my-2">
                    <div class="mb-4">
                        <label class="block text-sm font-bold mb-2 text-black" for="email">
                            Email Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email Address">
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password">
                    </div>
                    <div class="block md:flex items-center justify-between">
                        <div>
                            <button class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest" type="button">
                                Sign In
                            </button>
                        </div>

                        <div class="mt-4 md:mt-0">
                            <a href="#" class="text-green no-underline">Forget Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>