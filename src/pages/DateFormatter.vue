<template>
  <main>
       <div class="container-button">
      <button @click="$router.back()" class="back-button">← Back</button>
     </div>
    <div class="title-container">
      <h1 class="title">Today's Date</h1>
      <!-- SVG calendario -->
      <CalendarIcon />
    </div>

    <div class="divider"></div>

    <div class="dropdown-container">
      <select v-model="selectedFormat">
        <option value="dd-mm-yyyy">Day, Month, Year</option>
        <option value="yyyy-mm-dd">Year, Month, Day</option>
        <option value="mm-dd-yyyy-h-mm">Month, Day, Year, Hours, Minutes</option>
      </select>
      <div class="select-icon">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="25" height="35" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </div>

    <p id="current-date">{{ formattedDate }}</p>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

import CalendarIcon from '../components/CalendarIcon.vue'


const selectedFormat = ref('dd-mm-yyyy')

const now = new Date()
const day = now.getDate()
const month = now.getMonth() + 1
const year = now.getFullYear()
const hours = String(now.getHours()).padStart(2, '0')
const minutes = String(now.getMinutes()).padStart(2, '0')

const formattedDate = computed(() => {
  switch (selectedFormat.value) {
    case 'yyyy-mm-dd':
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    case 'mm-dd-yyyy-h-mm':
      return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}-${year} ${hours}:${minutes}`
    default:
      return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`
  }
})
</script>

<style scoped>
/* Prendi pure il tuo file CSS styles.css e incollalo qui */
.title {
  font-size: 2rem;
  font-weight: bold;
}
.divider {
  height: 2px;
  background-color: #ccc;
  margin: 1rem 0;
}
.dropdown-container {
  position: relative;
  display: flex;
  align-items: center;
}
select {
  padding: 0.5rem;
  font-size: 1rem;
}
.select-icon {
  margin-left: -30px;
  pointer-events: none;
}
#current-date {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
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
@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }
}

</style>
