<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      label-position="left"
    >
      <!-- 表单头 帝可得logo -->
      <div class="title-container">
        <img class="login-logo" src="../../assets/img/logo.png" />
      </div>
      <!-- 表单内容 -->
      <!-- 用户名 -->
      <el-form-item prop="username">
        <!-- 左侧图标 -->
        <span class="svg-container">
          <i class="el-icon-mobile-phone"></i>
        </span>
        <!-- 输入框 -->
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入账号"
          name="username"
          type="text"
          tabindex="1"
        />
        <!-- auto-complete="off" -->
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="yanzhengma">
        <span class="svg-container">
          <svg-icon icon-class="yanzhengma" />
        </span>
        <el-input
          v-model="loginForm.yanzhengma"
          type="text"
          placeholder="请输入验证码"
          name="yanzhengma"
          tabindex="3"
          @keyup.enter="handleLogin"
        />
        <img :src="pic" @click="getimageCode()" />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
// import { validUsername } from "@/utils/validate";
import { getimageCode } from "@/api";

export default {
  name: "Login",
  data() {
    return {
      // 登录表单
      loginForm: {
        username: "admin",
        password: "admin",
        yanzhengma: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          // {
          //   pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
          //   message: '手机号格式不正确',
          //   trigger: 'blur'
          // }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        yanzhengma: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },

      loading: false,
      passwordType: "password", //判断密码框尾部图标
      redirect: undefined,
      pic: "",
      clientToken:Math.floor(Math.random()*1024)
    };
  },
  // watch: {
  //   $route: {
  //     handler: function (route) {
  //       this.redirect = route.query && route.query.redirect;
  //     },
  //     immediate: true,
  //   },
  // },
  created() {
    this.getimageCode();
  },
  methods: {
    // 密码框尾部图标
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      // this.$nextTick(() => {
      //   this.$refs.password.focus();
      // });
    },
    // 获取验证码
    async getimageCode() {
      try {
        const res = await getimageCode(this.clientToken);
        // console.log(res);
        this.pic = window.URL.createObjectURL(res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async handleLogin() {
      console.log("click登录");
      // this.$refs.loginForm.validate((a,b)=>{
      //   // a 验证是否通过   b未通过的验证字段
      //   console.log(a);
      //   console.log(b);
      // })
      try {
        await this.$refs.loginForm.validate();
        // 验证通过
        this.$store.dispatch("user/login", {
          "clientToken": this.clientToken,
          "code": this.loginForm.yanzhengma,
          "loginName": this.loginForm.username,
          "loginType": 0,
          "password": this.loginForm.password
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #999 !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url(../../assets/img/background.png) no-repeat;
  background-size: cover;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;

    ::v-deep .el-form-item {
      width: 100%;
      height: 52px;
      margin-bottom: 24px;
      background: #fff;
      border: 1px solid #e2e2e2;
      .el-input input {
        color: #999 !important;
      }
      .el-form-item__content {
        display: flex;
      }
    }
  }
  .el-button--primary {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
    border-color: unset;
  }
  ::v-deep .elcol {
    width: 30px;
    height: 30px;
    background-color: #999;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
