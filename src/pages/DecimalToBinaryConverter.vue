<template>
  <main>
     <button @click="$router.back()" class="back-button">← Back</button>
    <h1>Convertitore Decimale → Binario</h1>
    
    <section class="input-container">
      <label for="number-input">Inserisci un numero decimale:</label>
      <input
        id="number-input"
        v-model="numberInput"
        @keydown.enter="checkUserInput"
        class="number-input"
        type="number"
        min="0"
        placeholder="Es. 5"
      />
      <button class="convert-btn" @click="checkUserInput">Converti</button>
    </section>

    <section class="output-container">
      <div id="result">{{ resultText }}</div>
      <div id="animation-container">
        <transition-group name="fade" tag="div">
<div v-for="(frame, index) in animationFrames" :key="frame.inputVal" class="animation-frame">
  {{ index + 1 }}. {{ frame.msg || `decimalToBinary(${frame.inputVal})` }}
</div>
        </transition-group>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const numberInput = ref("");
const resultText = ref("");
const animationFrames = ref([]);

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) return String(input);
  return decimalToBinary(Math.floor(input / 2)) + (input % 2);
};

const showAnimation = () => {
  resultText.value = "Call Stack Animation";
  animationFrames.value = [];

  const animationData = [
    {
      inputVal: 5,
      msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
      delays: { add: 1000, msg: 15000, remove: 20000 }
    },
    {
      inputVal: 2,
      msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
      delays: { add: 1500, msg: 10000, remove: 15000 }
    },
    {
      inputVal: 1,
      msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
      delays: { add: 2000, msg: 5000, remove: 10000 }
    }
  ];

  animationData.forEach(({ inputVal, msg, delays }) => {
    setTimeout(() => {
      animationFrames.value.push({ inputVal, msg: null });
    }, delays.add);

    setTimeout(() => {
      const frame = animationFrames.value.find(f => f.inputVal === inputVal);
      if (frame) frame.msg = msg;
    }, delays.msg);

    setTimeout(() => {
      animationFrames.value = animationFrames.value.filter(f => f.inputVal !== inputVal);
    }, delays.remove);
  });

  setTimeout(() => {
    resultText.value = decimalToBinary(5);
  }, 20000);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (isNaN(inputInt) || inputInt < 0) {
    alert("Per favore inserisci un numero decimale maggiore o uguale a 0.");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
  } else {
    resultText.value = decimalToBinary(inputInt);
    animationFrames.value = [];
  }

  numberInput.value = "";
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color:pink
}

:root {
  --light-grey: #f5f6f7;
  --dark-blue: #1b1b32;
  --orange: #f1be32;
}

body {
  font-family: Menlo, Consolas, monospace;
  background-color: var(--dark-blue);
  color: var(--light-grey);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: clamp(320px, 50vw, 460px);
  margin-bottom: 1rem;
}

.convert-btn {
  background-color: var(--orange);
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.number-input {
  padding: 0.4rem;
  font-size: 1rem;
}

.output-container {
  width: clamp(320px, 50vw, 460px);
}

#result {
  font-size: 1.5rem;
  border: 2px solid var(--orange);
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 80px;
  border-radius: 4px;
}

#animation-container {
  min-height: 40vh;
  border: 2px dashed var(--orange);
  padding: 1rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

}

.animation-frame {
  padding: 10px;
  border: 2px solid var(--orange);
  font-size: 1.2rem;
  background-color: #f7f4ea11;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
