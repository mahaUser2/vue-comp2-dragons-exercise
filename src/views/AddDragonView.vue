<template>
  <div>
    <h1>Add dragon here...</h1>
    <form @submit.prevent="addDragon">
      <div class="formHeader">
        <h3>Create dragon here</h3>
      </div>
      <div>
        <label for="name">Dragon name:</label>
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="Name..."
          required
        />
      </div>
      <div>
        <label for="skills">Dragon skills:</label>
        <input
          id="skills"
          type="text"
          v-model="skills"
          placeholder="Skill 1, skill 2, skill 3..."
          required
        />
      </div>
      <div>
        <label for="xp">Dragon xp:</label>
        <input id="xp" type="text" v-model="xp" placeholder="Xp..." required />
      </div>
      <div>
        <label for="image">Dragon image url:</label>
        <input
          id="image"
          type="text"
          v-model="image"
          placeholder="Image url..."
          required
        />
      </div>
      <button>Add dragon</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddDragonView",
  data() {
    return {
      name: null,
      skills: null,
      xp: null,
      image: null,
    };
  },
  methods: {
    addDragon() {
      const newDragon = {
        name: this.name,
        Skills: this.skills,
        Challenge: this.xp,
        img_url: this.image,
      };
      this.$emit("addDragon", newDragon);

      //   Go back to the frontpage
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
form {
  border: 1px solid rgb(223, 100, 100);
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

form h3 {
  color: white;
  text-align: center;
  margin: 0 0 20px 0;
  padding: 1rem 0.5rem;
  background: rgb(223, 100, 100);
}

form div:has(h3) ~ div {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid black;
}

button {
  background: rgb(223, 100, 100);
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  color: white;
  width: 90%;
  margin: 5%;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
