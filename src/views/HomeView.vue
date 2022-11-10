<template>
  <div class="wrapper">
    <h1>Welcome home!</h1>
    <div class="cols">
      <DragonComp
        @updateName="updateName"
        v-for="dragon in dragons"
        :key="dragon.name"
        :dragon="dragon"
      ></DragonComp>
    </div>
  </div>
</template>

<script>
import DragonComp from "@/components/DragonComp.vue";
export default {
  name: "HomeView",
  props: {
    dragons: Array,
  },
  components: {DragonComp},
  methods: {
    updateName(oldName, newName) {
      this.$emit("updateName", oldName, newName);
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.cols {
  max-width: 1200px;
  margin: 1rem auto;
}

@media screen and (min-width: 800px) {
  .cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
@media screen and (min-width: 1000px) {
  .cols {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
