<template>
  <div id="app">
    <Navbar />
    <main class="content">
      <h1 v-if="$route.path === '/'" id="welcome">Welcome!</h1>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
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

  const animations = {
    "#welcome": (instance) => {
      instance
        .delete(6, { instant: true })
        .pause(1100)
        .type("e")
        .pause(150)
        .delete(1)
        .pause(150)
        .delete(1)
        .pause(1100)
        .type("W")
        .pause(150)
        .type("e")
        .pause(100)
        .type("l")
        .pause(100)
        .type("c")
        .pause(85)
        .type("o")
        .pause(100)
        .type("m")
        .pause(90)
        .type(" ")
        .pause(124)
        .delete(1)
        .pause(95)
        .type("e")
        .pause(130)
        .type(" ")
        .pause(280)
        .type("t")
        .pause(145)
        .type("o")
        .pause(129)
        .type(" ")
        .pause(331)
        .type("m")
        .pause(158)
        .type("y")
        .pause(23)
        .type("t")
        .pause(170)
        .delete(1)
        .pause(162)
        .type("y")
        .pause(180)
        .type(" ")
        .pause(121)
        .delete(1)
        .pause(100)
        .delete(1)
        .pause(96)
        .type(" ")
        .pause(159)
        .type("p")
        .pause(100)
        .type("o")
        .pause(100)
        .type("r")
        .pause(500)
        .type("t")
        .pause()
        .type("f")
        .pause(69)
        .type("o")
        .pause(245)
        .type("l")
        .pause(129)
        .type("i")
        .pause(101)
        .type("o")
    },


    "#reseauxSociaux": (instance) => {
      instance
        .type("R")
        .pause(150)
        .type("é")
        .pause(100)
        .type("s")
        .pause(120)
        .type("e")
        .pause(110)
        .type("a")
        .pause(100)
        .type("u")
        .pause(100)
        .type("x")
        .pause(200)
        .type(" ")
        .pause(100)
        .type("S")
        .pause(100)
        .type("o")
        .pause(100)
        .type("c")
        .pause(100)
        .type("i")
        .pause(100)
        .type("a")
        .pause(100)
        .type("u")
        .pause(100)
        .type("x")
    }
  }

  for (const [selector, fn] of Object.entries(animations)) {
    applyTypeIt(selector, fn)
  }
})
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

.content {
  margin-top: 60px; /* offset for fixed navbar */
}
</style>