<template>
    <div>
  
      <h1 id="Contacts">Contacts</h1>
      <li>
             <ul>
              <router-link to="./Cv">Cv</router-link>
             </ul>
    <ul>
      <a href="https://github.com/mariapaolami" target="_blank" rel="noopener" class="git-link">
         <img :src="gitHub" alt="githubimg" class="photo" /></a>
      
    </ul>
        <ul>
      <a href="https://www.freecodecamp.org/MaryGothique" target="_blank" rel="noopener" class="fcc-link">
         <img :src="FCC" alt="FCC" class="photo" /></a>
      
    </ul>
            <ul>
      <a href="https://www.linkedin.com/in/maria-paola-mingrino/" target="_blank" rel="noopener" class="linkedin-link">
         <img :src="linkedIn" alt="Linkedin" class="photo" /></a>
      
    </ul>
      </li>
<form class="contact-form" @submit.prevent="submitForm">
      <h2>Contact</h2>
      <label>
        Name:
        <input v-model="name" type="text" required />
      </label>
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <label>
        Message:
        <textarea v-model="message" required></textarea>
      </label>
      <button type="submit">Enter</button>
      <p v-if="formSent" class="form-success">Message sent, thank you!</p>
    </form>
    </div> 
  </template>
  
<script setup>
import { ref } from 'vue'
import gitHub from '../assets/GitHub-Mark.png'
import FCC from '../assets/FreeCodeCamp_logo.png'
import linkedIn from '../assets/linked-in.png'
import { onMounted } from 'vue'
import TypeIt from 'typeit'

onMounted(() => {
  const applyTypeIt = (selector, animationFn) => {
    const element = document.querySelector(selector)
    if (element) {
      const instance = new TypeIt(selector, { lifeLike: false, speed: 0 })
      animationFn(instance)
      instance.go()
    }
  }
const name = ref('')
const email = ref('')
const message = ref('')
const formSent = ref(false)

function submitForm() {
  formSent.value = true
  setTimeout(() => {
    formSent.value = false
    name.value = ''
    email.value = ''
    message.value = ''
  }, 3000)
}

  applyTypeIt("#contacts", (instance) => {
    instance
 .delete(6, { instant: true })
      .type("C")
        .pause(200)
        .type("o")
        .pause(150)
        .type("n")
        .pause(100)
        .type("t")
        .pause(200)
        .type("a")
        .pause(150)
        .type("c")
        .pause(100)
        .type("t")
        .pause(200)
        .type("prrrrr")
        .pause(200)
        .delete(6)
        .pause(200)
        .type("S")
    }
  )
})
</script>
<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}
.git-link{
display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.git-link :hover{
  box-shadow: 0 0 10px #4c1d7a,
               0 0 20px #9933ff,
               0 0 30px #9933ff,
               0 0 40px #9933ff, 
               0 0 50px #9933ff,
               0 0 60px #9933ff,
               0 0 70px #9933ff,
               0 0 80px #9933ff,
               0 0 90px #9933ff,
               0 0 100px #9933ff;
}
.fcc-link{
display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.fcc-link img {
  width: 150px;
  height: 100px;
}
.fcc-link :hover{
    box-shadow: 0 0 10px #4c1d7a,
               0 0 20px #9933ff,
               0 0 30px #9933ff,
               0 0 40px #9933ff, 
               0 0 50px #9933ff,
               0 0 60px #9933ff,
               0 0 70px #9933ff,
               0 0 80px #9933ff,
               0 0 90px #9933ff,
               0 0 100px #9933ff;
}

.linkedin-link img{
  display: flex;
  align-items: center;
  width: 150px;
  height: 100px;
}
.linkedin-link :hover{
    box-shadow: 0 0 10px #4c1d7a,
               0 0 20px #9933ff,
               0 0 30px #9933ff,
               0 0 40px #9933ff, 
               0 0 50px #9933ff,
               0 0 60px #9933ff,
               0 0 70px #9933ff,
               0 0 80px #9933ff,
               0 0 90px #9933ff,
               0 0 100px #9933ff;
}
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}

.contact-form {
  background: #222;
  border-radius: 12px;
  padding: 24px 18px;
  max-width: 400px;
  margin: 32px auto 0 auto;
  box-shadow: 0 2px 16px #9933ff55;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.contact-form h2 {
  color: #daa9fc;
  margin-bottom: 10px;
  text-align: center;
}
.contact-form label {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1em;
}
.contact-form input,
.contact-form textarea {
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 1em;
  margin-top: 2px;
  background: #fff;
  color: #5f03a1;
  resize: vertical;
}
.contact-form button {
  background: linear-gradient(90deg, #daa9fc 60%, #5f03a1 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 8px;
  font-weight: bold;
  transition: background 0.2s;
}
.contact-form button:hover {
  background: linear-gradient(90deg, #c897f7 60%, #4c1d7a 100%);
}
.form-success {
  color: #5f03a1;
  background: #fff;
  border: 2px solid #daa9fc;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  margin-top: 10px;
}
</style>