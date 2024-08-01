<script>
	import { getCroppedImg } from './../../lib/canvasUtils.js';

    import Cropper from 'svelte-easy-crop'
    let details={
    name:"John Doe",
    email: "johndoe@gmail.com",
    gender: "male",
    pronouns: null,
    batch: "January - march 2024",
    role: "Web Developer"
}

let  avatar = "blank profile.png";
let profile_update = false;
let uncropped = null;

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
};



}
let pixelCrop = null;
let crop = { x: 0, y: 0 }
let zoom = 1
async function cropImage(){
        console.log("cropping image");
		avatar = await getCroppedImg(uncropped, pixelCrop);
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

function handleupdateprofile(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let pronouns = document.getElementById("pronouns").value;
    let image = null;
    if(profile_update){
    image = document.getElementById("profile-pic-input").files[0];
    }

    let formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("gender",gender);
    formdata.append("pronouns",pronouns);
    formdata.append("image",image);
    fetch('http://localhost:5000/account/updateprofile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formdata,
        credentials: 'include'  // Important for handling cookies
    }).then(() => {
        window.location.href = '/dashboard'
    })
}

</script>


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
            <input type="text" name="name" id="name" placeholder="Full Name" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black" value={details.name}>
        </div>

        <div class="flex justify-between  mt-6">
            <label for="email" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1 border border-black" value={details.email}>
        </div>

         <div class="flex justify-between  mt-6">
            <label for="gender" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Gender:</label>
            <input type="text" name="gender" id="gender" placeholder="Gender" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black" value={details.gender?? ""}>
        </div>

        <div class="flex justify-between  mt-6">
            <label for="pronouns" class="text-black text-lg md:text-3xl lg:text-4xl p-1">Pronouns:</label>
            <input type="text" name="pronouns" id="pronouns" placeholder="Pronouns" class="text-lg md:text-2xl lg:text-3xl text-black hover:text-black p-1  border border-black"  value={details.pronouns?? ""}>
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
        <button type="button" class="text-white bg-gradient-to-r text-lg md:text-3xl lg:text-4xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            Update</button>

        </div> 
    </form>
</div>

</div>

 
