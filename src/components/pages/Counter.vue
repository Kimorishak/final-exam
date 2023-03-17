<template>
  <div class="kim">
    <center>
      <h1>Counter Page</h1>
      <div>
        <router-link :to="{ path: '/' }">home </router-link>
      </div>
      <div class="tob">
        <h1>Counter:{{ counter }}</h1>
        <button @click="increment">Increment</button>
        <button @click="reset">Reset</button>
        <button @click="decrement">Decrement</button>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    reset() {
      this.$store.dispatch("reset");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
  },
};
</script>

<style></style>
