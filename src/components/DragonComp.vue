<template>
  <div class="dragon">
    <h3>{{ dragon.name }}</h3>
    <p>{{ dragon.Skills }}</p>
    <p>{{ dragon.Challenge }}</p>
    <img :src="dragon.img_url" alt="" />
    <hr />

    <form @submit.prevent="updateName">
      <label for="betterName">Rename to:</label>
      <div class="inputs">
        <input
          type="text"
          placeholder="Better name..."
          id="betterName"
          v-model="newName"
          required
        />
        <input type="submit" value="Update name" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "DragonComp",
  props: {
    dragon: Object,
  },
  data() {
    return {
      newName: undefined,
    };
  },
  methods: {
    updateName() {
      this.$emit("updateName", this.dragon.name, this.newName);
    },
  },
};
</script>

<style scoped>
div {
  margin: 1rem auto;
  padding: 1rem;
  border: 2px solid red;
  box-sizing: border-box;
}

.dragon {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  width: 80%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  margin: 10%;
}

.inputs {
  display: flex;
  border: none;
  margin: 5px 0 10px 0;
  padding: 5px 0 10px 0;
  justify-content: center;
}

input[type="text"] {
  border-radius: 6px 0 0 6px;
  border-right: none;
  padding: 10px;
}
input[type="submit"] {
  border-radius: 0 6px 6px 0;
  border-left: none;
  background: rgb(223, 100, 100);
  color: whitesmoke;
  cursor: pointer;
  padding: 10px;
  text-align: center;
}
</style>
