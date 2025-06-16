// Navbar.vue
<template>
  <nav id="navbar">
    <div class="burger" @click="toggleMenu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </div>
    <ul class="desktop">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <transition name="slide">
      <ul class="mobile" v-if="isMenuOpen">
        <li v-for="(link, i) in links" :key="i">
          <router-link :to="link.to" @click="closeMenu">{{ link.label }}</router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];
</script>

<style scoped>
#navbar {
  background-color: #333;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
}

#navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  
}
.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-left: 20px;
}

.burger span {
  width: 25px;
  height: 3px;
  transition: all 0.3s ease;
  background-color: #ffffff;
}

.burger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);

}

ul.mobile {

position: fixed;
  width: 200px;
  flex-direction: column;
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

ul.mobile li {
  padding: 10px;
  text-align: center;
}

ul.mobile li a {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .burger {
    display: flex;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  color: white;
}
</style>