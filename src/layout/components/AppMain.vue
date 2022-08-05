<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-width: 1366px;
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
  top: 60px;
  background-color: #f8fafd;
  padding: 20px;
}
/* .fixed-header+.app-main {
  padding-top: 60px;
} */
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
