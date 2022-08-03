import Vue from "vue";
import Router from "vue-router";
import workorder from './modules/workorder'
import strategy from "./modules/strategy"
import pointlocation from "./modules/pointlocation"
import personnel from "./modules/personnel"
import orders from "./modules/orders"
import goods from "./modules/goods"
import device from './modules/device'
import accountchecked from "./modules/accountchecked"



Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 登录页面
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  // 404页面
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  //home
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index"),
        meta: { title: "帝可得", icon: "shouye" },
      },
    ],
  },
 

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

// 动态路由

export const asyncRoutes = [
  workorder,
  pointlocation,
  device,
  personnel,
  goods,
  strategy,
  orders,
  accountchecked
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    // 合并静态路由和动态路由
    routes: [...constantRoutes, ...asyncRoutes],
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
