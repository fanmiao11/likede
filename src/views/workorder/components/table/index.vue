<template>
  <div>
    <div class="result">
      <el-card>
        <!-- 按钮 -->
        <div class="operation">
          <add-button />
          <sec-button title="工单配置" />
        </div>
        <!-- 表格 -->
        <div class="table">
          <el-table
            highlight-current-row
            :data="tableData.currentPageRecords"
            style="width: 100%"
          >
            <el-table-column type="index" label="序号" width="">
            </el-table-column>
            <el-table-column prop="taskCode" label="工单编号" width="">
            </el-table-column>
            <el-table-column prop="innerCode" label="设备编号" width="">
            </el-table-column>
            <el-table-column
              prop="taskType.typeId"
              :formatter="taskType"
              label="工单类型"
              width=""
            >
            </el-table-column>
            <el-table-column
              prop="createType"
              :formatter="createType"
              label="工单方式"
              width=""
            >
            </el-table-column>
            <el-table-column
              prop="taskStatus"
              :formatter="taskStatus"
              label="工单状态"
              width=""
            >
            </el-table-column>
            <el-table-column prop="userName" label="运营人员">
            </el-table-column>
            <el-table-column
              prop="createTime"
              :formatter="createTime"
              label="创建日期"
            >
            </el-table-column>
            <el-table-column label="操作" width="">
              <slot><span :style="{ color: '#5f84ff' }">查看详情</span></slot>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination layout="slot" :total="Number(tableData.totalCount)">
            <slot>
              <div class="text">
                共{{ tableData.totalCount }} 条记录 第{{
                  tableData.pageIndex
                }}/{{ tableData.totalPage }}页
              </div>
              <div class="button">
                <el-button
                  @click="$emit('prePage', tableData.pageIndex)"
                  :disabled="tableData.pageIndex === '1'"
                  >上一页</el-button
                >
                <el-button
                  @click="$emit('nextPage', tableData.pageIndex)"
                  :disabled="tableData.pageIndex === tableData.totalPage"
                  >下一页</el-button
                >
              </div>
            </slot>
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   tableData: [],
    };
  },
  props: {
    tableData: {
      type: Object,
    },
  },

  created() {},

  methods: {
    // 格式化表格数据
    taskType(row, column, cellValue, index) {
      return ["投放工单", "补货工单", "维修工单", "撤机工单"][cellValue - 1];
    },
    createType(row, column, cellValue, index) {
      return { 0: "自动", 1: "手动" }[cellValue];
    },
    taskStatus(row, column, cellValue, index) {
      return { 1: "待办", 2: "进行", 3: "取消", 4: "完成" }[cellValue];
    },
    createTime(row, column, cellValue, index) {
      return cellValue.replace(/T/g, " ").replace(/-/g, ".");
    },
  },
  computed: {
    // predisabled(){
    //     if(this.tableData.pageIndex==='1'){
    //         return true
    //     }else{
    //         return false
    //     }
    // },
    // nextdisabled(){
    //     if(this.tableData.pageIndex===this.tableData.totalPage){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
  },
};
</script>

<style scoped lang="scss">
.el-pagination {
  padding: 2px 5px;
  color: #dbdfe5;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 32px 16px;
  .text {
    flex: 1;
  }
  .button {
    flex: 1;
    text-align: right;
    margin-right: 60px;
    .el-button {
      width: 70px;
      height: 32px;
      margin: 0 16px;
      border-radius: 2px;
      background-color: #d5ddf8;
    }
  }
}
</style>
