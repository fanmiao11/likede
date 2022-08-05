<template>
  <!-- 区域管理 -->
  <div>
    <!-- 区域搜索 -->
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="区域搜索：">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 渲染数据 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },

  created() {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped></style>
