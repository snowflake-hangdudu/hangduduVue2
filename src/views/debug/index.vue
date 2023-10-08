<template>
  <div class="app-container">
    <div class="header">
      <el-button type="primary" @click="exportExcel()">导出</el-button>
    </div>
  </div>
</template>

<script>
import { dataConversionUtil } from "@/utils/exportExcel";
export default {
  data() {
    return {
      // data: [
      //   { name: "阿梅", sex: "女", age: "16" },
      //   { name: "阿三", sex: "男", age: "24" },
      // ],
      // tabelHeader: [["id", "姓名", "性别", "年龄"]],
    };
  },
  mounted() {
    console.log(dataConversionUtil, "dataConversionUtil");
  },
  methods: {
    exportExcel() {
      var data = [
        { name: "阿三", sex: "男", age: "24" },
        { name: "阿梅", sex: "女", age: "16" },
      ];
      var tableHeader = [["序号", "姓名", "性别", "年龄"]];
      var dataList = [];
      data.forEach((item, index) => {
        dataList.push([index + 1, item.name, item.sex, item.age]);
      });
      dataConversionUtil.dataToExcel("人员", tableHeader, dataList);
      this.$message.success("导出成功!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
