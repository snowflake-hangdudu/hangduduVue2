<template>
  <div class="app-container">
    <div class="search">
      <div class="search-input">
        <el-input> </el-input>
      </div>
      <!-- <div class="search-input">
          <el-input></el-input>
        </div>
         <div class="search-input">
          <el-input></el-input>
        </div> -->
      <div class="search-select">
        <el-select></el-select>
      </div>
    </div>
    <div class="container">
      <div class="container1">
        <div class="left-half">姓名</div>
        <div class="right-half">
          <el-input> </el-input>
        </div>
      </div>
      <div class="line"></div>
      <div class="container2">
        <div class="left-half">姓名</div>
        <div class="right-half">
          <el-input> </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-container {
  .search {
    display: flex;
    flex-wrap: wrap;

    .search-input {
      // flex: none;
      padding: 10px;
    }

    .search-select {
      flex: 0 0 500px;
      padding: 10px;
    }
  }

  .container {
    display: flex;

    .container1 {
      display: flex;
      width: 50%;
      background-color: aqua;
      padding: 10px;

      .left-half {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: pink;
        padding-right: 10px;
        flex-wrap: nowrap;
      }

      .right-half {
        background-color: yellow;
        flex-grow: 1;
      }
    }
    .line {
      border: 1px solid red;
    }

    .container2 {
      display: flex;
      width: 50%;
      background-color: rgb(127, 54, 243);
      padding: 10px;

      .left-half {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: pink;
        padding-right: 10px;
        flex-wrap: nowrap;
      }

      .right-half {
        background-color: yellow;
        flex-grow: 1;
      }
    }
  }
}
</style>
