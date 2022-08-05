<template>
  <!-- 运营工单 -->
  <div>
    <!-- 搜索 -->
    <div class="search">
      <el-card shadow="never">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="工单编号：">
            <el-input v-model="formInline.taskCode" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="工单状态：">
            <el-select v-model="formInline.status" placeholder="请选择">
              <el-option label="待办" value="1"></el-option>
              <el-option label="进行" value="2"></el-option>
              <el-option label="取消" value="3"></el-option>
              <el-option label="完成" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <search-button @click.native="onSubmit" />
            <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <!-- 表格数据 -->
    <tableModel
      :tableData="tableData"
      @prePage="prePage"
      @nextPage="nextPage"
    />
  </div>
</template>

<script>
import { getWorkOrders } from "@/api";
import tableModel from "../components/table";
export default {
  components: {
    tableModel,
  },
  data() {
    return {
      // 搜索模块
      formInline: {
        taskCode: "",
        status: "",
      },
      tableData: {},
    };
  },

  created() {
    this.getWorkOrders();
  },

  methods: {
    async getWorkOrders(params) {
      const res = await getWorkOrders(params);
      console.log(res);
      this.tableData = res;
    },
    // 上一页
    prePage(index) {
      this.getWorkOrders({
        pageIndex:Number(index)-1
      })
    },
    // 下一页
    nextPage(index) {
      this.getWorkOrders({
        pageIndex:Number(index)+1
      })
    },
    onSubmit() {
      console.log(this.formInline);
      this.getWorkOrders({
        ...this.formInline
      })
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  margin-bottom: 20px;
  .el-card {
    border: unset;
    ::v-deep.el-card__body {
      padding: 0px;
    }
  }
}
.result {
  .el-card {
    border: unset;
  }
}
</style>
