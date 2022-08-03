// 点位管理
import Layout from "@/layout";
export default {
  path: "/pointlocation",
  component: Layout,
  redirect: "/pointlocation/area",
  name: "Pointlocation",
  meta: { title: "点位管理", icon: "dianwei" },
  children: [
    {
      path: "area",
      name: "Area",
      component: () => import("@/views/pointlocation/area"),
      meta: { title: "区域管理" },
    },
    {
      path: "point",
      name: "Point",
      component: () => import("@/views/pointlocation/point"),
      meta: { title: "点位管理" },
    },
    {
      path: "partners",
      name: "Partners",
      component: () => import("@/views/pointlocation/partners"),
      meta: { title: "合作商管理" },
    },
  ],
};
