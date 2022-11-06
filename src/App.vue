<!-- Start a new template and "clean it up" - remove stuff you dont need like in App.vue, delete HelloWorld.vue, delete the logo etc. -->
<!-- Import dragons from src/assets/dragons.js (Data from: https://gist.github.com/tkfu/9819e4ac6d529e225e9fc58b358c3479 ) -->
<!-- Create a childcomponent - DragonComp.vue -->
<!-- Send dragondata from App.vue to DragonComp as a prop -->
<!-- Build a simple dragon template in DragonComp where you show: Name, Skills, Challenge and display the img_url -->
<!-- Create an input field below the dragon with a label:
  <form>
    <label for="betterName">Rename to:</label>
    <input type="text" placeholder="Better name..." id="betterName" required>
    <input type="submit" value="Update name" />
  </form>
-->
<!-- Bind the input to a value in props -->

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
