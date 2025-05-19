<template>
  <nav id="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// Logica opzionale per il navbar
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
</style>