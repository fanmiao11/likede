// 工单管理
import Layout from "@/layout"
export default {
  path: "/workorder",
  component: Layout,
  redirect: "/workorder/operating",
  name:'Workorder',
  meta:{ title:'工单管理',icon:'gongdan'},
  children: [
    {
      path: "operating",
      name: "Operating",
      component: () => import("@/views/workorder/operating/index.vue"),
      meta: { title: "运营工单" },
    },
    {
      path: "operations",
      name: "Operations",
      component: () => import("@/views/workorder/operations/index.vue"),
      meta: { title: "运维工单" },
    },
  ],
};
