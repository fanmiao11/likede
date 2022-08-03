// 设备管理
import Layout from "@/layout";
export default {
  path: "/device",
  component: Layout,
  redirect: "/device/devmanage",
  name: "Device",
  meta: { title: "设备管理", icon: "shebei" },
  children: [
    {
      path: "devmanage",
      name: "Devmanage",
      component: () => import("@/views/device/devmanage"),
      meta: { title: "设备管理" },
    },
    {
      path: "devstate",
      name: "Devstate",
      component: () => import("@/views/device/devstate"),
      meta: { title: "设备状态" },
    },
    {
      path: "devtypemanage",
      name: "Devtypemanage",
      component: () => import("@/views/device/devtypemanage"),
      meta: { title: "设备类型管理" },
    },
  ],
};