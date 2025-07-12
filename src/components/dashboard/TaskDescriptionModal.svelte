<script>
    import { createEventDispatcher } from "svelte";

    export let description = "This is a default description for the task.";
    let dispatch = createEventDispatcher();
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




<dialog id="taskModal" class="modal">
    <div class="modal-box bg-white">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
      </form>
      <h3 class="text-xl font-bold text-black">Description</h3>
        <p class="py-4 text-black">{description}</p>
    
        <button class="btn btn-primary" on:click={closeModal}>Close</button>
    </div>
  </dialog>