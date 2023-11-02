<template>
  <div>
    {{ name }}
    {{ age }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String, //类型
      required: true, //必要性
      default: "SS", //默认值
    },
    age: {
      type: Number,
      require: true,
      default: 20,
    },
  },
};
</script>

<style></style>
