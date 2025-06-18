<template>
  <div class="container">
    <button @click="$router.back()" class="back-button">← Back</button>
    <h1>Magic Ball</h1>
    <div class="ball">
      <h2>Write your question here!</h2>
      <input v-model="question" type="text" placeholder="Ask your question" />
      <button @click="ask">Ask!</button>
      <p v-if="answer">{{ answer }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const question = ref('')
const answer = ref('')

function ask() {
  if (!question.value.trim()) {
    answer.value = 'Please ask a question!'
    return
  }

  const responses = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes'
  ]

  const randomIndex = Math.floor(Math.random() * responses.length)
  answer.value = `The Magic Eight Ball's answer is: ${responses[randomIndex]}`
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  font-family: 'Orbitron', Arial, sans-serif;
}

.back-button {
  align-self: flex-start;
  margin: 20px 0 0 20px;
  background: #fff;
  color: #5f03a1;
  border: none;
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 1.1em;
  cursor: pointer;
  box-shadow: 0 2px 8px #8ec5fc44;
  transition: background 0.2s;
}
.back-button:hover {
  background: #daa9fc;
}

h1 {
  text-align: center;
  margin: 10px 0 30px 0;
  color: #fff;
  background: linear-gradient(90deg, #5f03a1 30%, #daa9fc 100%);
  border-radius: 15px;
  padding: 18px 40px;
  box-shadow: 0 2px 16px #5f03a188;
  letter-spacing: 2px;
  font-size: 2.2em;
}

h2 {
margin: 18px 0 10px 0;
  color: #daa9fc;
  font-size: 1.2em;
  text-align: center;
  font-weight: 400;
  border-radius: 50%;
}

.ball {
  color: aliceblue;
  background: radial-gradient(circle at 30% 30%, #222 70%, #000 100%);
  border: 8px solid #5f03a1;
  border-radius: 50%;
  width: 350px;
  min-height: 350px;
  box-shadow: 0 8px 40px #5f03a199;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 40px 30px 80px 30px;
  margin-bottom: 30px;
  overflow: hidden;
}

.shine {
  position: absolute;
  top: 40px;
  left: 60px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #fff8 60%, transparent 100%);
  border-radius: 50%;
  opacity: 0.7;
  pointer-events: none;
  filter: blur(2px);
}

input {
  margin-top: 20px;
  padding: 10px;
  width: 80%;
  border-radius: 8px;
  font-size: 1em;
  border: none;
  background: #fff;
  color: #5f03a1;
  box-shadow: 0 2px 8px #daa9fc44;
  outline: none;
  transition: box-shadow 0.2s;
}
input:focus {
  box-shadow: 0 2px 16px #daa9fc88;
}

button {
  margin-top: 18px;
  padding: 10px 28px;
  background: linear-gradient(90deg, #daa9fc 60%, #5f03a1 100%);
  border: none;
  color: #fff;
  font-size: 1.1em;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 8px #5f03a144;
  transition: background 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #c897f7 60%, #4c1d7a 100%);
}

.answer {
  color: #5f03a1;
  background: #fff;
  border: 2px solid #daa9fc;
  padding: 16px 18px;
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2em;
  max-width: 80%;
  border-radius: 12px;
  box-shadow: 0 2px 12px #daa9fc55;
  animation: pop 0.4s;
}

@keyframes pop {
  0% { transform: translateX(-50%) scale(0.7); opacity: 0; }
  80% { transform: translateX(-50%) scale(1.1); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>