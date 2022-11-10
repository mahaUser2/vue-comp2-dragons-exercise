<template>
  <keep-alive>
    <TheHeader
      :dragons="dragons"
      @updateName="updateName"
      @addDragon="addDragon"
    ></TheHeader>
  </keep-alive>
  <div></div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import dragons from "@/assets/dragons";
export default {
  name: "App",
  components: {TheHeader},
  data() {
    return {
      dragons,
    };
  },
  methods: {
    addDragon(newDragon) {
      this.dragons.unshift(newDragon);
    },
    updateName(oldName, newName) {
      this.dragons.forEach((dragon) => {
        if (dragon.name === oldName) {
          dragon.name = newName;
        }
      });
    },
  },
};
</script>

<style></style>
