/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const CriticalequipmentRouter = {
  path: '/criticalequipment',
  redirect: '/criticalequipment/GJlianyoubu/lyjiarelu',
  component: Layout,
  name: 'Criticalequipment',
  meta: { title: '关键设备能效监控', icon: 'nested' },
  children: [
    {
      path: 'gjlianyoubu',
      name: 'GJLianyoubu',
      component: () => import('@/views/Criticalequipment/GJLianyoubu/index'), // Parent router-view
      meta: { title: '炼油部' },
      redirect: '/criticalequipment/gjlianyoubu/lyjiarelu',
      children: [
        {
          path: 'lyjiarelu',
          name: 'LYJiarelu',
          component: () => import('@/views/Criticalequipment/GJLianyoubu/LYJiarelu'),
          meta: { title: '加热炉' }
        },
        {
          path: 'lyjingliuta',
          name: 'LYJingliuta',
          component: () => import('@/views/Criticalequipment/GJLianyoubu/LYJingliuta'),
          meta: { title: '精馏塔' }
        },
        {
          path: 'lyqilunji',
          name: 'LYQilunji',
          component: () => import('@/views/Criticalequipment/GJLianyoubu/LYQilunji'),
          meta: { title: '汽轮机' }
        }
      ]
    },
    {
      path: 'gjxitingbu',
      name: 'GJXitingbu',
      component: () => import('@/views/Criticalequipment/GJXitingbu/index'), // Parent router-view
      meta: { title: '烯烃部' },
      redirect: '/criticalequipment/xitingbu',
      children: [
        {
          path: 'xtjiarelu',
          name: 'XTJiarelu',
          component: () => import('@/views/Criticalequipment/GJXitingbu/XTJiarelu'),
          meta: { title: '加热炉' }
        },
        {
          path: 'xtjingliuta',
          name: 'XTJingliuta',
          component: () => import('@/views/Criticalequipment/GJXitingbu/XTJingliuta'),
          meta: { title: '精馏塔' }
        },
        {
          path: 'xtqilunji',
          name: 'XTQilunji',
          component: () => import('@/views/Criticalequipment/GJXitingbu/XTQilunji'),
          meta: { title: '汽轮机' }
        }
      ]
    }
  ]
}

export default CriticalequipmentRouter
