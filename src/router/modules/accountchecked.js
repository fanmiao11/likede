// 对账统计
  import Layout from "@/layout";
  export default {
    path: "/accountchecked",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Accountchecked",
        component: () => import("@/views/strategy"),
        meta: { title: "对账统计", icon: "duizhang" },
      },
    ],
  };