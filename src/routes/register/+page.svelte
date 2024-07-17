<script>
    let step = 1;
    let name;

    function incrementstep(input){
        if(input==="") return

        if(step===1){
           if( /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(input) ){
                name = input
                step++;
                if(document.querySelector("#full-name").classList.contains("border-red-700")){
                    document.querySelector("#full-name").classList.add("border-gray-300")
                    document.querySelector("#full-name").classList.remove("border-red-700")
                }

            } 
            else{
                console.log(document.querySelector("#full-name"))
                document.querySelector("#full-name").classList.remove("border-gray-300")
                document.querySelector("#full-name").classList.add("border-red-700")
            }
        }
    }

</script>

    <section class="">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center justify-center items-center w-full mb-12">
                <p class="opacity-100 font-semibold text-3xl sm:text-5xl md:text-6xl md:text-left lg:text-left text-center mb-4 md:mb-10 lg:mb-12">Register </p>
                <img src="registration.png" class="w-44" alt="hi">
                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===1 ? "" : "hidden")}>
                    Hi! How are you? Let us start with an introduction
                </h3>

                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===2 ? "" : "hidden")}>
                    Hi name! What is your email and phone number?
                </h3>
                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===3 ? "" : "hidden")}>
                    Cool! Please enter your university and college name
                </h3>
                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===4 ? "" : "hidden")}>
                    Fantastic! Can you provide us your college id (such as icard or any admission proof)?
                </h3>

                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===5 ? "" : "hidden")}>
                   Amazing! What is your gender and prefered pronouns?
                </h3>
            </div>
            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===1 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="full-name" class="leading-7 text-sm text-slate-50 ">Full Name</label>
                    <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 rounded border border-gray focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ">
                </div>
              
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full " on:click={()=>incrementstep(document.querySelector("#full-name").value)}>NEXT →</button>
            </div>

            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===2 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="email" class="leading-7 text-sm text-slate-50">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative flex-grow w-full">
                    <label for="phone" class="leading-7 text-sm text-slate-50">Phone (do not include +91)</label>
                    <input type="text" id="phone" name="phone" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full " on:click={()=>{incrementstep(document.querySelector("#phone").value)+"@"+incrementstep(document.querySelector("#email").value)}}>NEXT →</button>
            </div>

            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===3 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="college_name" class="leading-7 text-sm text-slate-50">College name</label>
                    <input type="college_name" id="college_name" name="college_name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative flex-grow w-full">
                    <label for="university_name" class="leading-7 text-sm text-slate-50">University name</label>
                    <input type="university_name" id="university_name" name="university_name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=>incrementstep(document.querySelector("college_name")+"@"+document.querySelector("#university_name"))}>NEXT →</button>
            </div>


            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===4 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="college_id" class="leading-7 text-sm text-slate-50">College id</label>
                    <input type="file" id="college_id" name="college_id" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">NEXT →</button>
                <button class="text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">Skip →</button>
            </div>


            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===5 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="gender" class="leading-7 text-sm text-slate-50">Gender</label>
                    <input type="text" id="gender" name="gender" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>

                <div class="relative flex-grow w-full">
                    <label for="pronouns" class="leading-7 text-sm text-slate-50">Pronouns</label>
                    <input type="text" id="pronouns" name="pronouns" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>

                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">NEXT →</button>
                <button class="text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">Skip →</button>
            </div>
            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end mt-6 "  + (step ===1 ? "hidden" : "")}>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=> step--}>Back ←</button>
            </div>
        </div>
    </section>
