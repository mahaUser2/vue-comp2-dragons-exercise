<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/addDragon">Add dragon</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView
      v-slot="{Component}"
      :dragons="dragons"
      @updateName="updateName"
      @addDragon="addDragon"
    >
      <keep-alive> <component :is="Component" /> </keep-alive
    ></RouterView>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    dragons: Array,
  },
  methods: {
    addDragon(newDragon) {
      this.$emit("addDragon", newDragon);
    },
    updateName(oldName, newName) {
      this.$emit("updateName", oldName, newName);
    },
  },
};
</script>

<style scoped>
nav {
  background-color: rgb(223, 100, 100);
}

ul {
  display: flex;
  list-style: none;
  padding: 2rem;
  margin: 0;
  justify-content: end;
}

a {
  color: white;
  display: block;
  padding: 0.5rem;
}
</style>
