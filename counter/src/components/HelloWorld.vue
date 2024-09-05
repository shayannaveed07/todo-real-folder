<template>
  <div class="hello">
    <h1>Count is : {{ count }}</h1>
    <button class="increaseCount" @click="lc_increaseCount(1)">+</button>
    <button class="decreseCount" @click="lc_decreaseCount(1)">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      incrementFactor: 3000,
    };
  },
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    ...mapActions(["increaseCount", "decreaseCount"]),
    lc_increaseCount(arg) {
      this.increaseCount(this.incrementFactor);
    },
    lc_decreaseCount(arg) {
      this.decreaseCount(2000);
    },
  },
};
</script>

<style scoped>
.increaseCount {
  margin-right: 10px;
}
button {
  padding: 5px 10px;
}
</style>
