<script>

let is_hamburger_open = false

function handlehamburger() {
    is_hamburger_open = !is_hamburger_open
}
</script>

<header class="flex flex-col relative z-20">
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