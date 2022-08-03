// 商品管理
import Layout from "@/layout";
export default {
  path: "/goods",
  component: Layout,
  redirect: "/goods/goodstype",
  name: "Goods",
  meta: { title: "商品管理", icon: "shangpin" },
  children: [
    {
      path: "goodstype",
      name: "Goodstype",
      component: () => import("@/views/goods/goodstype"),
      meta: { title: "商品类型" },
    },
    {
      path: "goodsmanage",
      name: "Goodsmanage",
      component: () => import("@/views/goods/goodsmanage"),
      meta: { title: "商品管理" },
    },
  ],
};