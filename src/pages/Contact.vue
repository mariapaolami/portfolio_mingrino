<template>
    <div>
       <button @click="$router.back()" class="back-button">← Back</button>
       <button @click="$router.back()" class="back-button">← Back</button>
      <h1 id="profile"></h1>
      <p>work in progress.</p>
    </div> 
  </template>
  
<script setup>
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
