<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <img class="logo-navbar" src="../../assets/img/logo-navbar.png" />

    <div class="right-menu">
      <div class="avatar-wrapper">
        <img :src="userInfo.image" class="user-avatar" />
        <span>欢迎您，{{ userInfo.userName }}</span>
        <span>退出<i class="el-icon-caret-bottom" /></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "userInfo"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background-image: url("~@/assets/img/background-navbar.png");
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .logo-navbar {
    width: 88px;
    margin-top: 10px;
    margin-left: 15px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  // .breadcrumb-container {
  //   float: left;
  // }

  .right-menu {
    float: right;
    width: 240px;
    line-height: 60px;
    margin-right: 24px;
    color: #fff;

    &:focus {
      outline: none;
    }

    .avatar-wrapper {
      display: flex;
      justify-content: space-between;
    }
    // .right-menu-item {
    //   display: inline-block;
    //   padding: 0 8px;
    //   height: 100%;
    //   font-size: 18px;
    //   color: #5a5e66;
    //   vertical-align: text-bottom;

    //   &.hover-effect {
    //     cursor: pointer;
    //     transition: background 0.3s;

    //     &:hover {
    //       background: rgba(0, 0, 0, 0.025);
    //     }
    //   }
    // }

    // .avatar-container {
    //   margin-right: 30px;

    //   .avatar-wrapper {
    //     // margin-top: 5px;
    //     position: relative;

    //     .user-avatar {
    //       cursor: pointer;
    //       width: 40px;
    //       height: 40px;
    //       border-radius: 10px;
    //     }

    //     .el-icon-caret-bottom {
    //       cursor: pointer;
    //       position: absolute;
    //       right: -20px;
    //       top: 25px;
    //       font-size: 12px;
    //     }
    //   }
    // }
  }
}
</style>
