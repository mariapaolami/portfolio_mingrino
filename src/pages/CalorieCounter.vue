<!-- src/components/CalorieCounter.vue -->
<template>
  <main>
     <button @click="$router.back()" class="back-button">← Back</button>
    <h1>Calorie Counter</h1>
    <div class="container">
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
.container {
  margin-top: 1rem;
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
</style>
