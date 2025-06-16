<!-- src/pages/CalorieCounter.vue -->
<template>
  <main>
     <div class="container-button">
      <button @click="$router.back()" class="back-button">← Back</button>
     </div>
     <div class="container">  
       <h1>Calorie Counter</h1>
    <p>
      This is a simple calorie counter that allows you to track your daily calorie intake and exercise.
      You can set a daily budget and add entries for meals and exercises. The app will calculate the remaining calories based on your budget, consumed calories, and exercise.</p>


      <form @submit="calculateCalories" id="calorie-counter">
        <label for="budget">Budget</label>
        <input
          type="number"
          min="0"
          v-model="budget"
          placeholder="Daily calorie budget"
          required
        />

        <fieldset v-for="section in sections" :key="section.id" :id="section.id">
          <legend>{{ section.label }}</legend>
          <div class="input-container">
            <div v-for="(entry, index) in entries[section.id]" :key="index">
              <label :for="`${section.id}-${index}-name`">Entry {{ index + 1 }} Name</label>
              <input
                type="text"
                v-model="entry.name"
                :id="`${section.id}-${index}-name`"
                placeholder="Name"
              />
              <label :for="`${section.id}-${index}-calories`">Entry {{ index + 1 }} Calories</label>
              <input
                type="number"
                min="0"
                v-model.number="entry.calories"
                :id="`${section.id}-${index}-calories`"
                placeholder="Calories"
              />
            </div>
          </div>
        </fieldset>

        <div class="controls">
          <label for="entry-dropdown">Add food or exercise:</label>
          <select v-model="selectedSection" id="entry-dropdown">
            <option v-for="section in sections" :key="section.id" :value="section.id">
              {{ section.label }}
            </option>
          </select>
          <button type="button" @click="addEntry">Add Entry</button>
        </div>

        <div>
          <button type="submit">Calculate Remaining Calories</button>
          <button type="button" @click="clearAll">Clear</button>
        </div>
      </form>

      <div v-if="showOutput" class="output">
        <span :class="resultClass">{{ Math.abs(remainingCalories) }} Calorie {{ resultLabel }}</span>
        <hr />
        <p><strong>Budget:</strong> {{ budget }} cal</p>
        <p><strong>Consumed:</strong> {{ consumedCalories }} cal</p>
        <p><strong>Exercise:</strong> {{ totalExercise }} cal</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const budget = ref(0)
const selectedSection = ref('breakfast')
const showOutput = ref(false)
const sections = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'exercise', label: 'Exercise' }
]

const entries = ref({
  breakfast: [],
  lunch: [],
  dinner: [],
  snacks: [],
  exercise: []
})

const addEntry = () => {
  entries.value[selectedSection.value].push({ name: '', calories: 0 })
}

const clearAll = () => {
  budget.value = 0
  showOutput.value = false
  for (const key in entries.value) {
    entries.value[key] = []
  }
}

const getCalories = (section) => {
  return entries.value[section].reduce((sum, entry) => sum + (parseInt(entry.calories) || 0), 0)
}

const totalExercise = computed(() => getCalories('exercise'))
const consumedCalories = computed(() =>
  getCalories('breakfast') +
  getCalories('lunch') +
  getCalories('dinner') +
  getCalories('snacks')
)

const remainingCalories = computed(() =>
  budget.value - consumedCalories.value + totalExercise.value
)

const resultLabel = computed(() => remainingCalories.value >= 0 ? 'Surplus' : 'Deficit')
const resultClass = computed(() => resultLabel.value.toLowerCase())

const calculateCalories = (e) => {
  e.preventDefault()
  showOutput.value = true
}
</script>

<style scoped>
main {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #000000;
}
.container {
  margin-top: 5rem;
  padding: 5px;
  color: red;
  background-color: #000000;
}
.output {
  margin-top: 1rem;
}
.surplus {
  color: green;
}
.deficit {
  color: red;
}
.container-button {
text-align: center;
  padding: 5rem;
  margin: 2rem;
}
.back-button {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4404f4;
  border: 1px solid #ec0000;
  cursor: pointer;
}

</style>
