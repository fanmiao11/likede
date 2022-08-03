// 策略管理
  import Layout from "@/layout"
export default{
    path: '/strategy',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Strategy',
        component: () => import('@/views/strategy'),
        meta: { title: '策略管理', icon: 'celue' }
      }
    ]
  }