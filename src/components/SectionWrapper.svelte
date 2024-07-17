<script>
    export let id;
    export let isheader;
</script>

<section {id} class="md:min-h-screen lg:min-h-screen min-h-screen flex flex-col px-2 {isheader ? "bg-hero bg-cover bg-center bg-no-repeat" : ""}  " >
    <div class="flex flex-col flex-1 max-w-[1920px] mx-auto w-full ">
        <slot/>

    </div>

</section>