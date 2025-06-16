<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Gioco del Burraco (demo semplificata)</h1>

    <div class="mb-4">
      <button @click="startGame" class="btn">Inizia Nuova Partita</button>
    </div>

    <div v-if="playerHand.length">
      <h2 class="text-lg font-semibold">Le tue carte:</h2>
      <div class="flex flex-wrap gap-2 mt-2">
        <div
          v-for="(card, index) in playerHand"
          :key="index"
          class="card"
        >
          {{ card }}
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button @click="drawCard" class="btn">Pesca Carta</button>
    </div>

    <div class="mt-4">
      <h3 class="font-semibold">Mazzo rimanente: {{ deck.length }} carte</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const suits = ['♠️', '♥️', '♦️', '♣️']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const deck = ref([])
const playerHand = ref([])

function createDeck() {
  const newDeck = []
  for (let i = 0; i < 2; i++) {
    for (const suit of suits) {
      for (const rank of ranks) {
        newDeck.push(`${rank}${suit}`)
      }
    }
  }
  return shuffle(newDeck)
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

function startGame() {
  deck.value = createDeck()
  playerHand.value = deck.value.splice(0, 11) // In Burraco, 11 carte iniziali
}

function drawCard() {
  if (deck.value.length > 0) {
    playerHand.value.push(deck.value.shift())
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
}
.btn {
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
}
</style>
