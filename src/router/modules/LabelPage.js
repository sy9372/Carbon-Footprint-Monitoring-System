
import Layout from '@/layout'
const LabelPageRouter = {
  path: '/tongjizhongxin/lowpressure/lowchuyun',
  component: Layout,
  redirect: '/tongjizhongxin/lowpressure/lowchuyun',
  children: [{
    path: '/tongjizhongxin/lowpressure/lowchuyun',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/ChuYunBu'),
    hidden: true,
    meta: { title: '储运部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/publicdepartment',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/PublicDepartment'),
    hidden: true,
    meta: { title: '公共事业部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/electricalcenter',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/ElectricalCenter'),
    hidden: true,
    meta: { title: '电气仪表中心情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/aromatics',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/Aromatics'),
    hidden: true,
    meta: { title: '芳烃部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/environmentalwater',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/EnvironmentalWater'),
    hidden: true,
    meta: { title: '环保水务情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/acrylicfabric',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/AcrylicFabric'),
    hidden: true,
    meta: { title: '腈纶部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/refinedolefins',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/RefinedOlefins'),
    hidden: true,
    meta: { title: '炼油烯烃部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/heatelectricity',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/HeatElectricity'),
    hidden: true,
    meta: { title: '热电部情况' }
  }, {
    path: '/tongjizhongxin/lowpressure/dacrondepartment',
    component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/DacronDepartment'),
    hidden: true,
    meta: { title: '涤纶部情况' }
  }]
}

export default LabelPageRouter
