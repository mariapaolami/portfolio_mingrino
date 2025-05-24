<template>
<button @click="$router.back()" class="back-button">← Back</button>
  <div class="container">
     
    <h1>Magic Eight Ball</h1>
    <div class="ball">
      <h2>Write your question here!</h2>
      <input v-model="question" type="text" placeholder="Ask your question" />
      <button @click="ask">Ask!</button>
      <p v-if="answer">{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagicEightBall',
  data() {
    return {
      question: '',
      answer: ''
    };
  },
  methods: {
    ask() {
      if (!this.question.trim()) {
        this.answer = 'Please ask a question!';
        return;
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
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      this.answer = `The Magic Eight Ball's answer is: ${responses[randomIndex]}`;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e0c3fc, #8ec5fc);
  font-family: Arial, sans-serif;
}

h1 {
  height: 100px;
  text-align: center;
  margin: 5px;
  color: #5f03a1;
  background-color: #daa9fc;
  border-style: double;
  border-color: #5f03a1;
  border-width: 2px;
  padding: 20px;
  border-radius: 15px;
}

h2 {
  margin: 20px;
  color: #daa9fc;
  font-size: 1.2em;
  text-align: center;
}

.ball {
  color: aliceblue;
  text-align: center;
  height: 400px;
  width: 400px;
  background-color: #000000;
  border-style: double;
  border-color: #5f03a1;
  border-width: 10px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

input {
  margin-top: 20px;
  padding: 10px;
  width: 70%;
  border-radius: 5px;
  font-size: 1em;
  border: none;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #daa9fc;
  border: none;
  color: #5f03a1;
  font-size: 1.1em;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c897f7;
}

p {
  color: #5f03a1;
  background-color: #daa9fc;
  border-style: double;
  border-color: #5f03a1;
  border-width: 2px;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2em;
  max-width: 80%;
  border-radius: 10px;
}
</style>
