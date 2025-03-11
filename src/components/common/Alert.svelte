<script>
    import { onMount, createEventDispatcher } from 'svelte';
    export let message = '';
    export let type = 'info'; // 'info', 'success', 'warning', 'error'
    export let duration = 3000;
    export let btn = false;
    export let btnText = 'Close';
    export let iconBtn = false;
    export let iconClass = '';

    let visible = true;
    const dispatch = createEventDispatcher();

    onMount(() => {
        const timer = setTimeout(() => {
            visible = false;
            dispatch('close');
        }, duration);

        return () => {clearTimeout(timer)};
    });
</script>


{#if visible}
<div
  role="alert"
  class="fixed flex top-0 left-1/2 transform -translate-x-1/2 z-[999] transition-opacity duration-300 max-w-[64rem] w-full alert alert-{type} {visible ? 'opacity-100' : 'opacity-0'}"
>  
<div class="flex justify-start w-2/3 gap-2">
  
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  class="h-6 w-6 shrink-0 stroke-current">
  <path
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<span>{message}</span>
</div>
      <div class="flex justify-end w-1/3">

      {#if btn}
        <button
          class="btn btn-sm btn-{type} ml-4"
          on:click={() => {
            visible = false;
            dispatch('btnClick');
          }}
        >
          {btnText}
        </button>
      {/if}
      {#if iconBtn}
        <button
          class="btn btn-sm {iconClass} ml-4"
          on:click={() => {
            visible = false;
            dispatch('iconBtnClick');
          }}
        >
       
        </button>
      {/if}
    </div>

  </div>
{/if}
