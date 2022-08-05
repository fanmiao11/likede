// 工单管理
import Layout from "@/layout"
export default {
  path: "/task",
  component: Layout,
  redirect: "/task/business",
  name: "Task",
  meta: { title: "工单管理", icon: "gongdan" },
  children: [
    {
      path: "business",
      name: "Business",
      component: () => import("@/views/workorder/operating/index.vue"),
      meta: { title: "运营工单" },
    },
    {
      path: "operation",
      name: "Operation",
      component: () => import("@/views/workorder/operations/index.vue"),
      meta: { title: "运维工单" },
    },
  ],
};
