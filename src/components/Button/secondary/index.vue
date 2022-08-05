<template>
<!-- 按钮 -->
  <el-button class="search-button">{{title}}</el-button>
  
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:['title'],
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.el-button {
    align-items: center;
    width: 80px;
    height: 36px;
    padding: 0;
    background-color: #fbf4f0;
    border: none;
    color: #655b56;
}
</style>
