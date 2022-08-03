// 人员管理
import Layout from "@/layout";
export default {
  path: "/personnel",
  component: Layout,
  redirect: "/personnel/list",
  name: "Personnel",
  meta: { title: "人员管理", icon: "renyuan" },
  children: [
    {
      path: "list",
      name: "List",
      component: () => import("@/views/personnel/list"),
      meta: { title: "人员列表" },
    },
    {
      path: "statistical",
      name: "Statistical",
      component: () => import("@/views/personnel/statistical"),
      meta: { title: "人效统计" },
    },
    {
      path: "workload",
      name: "Workload",
      component: () => import("@/views/personnel/workload"),
      meta: { title: "工作量列表" },
    },
  ],
};