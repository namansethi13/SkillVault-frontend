<script>
    import Header from "../../components/Header.svelte";

</script>
<Header/>
<section class="body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1920] mx-auto w-full text-center ">
            Contact us
            </h2>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Drop your name , email and message down below</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-slate-200">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-slate-100 bg-opacity-90 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-slate-200">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-slate-100 bg-opacity-90 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-slate-200">Message</label>
            <textarea id="message" name="message" class="w-full bg-slate-100 bg-opacity-90 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
        
      </div>
    </div>
  </div>
</section>