<script>
	import Alert from './../common/Alert.svelte';
    import { createEventDispatcher } from "svelte";

    export let taskId = "-1";
    $: console.log("got", taskId);
    let alert = false;
    let alertMessage = "";
    let alertType = "success";
    let dispatch = createEventDispatcher();
    let data = {
        githubLink: "",
        deployedLink: "",
        comments: ""
    };
    let errors = {
        githubLink  : false,
        deployedLink: false,
        comments: false
    }

    function validateUrl(url) {
        url = url.trim();
        let components = url.split('.');
        if (components.length < 3) {
            return false;
        }
        if (components[0].length < 2) {
            return false;
        }
        if (components[1].length < 2) {
            return false;
        }
        if (components[2].length < 2) {
            return false;
        }
        return true;
    }

    function validateGithubLink() {
       validateUrl(data.githubLink) ? errors.githubLink = false : errors.githubLink = true;
    }
    function validateDeployedLink() {
        if (!data.deployedLink) {
            errors.deployedLink = false;
            return;
        }
        validateUrl(data.deployedLink) ? errors.deployedLink = false : errors.deployedLink = true;
    }

    function validateComments() {
        if (!data.comments) {
            errors.comments = false;
            return;
        }
        if (data.comments.length < 10) {
            errors.comments = true;
            return;
        } else {
            errors.comments = false;
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        validateComments();

        if (errors.githubLink || errors.deployedLink || errors.comments) {
            alert = true;
            alertMessage = "Please fill all the fields correctly";
            alertType = "error";
            return;
        }

        const formData = new FormData();
        let links = {
            git: data.githubLink,
            deployed: data.deployedLink
        };
        formData.append('links', JSON.stringify(links));
        formData.append('description', data.comments);
        formData.append('code', taskId);

        await fetch(`http://localhost:5000/submissions/submit`, {
            method: 'POST',
            body: formData,
            credentials: 'include'  // Important for handling cookies
        })
            .then(response => {
                if (response.ok) {
                    console.log('Submission successful');
                    closeModal();
                } else {
                    console.error('Error submitting form');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }

    export function showModal() {
        const modal = document.getElementById('taskModal');
        if (modal) {
            modal.showModal();
        }
    }
    export function closeModal() {
        const modal = document.getElementById('taskModal');
        dispatch('close');
        if (modal) {
            modal.close();
        }
    }
</script>

{#if alert}
    <Alert message={alertMessage} type={alertType} on:close={() => (alert = false)} />
{/if}


<dialog id="taskModal" class="modal">
    <div class="modal-box bg-white">
      <form method="dialog" on:submit|preventDefault={closeModal}>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
      </form>
      <h3 class="text-xl font-bold text-black">Submit your task now!</h3>
  
      <form on:submit={handleSubmit} class="flex flex-col gap-4 mt-4">
          <div class="border my-5" class:border-red-600={errors.githubLink}  class:border-black={!errors.githubLink}>
  
          <label class="input input-bordered flex items-center gap-2 bg-white text-black font-bold" >
              Github/Drive link:
              <input type="text" class="grow font-normal "  placeholder="github.com/torvalds/linux" bind:value={data.githubLink} on:keydown={() => validateGithubLink()} />
          </label>
          </div>


          <div class="border   my-5"  class:border-red-600={errors.deployedLink}  class:border-black={!errors.deployedLink}>

          <label class="input input-bordered flex items-center gap-2 bg-white text-black font-bold border" >
              Deployed link (optional): :
              <input type="text" class="grow font-normal border-black hover:border-black"  placeholder="www.example.com" bind:value={data.deployedLink} on:keydown={() => validateDeployedLink()} />
          </label>
          </div>
          <div class="border my-5" class:border-red-600={errors.comments}  class:border-black={!errors.comments}>

              <label for="comments" class="input input-bordered flex items-center gap-2 bg-white text-black font-bold" >
                  Comments:
              </label>
              <textarea name="comments" class="textarea textarea-ghost bg-white text-black w-full"   placeholder="Any other comments you would like to include" bind:value={data.comments} on:keydown={validateComments}></textarea>
          </div>
          <div class="w-full flex justify-center">
  
              <button type="submit" class="btn bg-blue-500 text-white hover:bg-blue-600 border-hidden">Submit</button>
          </div>
      </form>
     
    </div>
  </dialog>