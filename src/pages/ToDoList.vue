<template>
  <div class="todo-app">
    <button @click="$router.back()" class="back-button">← Back</button>
    <h1>Ma To-Do List</h1>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Ajouter une tâche"
    />
    <button @click="addTask">Ajouter</button>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" />

        <span
          v-if="!task.editing"
          :class="{ done: task.done }"
          @dblclick="editTask(index)"
        >
          {{ task.text }}
        </span>

        <input
          v-else
          v-model="task.text"
          @keyup.enter="saveTask(index)"
          @blur="saveTask(index)"
        />

        <button @click="removeTask(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const newTask = ref("");
const tasks = ref([]);

onMounted(() => {
  const storedTasks = localStorage.getItem("vue-tasks");
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
});

watch(
  tasks,
  (newVal) => {
    localStorage.setItem("vue-tasks", JSON.stringify(newVal));
  },
  { deep: true }
);

function addTask() {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ text: newTask.value, done: false, editing: false });
    newTask.value = "";
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}

function editTask(index) {
  tasks.value[index].editing = true;
}

function saveTask(index) {
  const task = tasks.value[index];
  if (task.text.trim() === "") {
    removeTask(index);
  } else {
    task.editing = false;
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 10px;
  background: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.todo-app h1 {
  text-align: center;
  color: #333;
}

.todo-app input[type="text"] {
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.todo-app button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.todo-app button:hover {
  background-color: #369870;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}

li input[type="checkbox"] {
  margin-right: 10px;
}

li input[type="text"] {
  flex: 1;
  margin-right: 10px;
  padding: 5px;
}

.done {
  text-decoration: line-through;
  color: gray;
  cursor: pointer;
}
</style>
