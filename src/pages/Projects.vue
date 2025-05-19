<template>
  <div>
    <Navbar />
    <h1 id="projects">All My projects</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
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

  applyTypeIt("#projects", (instance) => {
    instance
      .delete(23, { instant: true })
      .type("A")
      .pause(144)
      .type("l")
      .pause(156)
      .type("l")
      .pause(280)
      .type(" ")
      .pause(249)
      .type("m")
      .pause(221)
      .type("y")
      .pause(1153)
      .delete(1)
      .pause(517)
      .delete(1)
      .pause(30)
      .delete(1)
      .pause(31)
      .delete(1)
      .pause(29)
      .delete(1)
      .pause(30)
      .delete(1)
      .pause(3215)
      .type("a")
      .pause(235)
      .type("l")
      .pause(179)
      .type("l")
      .pause(130)
      .type(" ")
      .pause(185)
      .type("m")
      .pause(295)
      .type("y")
      .pause(291)
      .type(" ")
      .pause(349)
      .type("p")
      .pause(147)
      .type("r")
      .pause(99)
      .type("o")
      .pause(235)
      .type("j")
      .pause(116)
      .type("e")
      .pause(384)
      .type("c")
      .pause(251)
      .type("t")
      .pause(276)
      .type("s");
  })
})
</script>

<style scoped>

</style>
