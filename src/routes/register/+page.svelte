
<script>
    let API_BASE_URL="http://localhost:5000/account/"
    import Header from "../../components/Header.svelte"
    let step = 1;
    let name;
    let email;
    let phone;
    let college;
    let university;
    let collegeid;
    let gender;
    let pronouns;
    // if(import.meta.env.Local === "true") {
    //      API_BASE_URL = import.meta.env.Vite_Local_url
    // }
    // else{
    //      API_BASE_URL = import.meta.env.Production_url;
    // }

    function incrementstep(input){
        console.log("called")
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

            return;
        }

    else if(step === 2){
        phone = input.split("@")[0]
        email = input.split("@")[1]+"@"+input.split("@")[2]
        console.log(email,phone)
        if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            if(document.querySelector("#email").classList.contains("border-red-700")){
                document.querySelector("#email").classList.add("border-gray-300")
                document.querySelector("#email").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#email").classList.remove("border-gray-300")
            document.querySelector("#email").classList.add("border-red-700")
        }
        if(/^[0-9]{10}$/.test(phone)){
            if(document.querySelector("#phone").classList.contains("border-red-700")){
                document.querySelector("#phone").classList.add("border-gray-300")
                document.querySelector("#phone").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#phone").classList.remove("border-gray-300")
            document.querySelector("#phone").classList.add("border-red-700")
        }
        if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && /^[0-9]{10}$/.test(phone)){
            step++;
            return;
        }
    }

    else if(step === 3){
        college = input.split("@")[0]
        university = input.split("@")[1]
        console.log(college,university)
        if(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(college)){
            if(document.querySelector("#college_name").classList.contains("border-red-700")){
                document.querySelector("#college_name").classList.add("border-gray-300")
                document.querySelector("#college_name").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#college_name").classList.remove("border-gray-300")
            document.querySelector("#college_name").classList.add("border-red-700")
        }
        if(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(university)){
            if(document.querySelector("#university_name").classList.contains("border-red-700")){
                document.querySelector("#university_name").classList.add("border-gray-300")
                document.querySelector("#university_name").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#university_name").classList.remove("border-gray-300")
            document.querySelector("#university_name").classList.add("border-red-700")
        }
        if(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(college) && /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(university)){
            step++;
            return;
        }
    }

    else if(step === 4){
        if(input.target.files.length === 0) return
        let image = input.target.files[0];
        collegeid = image         
    }

    else if(step === 5){
        gender = input[0] || "Not provided"
        pronouns = input[1] || "Not provided"
        step++;
        
    }
    }

    function confirm_pass(){
        let pass = document.querySelector("#password").value
        let confirm_pass = document.querySelector("#confirm_password").value
        if(pass === confirm_pass){
            if(document.querySelector("#confirm_password").classList.contains("border-red-700")){
                document.querySelector("#confirm_password").classList.add("border-gray-300")
                document.querySelector("#confirm_password").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#confirm_password").classList.remove("border-gray-300")
            document.querySelector("#confirm_password").classList.add("border-red-700")
        }
    }

    function check_pass(){
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        let pass = document.querySelector("#password").value
        if(regex.test(pass)){
            if(document.querySelector("#password").classList.contains("border-red-700")){
                document.querySelector("#password").classList.add("border-gray-300")
                document.querySelector("#password").classList.remove("border-red-700")
            }
        }
        else{
            document.querySelector("#password").classList.remove("border-gray-300")
            document.querySelector("#password").classList.add("border-red-700")
        }
    }

    let redirect_time = 10
    function rediect_timer(){
        let timer = setInterval(()=>{
            redirect_time--
            if(redirect_time === 0){
                clearInterval(timer)
                window.location.href = "/"
            }
        },1000)
    }
    
    async function submit_form(){
        let pass = document.querySelector("#password").value
        let confirm_pass = document.querySelector("#confirm_password").value
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        let loading = document.querySelector("#loading")
        let passSubmit = document.querySelector("#passSubmit")
        let backSubmit = document.querySelector("#backSubmit")
        loading.classList.remove("hidden")
        console.log(loading)
        passSubmit.disabled = true
        backSubmit.disabled = true
        passSubmit.classList.add("hidden")
        backSubmit.classList.add("hidden")
        if(regex.test(pass) && pass === confirm_pass){
            let formdata = new FormData()
            formdata.append("name",name)
            formdata.append("email",email)
            formdata.append("phone",phone)
            formdata.append("college",college)
            formdata.append("university",university)
            formdata.append("collegeidimage",collegeid)
            formdata.append("gender",gender)
            formdata.append("pronouns",pronouns)
            formdata.append("password",pass)
            try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                body: formdata
            });
            
            loading.classList.add("hidden")
            passSubmit.disabled = false
            backSubmit.disabled = false
            passSubmit.classList.remove("hidden")
            backSubmit.classList.remove("hidden")
            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const result = await response.json();

            console.log('Registration successful:', result);
            step++;
            rediect_timer();
        } catch (error) {
            console.error('Error during registration:', error);
            loading.classList.add("hidden")
            passSubmit.disabled = false
            backSubmit.disabled = false
            passSubmit.classList.remove("hidden")
            backSubmit.classList.remove("hidden")
            alert('Registration failed. Please try again.');
        }
        }else{
            loading.classList.add("hidden")
            passSubmit.disabled = false
            backSubmit.disabled = false
            passSubmit.classList.remove("hidden")
            backSubmit.classList.remove("hidden")
            return
        }

    }
</script>
    <Header/>
    <div class={"flex justify-center items-center mt-20 " + (step ===7 ? "hidden" : "")}>   
        <div class={"flex items-center md:inline-flex " + (step ===1 ? "" : "hidden")}>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="-40 -40 80 80"  >
            <circle cx="0" cy="0" r="35" style={"  transition: stroke 0.3s ease; stroke-width: 4; fill: none; "+ (step==1? "stroke: rgb(240,240,240);" : (step>1? "stroke: rgb(75,181,67);" : "stroke: rgb(150,150,150);"))} />
            <text x="-7 " y="14" font-size="40" font-weight="400" style={" transition: fill 0.3s ease; "+ (step==1? "fill: rgb(240,240,240);" : (step>1? "fill: rgb(75,181,67);" : "fill: rgb(150,150,150);"))}>1</text>
        </svg>
        <p class="mx-2" style={" transition: color 0.3s ease; "+ (step==1? "color: rgb(240,240,240);" : (step>1? "color: rgb(75,181,67);" : "color: rgb(100,100,100);"))}>
            Introduction*
        </p>
        <div class="h-0.5 w-12 bg-slate-100 mx-2 hidden md:block"></div> 
    </div>


    <div class={"flex items-center md:inline-flex  " + (step ===2 ? "" : "hidden")}>
            
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="-40 -40 80 80"  >
        <circle cx="0" cy="0" r="35" style={" transition: stroke 0.3s ease; stroke-width: 4; fill: none; "+ (step==2? "stroke: rgb(240,240,240);" : (step>2   ? "stroke: rgb(75,181,67);" : "stroke: rgb(150,150,150);"))} />
        <text x="-10 " y="14" font-size="40" font-weight="400" style={" transition: fill 0.3s ease; "+ (step==2? "fill: rgb(240,240,240);" : (step>2? "fill: rgb(75,181,67);" : "fill: rgb(150,150,150);"))}>2</text>
    </svg>
    <p class="mx-2" style={" transition: color 0.3s ease; "+ (step==2? "color: rgb(240,240,240);" : (step>2? "color: rgb(75,181,67);" : "color: rgb(150,150,150);"))}>
    Contact Information*
    </p>
    <div class="h-0.5 w-12 bg-slate-100 mx-2 hidden md:block"></div>
</div>

<div class={"flex items-center md:inline-flex  " + (step==3 || step==4 ? "" : "hidden")}>
            
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="-40 -40 80 80">
    <circle cx="0" cy="0" r="35" style={"  transition: stroke 0.3s ease; stroke-width: 4; fill: none; "+ (step==3 || step==4? "stroke: rgb(240,240,240);" : (step>4   ? "stroke: rgb(75,181,67);" : "stroke: rgb(150,150,150);"))} />
    <text x="-10 " y="14" font-size="40" font-weight="400" style={" transition: fill 0.3s ease; "+ (step==3 || step==4? "fill: rgb(240,240,240);" : (step>4? "fill: rgb(75,181,67);" : "fill: rgb(150,150,150);"))}>3</text>
</svg>
<p class="mx-2" style={"transition: color 0.3s ease; "+ (step==3 || step==4? "color: rgb(240,240,240);" : (step>4? "color: rgb(75,181,67);" : "color: rgb(150,150,150);"))}>
Education Details*
</p>
<div class="h-0.5 w-12 bg-slate-100 mx-2  hidden md:block"></div>
</div>



<div class={"flex items-center md:inline-flex  " + (step ===5 ? "" : "hidden")}>
            
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="-40 -40 80 80">
    <circle cx="0" cy="0" r="35" style={"  transition: stroke 0.3s ease;  stroke-width: 4; fill: none; "+ (step==5? "stroke: rgb(240,240,240);" : (step>5   ? "stroke: rgb(75,181,67);" : "stroke: rgb(150,150,150);"))} />
    <text x="-10 " y="14" font-size="40" font-weight="400" style={" transition: fill 0.3s ease; "+ (step==5? "fill: rgb(240,240,240);" : (step>5? "fill: rgb(75,181,67);" : "fill: rgb(150,150,150);"))}>4</text>
</svg>
<p class="mx-2" style={"transition: color 0.3s ease; "+ (step==5? "color: rgb(240,240,240);" : (step>5? "color: rgb(75,181,67);" : "color: rgb(150,150,150);"))}>
Gender and Pronouns
</p>
</div>

    </div>
    <section class="m-3 mb-auto">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center justify-center items-center w-full ">
                
                <img src="registration.png" class={"w-44 " + (step !==7 ? "" : "hidden")} alt="hi">
                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===1 ? "" : "hidden")}>
                    Hi! How are you? Let us start with an introduction
                </h3>

                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===2 ? "" : "hidden")}>
                    Hi {name}! What is your email and phone number?
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

                <h3 class={"m-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[1920] mx-auto w-full text-center " + (step ===6 ? "" : "hidden")}>
                    Choose a password! 
                 </h3>
                 <h4 class={"text-md sm:text-1xl md:text-3xl lg:text-2xl max-w-[1920] mx-auto w-full text-center " + (step ===6 ? "" : "hidden")}>
                    Password should contain atleast 8 characters, one uppercase, one lowercase, one number and one special character
                 </h4>

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
                    <input type="email" id="email" name="email" class="w-full bg-slate-100 rounded border  focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative flex-grow w-full">
                    <label for="phone" class="leading-7 text-sm text-slate-50">Phone (do not include +91)</label>
                    <input type="text" id="phone" name="phone" class="w-full bg-gray-100 rounded border focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full " on:click={()=>{incrementstep(`${document.querySelector("#phone").value}@${document.querySelector("#email").value}`)}}>NEXT →</button>
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
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=>incrementstep(`${document.querySelector("#college_name").value}@${document.querySelector("#university_name").value}`)}>NEXT →</button>
            </div>


            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===4 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="college_id" class="leading-7 text-sm text-slate-50">College id</label>
                    <div class="flex bg-gray-100 rounded border border-gray-300 items-start justify-around">
                        <input type="file" id="college_id" name="college_id" accept="image/png, image/jpg, image/jpeg" on:change={(e)=>incrementstep(e)} class="w-80  focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ">
                        {#if collegeid }
                        <button on:click={()=>{collegeid=null
                            document.querySelector("#college_id").value = ""
                        }}>
                            <i class="fa fa-trash text-black text-3xl m-1" aria-hidden="true"></i>
                        </button>
                        {:else}
                        <button>
                            <i class="fa w-5 text-black text-3xl m-1" aria-hidden="true"></i>
                        </button>
                        {/if}
                    </div>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=>step++} >NEXT →</button>
            </div>


            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===5 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="gender" class="leading-7 text-sm text-slate-50">Gender</label>
                    <input type="text" id="gender" name="gender" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-black text-base outline-none focus:text-slate-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>

                <div class="relative flex-grow w-full">
                    <label for="pronouns" class="leading-7 text-sm text-slate-50">Pronouns</label>
                    <input type="text" id="pronouns" name="pronouns" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>

                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=>incrementstep([document.querySelector("#gender").value, document.querySelector("#pronouns").value])} >NEXT →</button>
            </div>
            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end mt-6 "  + (step >1 && step<6 ? "" : "hidden")}>
                <button class={"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full "} on:click={()=> step--}>Back ←</button>
            </div>



            <div class={"flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end " + (step ===6 ? "" : "hidden")}>
                <div class="relative flex-grow w-full">
                    <label for="password" class="leading-7 text-sm text-slate-50">Password</label>
                    <input type="password" id="password" name="Password" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" on:change={()=>check_pass()}>
                </div>
                <div class="relative flex-grow w-full">
                    <label for="confirm_password" class="leading-7 text-sm text-slate-50">Confirm Password</label>
                    <input type="password" id="confirm_password" name="confirm_password" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none focus:text-slate-50 text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" on:change={()=>confirm_pass()}>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" on:click={()=>submit_form()} id="passSubmit">Submit</button>
                <button class={"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full mt-9"} on:click={()=> step--} id="backSubmit">Back ←</button>
                <div class="flax flex-col justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" class="w-20 hidden" id="loading"><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="30" height="30" x="25" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="32" height="30" x="85" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="#5A67D8" stroke="#5A67D8" stroke-width="15" width="30" height="30" x="145" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect></svg>
                </div>
            </div>
          




        </div>

        <div class={" flex flex-col items-center justify-center lg:w-2/3 w-full mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 " + (step ===7 ? "" : "hidden")}>
           <p class="text-xl sm:text-2xl md:text-2xl lg:text-4xl  ">Verification email has been sent on {email}</p>
           <p class="text-xl sm:text-2xl md:text-2xl lg:text-4xl ">Redirecting to <a href="/" data-sveltekit-reload class="underline">home</a> in {redirect_time} seconds</p>
        </div>
    </section>
