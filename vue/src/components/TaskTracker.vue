<script setup>
  import { ref } from "vue"

  const tasks = ref([])
  const error = ref(null)

  function addTask(e) {
    const value = e.target[0].value;
    
    if (value.trim() === "") return error.value = "Task cannot be empty";
    if (error.value) error.value = null;

    tasks.value.push({ 
      id: Date.now(),
      text: e.target[0].value, 
      done: false,
    })

    e.target.reset();
  }

  function toggleDone(index) {
    tasks.value[index].done = !tasks.value[index].done
  }

  function removeTask(index) {
    tasks.value.splice(index, 1)
  }
</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4">Day Task Tracker</h1>

    <form 
      @submit.prevent="addTask" 
      class="
        flex flex-wrap gap-2 
        m-4 p-6
        bg-white shadow-lg 
        w-full max-w-lg rounded-xl
      "
    >
      <input
        type="text"
        placeholder="New task..."
        class="flex-1 border rounded p-2"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
        Add
      </button>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </form>

    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        class="flex items-center justify-between border-b py-2"
      >
        <span :class="{ 'line-through text-gray-400': task.done }">
          {{ task.text }}
        </span>
        <div class="flex gap-2">
          <button 
            @click="toggleDone(index)" 
            class="text-green-600 text-sm cursor-pointer"
          >
            {{ task.done ? "Undo 👈" : "Done ✔️" }}
          </button>
          <button 
            @click="removeTask(index)" 
            class="text-red-600 text-sm cursor-pointer"
          >
            🗑️
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

