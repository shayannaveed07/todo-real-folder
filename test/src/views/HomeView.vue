<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <div class="btn">
      <button class="button" @click="$store.commit('increaseCount')">+</button>
      <button class="button" @click="$store.commit('decreaseCount')">-</button>
    </div>
    <div>
      <input type="text" placeholder="Enter Color Code" v-model="colorCode" />
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  name: "HomeView",
  components: { Counter },
  computed: {
    colorCode: {
      get() {
        return this.$store.state.color;
      },
      set(newVal) {
        this.$store.commit("setColor", newVal);
      },
    },
  },
};
</script>

<style scoped>
.button {
  margin: 0 10px;
  padding: 10px;
}
</style>
