<template>
  <main>
    <div class="container">
        <button @click="$router.back()" class="back-button">← Back</button>
      <h1>Decimal to binary converter</h1>
      <input
        v-model="numberInput"
        type="number"
        min="0"
        placeholder="Inserisci un numero decimale"
      />
      <button @click="checkUserInput">Convert</button>
      <div v-if="result !== ''" class="result">
        Risult: <strong>{{ result }}</strong>
      </div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const numberInput = ref('')
const result = ref('')
const error = ref('')

function checkUserInput() {
  error.value = ''
  const n = parseInt(numberInput.value)
  if (!isNaN(n) && n >= 0) {
    result.value = n.toString(2)
  } else {
    result.value = ''
    error.value = 'Inserisci un numero decimale valido (>= 0)'
  }
}
</script>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
}

.container {
  background: rgba(0,0,0,0.8);
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
  color: #fff;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

input[type="number"] {
  width: 80%;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #888;
  background: #333;
  color: #fff;
}

button {
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  border: none;
  background: #1976d2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
}

button:hover {
  background: #1565c0;
}

.result {
  margin-top: 1rem;
  font-size: 1.2em;
  color: #4caf50;
}

.error {
  margin-top: 1rem;
  color: #ff5252;
  font-size: 1em;
}
</style>