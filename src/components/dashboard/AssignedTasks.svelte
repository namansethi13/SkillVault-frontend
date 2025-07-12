<script lang="ts">
	import TaskDescriptionModal from './TaskDescriptionModal.svelte';
    import { onMount } from "svelte";
    import TaskSubmissionModal from "./TaskSubmissionModal.svelte";
    import { user } from '../../store';
    
    let isviewall : boolean =false;
    let isTaskSubmissionModalOpen : boolean = false;
    let isTaskDescriptionModalOpen : boolean = false;
    let selectedTaskDescription : string = "This is a sample task description.";
    let tasks = {};
    let startDate : Date | null = null;

    user.subscribe((value) => {
        if (value && value.start_date) {
            startDate = new Date(value.start_date);
        }
    });
    $: console.log(tasks);
    let taskId: string = "1";
    $: console.log(taskId);
    $: console.log(tasks);
    let taskModal: TaskSubmissionModal | null = null;
    let taskDescriptionModal: TaskDescriptionModal | null = null;
    function handleviewall(){
        isviewall=!isviewall;  
        
    }

    function openTaskModal(ti : string) {
        isTaskSubmissionModalOpen = true;
        taskModal?.showModal();
        taskId = ti;

    }

    function closeTaskModal() {
        isTaskSubmissionModalOpen = false;
        taskModal?.close();
    }

    function openDescriptionModal(des) {
        selectedTaskDescription = des;
        isTaskDescriptionModalOpen = true;
        taskDescriptionModal?.showModal();
    }

    function getDeadline(numberofdays: number) {
        const deadline = new Date(startDate);
        deadline.setDate(deadline.getDate() + numberofdays);
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        return deadline.toLocaleDateString('en-US', options);
    }

    onMount(() => {
        fetch("http://localhost:5000/tasks/taskbydomain", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Important for handling cookies
        })
            .then((response) => response.json())
            .then((data) => {
                tasks = data.tasks.tasks;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

</script>

{#if isTaskSubmissionModalOpen}
    <TaskSubmissionModal taskId={taskId} bind:this={taskModal}
    on:close={() => (isTaskSubmissionModalOpen = false)}
    
    />
{/if}
{#if isTaskDescriptionModalOpen}
    <TaskDescriptionModal description={selectedTaskDescription}
    bind:this={taskDescriptionModal}
    on:close={() => (isTaskDescriptionModalOpen = false)}  
    />
{/if}
<div class="bg-[#D9D9D9] w-full h-full">
    <div id="main" class="flex flex-col justify-end  bg-[#3461FF] md:h-60 h-40 ">
        <p class="md:text-white text-white font-medium md:font-semibold md:text-5xl text-2xl bottom-0 font-sans pb-1">Web Development Intern</p>
        <p class="md:text-white text-white font-normal md:font-medium md:text-4xl text-2xl  bottom-0 font-sans pb-2">(August-September 2024)</p>
    

    </div>
    <div class="flex flex-row bg-[#D9D9D9] h-[28.8rem]">
        <div class="bg-[#F3E4CF] border border-black w-full h-full">
            {#each Object.keys(tasks) as task}
            <div class="flex items-center justify-between bg-[#B4D2BD] border border-gray-300 rounded-lg shadow-sm h-20 md:h-28 w-full px-4 mb-3 transition hover:shadow-lg">
                <div class="flex items-center space-x-4 h-full">
                    <i class="fa-regular fa-clipboard text-blue-600 text-3xl md:text-5xl"></i>
                    <div class="flex flex-col justify-center h-full">
                        <div class="flex flex-col w-full h-full mt-4 md:mt-0">
                            <p
                                class="text-gray-900 font-semibold text-lg md:text-2xl md:mt-10"
                                style="max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                                title={tasks[task].title}
                            >
                                {tasks[task].title}
                            </p>
                            <p class="text-base md:text-lg text-red-500 font-medium md:mt-2">Due: {getDeadline(tasks[task].deadline)}</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <button
                        class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition"
                        on:click={() => openTaskModal(tasks[task].code)}
                        aria-label="Submit Task"
                    >
                        <i class="fa-solid fa-upload text-xl md:text-3xl"></i>
                    </button>
                    <button
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition"
                        on:click={() => openDescriptionModal(tasks[task].description)}
                        aria-label="View Description"
                    >
                        <i class="fa-solid fa-chevron-right text-xl md:text-3xl"></i>
                    </button>
                </div>
            </div>
            {/each}
        </div>
    </div>

</div>




