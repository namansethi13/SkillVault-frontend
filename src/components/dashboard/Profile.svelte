<script>
	import { onMount } from 'svelte';
	import { getCroppedImg , getCroppedImg2} from './../../lib/canvasUtils.js';

    import Cropper from 'svelte-easy-crop'
    let  avatar = "blank profile.png";
    let profile_update = false;
    let uncropped = null;
    let isLoading = true;
    let error = null;
    let pixelCrop = null;
    let crop = { x: 0, y: 0 }
    let zoom = 1 
    let details={
    name:"loading",
    email: "loading",
    gender: "loading",
    pronouns: "loading",
    batch: "loading",
    role: "loading"
    }
    let imagebase64 = null;
// function blobToBase64(canvas) {
//     return new Promise((resolve, reject) => {
//         canvas.toBlob((blob) => {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 resolve(reader.result); // This will be the Base64 string
//             };
//             reader.onerror = reject;
//             reader.readAsDataURL(blob);
//         }, 'image/png');
//     });
// }
async function loadprofile(){
    try {
        const response = await fetch('http://localhost:5000/account/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        
        if (!response.ok) {
            console.log(response);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        details = data;
        try{
            avatar = `http://localhost:5000/account/profile_picture/${details.profile}`;
            if(avatar == "http://localhost:5000/account/profile_picture/undefined"){
                avatar = "blank profile.png";
            }
        }
        catch(e){
            console.log("no profile picture found");
        }
    } catch (e) {
        console.error("There was a problem fetching the data:", e);
        error = e.message;
    } finally {
        isLoading = false;
    }
}

onMount(async () => {
  loadprofile();
})




function onfileselected(e){
    let backdrop = document.getElementById("backdrop");
    let cropper = document.getElementById("cropper");
    let cropper_parent = document.getElementById("cropper_parent");
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
    uncropped = e.target.result
    backdrop.classList.remove("hidden");
    cropper.classList.remove("hidden");
    cropper.classList.add("flex");
    cropper_parent.classList.remove("hidden");
    cropper_parent.classList.add("flex");
};}





async function cropImage(){
        console.log("cropping image");
		avatar = await getCroppedImg(uncropped, pixelCrop);
        imagebase64 = await getCroppedImg2(uncropped, pixelCrop);
        profile_update = true;
        let backdrop = document.getElementById("backdrop");
        let cropper = document.getElementById("cropper");
        let cropper_parent = document.getElementById("cropper_parent");
        backdrop.classList.add("hidden");
        cropper.classList.add("hidden");
        cropper.classList.remove("flex");
        cropper_parent.classList.add("hidden");
        zoom = 1;
        crop = { x: 0, y: 0 }
}



function cancelCrop() {
    let backdrop = document.getElementById("backdrop");
    let cropper = document.getElementById("cropper");
    let cropper_parent = document.getElementById("cropper_parent");
    backdrop.classList.add("hidden");
    cropper.classList.add("hidden");
    cropper.classList.remove("flex");
    cropper_parent.classList.add("hidden");
    zoom = 1;
    crop = { x: 0, y: 0 }
}



async function handleupdateprofile(){
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let pronouns = document.getElementById("pronouns").value;
    let image = null;
    if(profile_update){
    image = imagebase64;
    console.log("image updated");
     }
   

    let formdata = new FormData();
    formdata.append("name",name);
    formdata.append("gender",gender);
    formdata.append("pronouns",pronouns);
    formdata.append("profilepicture",image);
    fetch('http://localhost:5000/account/profile', {
        method: 'PUT',
        body: formdata,
        credentials: 'include'  // Important for handling cookies
    }).then(() => {
        window.location.href = '/dashboard'
    })
}

function handlelogout(){
    fetch('http://localhost:5000/account/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'  // Important for handling cookies
    }).then(() => {
        window.location.href = '/'
    })
}


</script>
{#if isLoading}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>
{:else if error}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-xl">
            <h2 class="text-xl font-bold text-red-600 mb-4">Error</h2>
            <p class="text-gray-700">An error was encountered while fetching your profile</p>
            <div class="flex justify-center">


            <button 
                class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => handlelogout()}
                >
                Logout
            </button>
        </div>
        </div>
    </div>
{/if}

    <div class="w-96 h-60 z-20 hidden flex-col items-center bg-white absolute top-[20%] md:left-[40%] left-[10%]" id="cropper_parent">
        <div class="z-40  items-center justify-center bg-white w-full h-full" id="cropper">
            <Cropper
            image={uncropped}
            aspect={1}
            bind:crop
            bind:zoom
            cropShape="round"
            on:cropcomplete={e => pixelCrop = e.detail.pixels}
            />
            
        </div>
        <div class="flex justify-evenly w-full">

            <button class="bg-blue-500 z-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs md:text-sm" on:click={cropImage}>Crop</button>
            <button class="bg-red-600 z-40 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs md:text-sm" on:click={cancelCrop}>Cancel</button>
        </div>
    </div>

<div class="fixed  pin items-center hidden bg-black w-screen h-screen opacity-60 z-10 " id="backdrop"></div>
<div class="bg-slate-300 flex-col flex w-full h-full overflow-auto">
  
    
 <div id="profile" class="flex justify-center mb-10 mt-8 w-full">

   <div class="h-full relative">
 
         <img src={avatar} class="md:w-36 md:h-36 lg:h-40 w-28 lg:w-40 rounded-full h-28"  alt="">
         <div class="bg-black rounded-full p-2 h-8 w-8 flex items-center absolute right-[0.5rem] bottom-0">
            <label for="profile-pic-input" class="cursor-pointer">
                <i class="fa fa-plus text-white text-lg "></i>
            </label>
            <input type="file" id="profile-pic-input" class="hidden" accept="image/*" on:change={(e)=> onfileselected(e)}>

         </div>
     
   </div>
</div>

<div class="flex flex-col justify-center pt-3">

    
    <form class="px-4 md:px-40 flex flex-col"  on:submit|preventDefault={handleupdateprofile}> 
        <div class="flex justify-between mt-6">
            <label for="name" class="text-black text-lg md:text-3xl lg:text-4xl  p-1 ">Name:</label>
            <input type="text" name="name" id="name" placeholder="Full Name" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black bg-slate-50" value={details.name}>
        </div>

        <div class="flex justify-between  mt-6">
            <label for="email" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1 border border-black" value={details.email} disabled>
        </div>

         <div class="flex justify-between  mt-6">
            <label for="gender" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Gender:</label>
            <input type="text" name="gender" id="gender" placeholder="Gender" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black bg-slate-50" value={details.gender?? ""}>
        </div>

        <div class="flex justify-between  mt-6">
            <label for="pronouns" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Pronouns:</label>
            <input type="text" name="pronouns" id="pronouns" placeholder="Pronouns" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black bg-slate-50"  value={details.pronouns?? ""}>
        </div>

        <div class="flex justify-between  mt-6">
            <label for="batch" class="text-black text-lg md:text-3xl lg:text-4xl p-1 ">Batch:</label>
            <input type="text" name="batch" id="" placeholder="Batch" value={details.batch} class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black" disabled >
        </div>

        <div class="flex justify-between  mt-6">
            <label for="Role" class="text-black text-lg md:text-3xl lg:text-4xl p-1 ">Role:</label>
            <input type="text" name="Role" id="" placeholder="Role" value={details.role} class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1 border border-black" disabled>
        </div>

        <div class="flex justify-center  mt-12">
        <button type="submit" class="text-white bg-gradient-to-r text-lg md:text-3xl lg:text-4xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            Update</button>

        </div> 
    </form>
</div>

</div>

 
