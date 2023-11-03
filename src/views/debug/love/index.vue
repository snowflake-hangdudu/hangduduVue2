<template>
  <div>
    {{ name }}
    {{ age }}
    <el-button @click="pass('sb')">传递信息给父组件</el-button>
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
  methods: {
    pass(p) {
      console.log(p);
      this.$emit("listenPass", p);
    },
  },
};
</script>

<style></style>
