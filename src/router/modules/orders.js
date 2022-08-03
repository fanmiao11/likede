// 订单管理
import Layout from "@/layout";
export default {
  path: "/orders",
  component: Layout,
  children: [
    {
      path: "index",
      name: "Orders",
      component: () => import("@/views/orders"),
      meta: { title: "订单管理", icon: "dingdan" },
    },
  ],
};
