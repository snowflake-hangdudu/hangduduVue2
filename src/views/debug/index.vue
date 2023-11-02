<template>
  <div class="app-container">
    <div class="header">
      <input
        type="text"
        v-model="name"
        @keydown="copy($event)"
        ref="hangdudu"
      />
      <Love :name="name" :age="age + 1"></Love>
    </div>
  </div>
</template>

<script>
import Love from "./love";
export default {
  data() {
    return {
      name: "hangdudu",
      age: 20,
    };
  },
  components: {
    Love,
  },
  mounted() {},
  methods: {
    copy(e) {
      let data = new Date();
      console.log(data.toLocaleString());
      console.log(this.$refs);
      console.log(this.$refs.hangdudu);
    },
  },
};
</script>

<style lang="scss" scoped></style>
