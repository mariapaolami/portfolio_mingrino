<template>
  <nav id="navbar" class="desktop-navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/social">Social</router-link></li>
    </ul>
  </nav>
  <div class="mobile-navbar">
    <Slide>
      <a id="home" href="#">
        <span><router-link to="/">Home</router-link></span>
        <span><router-link to="/Projects">Projects</router-link></span>
        <span><router-link to="/contact">Contact</router-link></span>
        <span><router-link to="/social">Social</router-link></span>
      </a>
    </Slide>
  </div>
</template>
<script setup>
import { Slide } from 'vue3-burger-menu'


</script>

<style>
#navbar {
  background-color: #333;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

#navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

#navbar a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

#navbar a:hover {
  text-decoration: underline;
}
 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: block;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>