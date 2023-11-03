<template>
  <keep-alive>
    <div class="app-container">
      <div class="header">
        <input
          type="text"
          v-model="name"
          @keydown="copy($event)"
          ref="hangdudu"
        />
        <input
          type="text"
          v-model="age"
          @keydown="copy($event)"
          ref="hangdudu"
        />
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      name: "hangdudu2",
      age: 20,
    };
  },
  computed: {},

  mounted() {},
  methods: {
    copy(e) {
      console.log(this.name);
      console.log(this.age);
    },
  },
};
</script>

<style lang="scss" scoped></style>
