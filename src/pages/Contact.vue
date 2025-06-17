<template>
    <div>
  
      <h1 id="profile"></h1>
      <li>
             <ul>
              <router-link to="./cv">CV</router-link>
             </ul>
    <ul>
      <a href="https://github.com/mariapaolami" target="_blank" rel="noopener" class="diploma-link">
         <img :src="gitHub" alt="githubimg" class="photo" />github</a>
      
    </ul>
        <ul>
      <a href="https://www.freecodecamp.org/MaryGothique" target="_blank" rel="noopener" class="diploma-link">
         <img :src="FCC" alt="FCC" class="photo" />FreeCodeCamp</a>
      
    </ul>
            <ul>
      <a href="https://www.linkedin.com/in/maria-paola-mingrino/" target="_blank" rel="noopener" class="diploma-link">
         <img :src="linkedIn" alt="Linkedin" class="photo" />linkedin </a>
      
    </ul>
      </li>
 
    </div> 
  </template>
  
<script setup>
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

  applyTypeIt("#profile", (instance) => {
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
