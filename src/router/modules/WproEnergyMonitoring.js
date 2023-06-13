/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const WproEnergyMonitoringRouter = {
  path: '/wproenergymonitoring',
  redirect: '/wproenergymonitoring/criticalequipment/jiarelu/guolu',
  component: Layout,
  name: 'WproEnergyMonitoring',
  meta: { title: '全流程能效监控', icon: 'nested' },
  children: [
    {
      path: 'criticalequipment',
      name: 'CriticalEquipment',
      component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/index'), // Parent router-view
      meta: { title: '关键设备能效监控' },
      redirect: '/wproenergymonitoring/criticalequipment/jiarelu/guolu',
      children: [
        {
          path: 'jiarelu',
          name: 'Jiarelu',
          component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Jiarelu/index'),
          redirect: '/wproenergymonitoring/criticalequipment/jiarelu/guolu',
          meta: { title: '加热炉' },
          children: [
            {
              path: 'guolu',
              name: 'Guolu',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Jiarelu/Guolu'),
              meta: { title: '加热炉' }
            },
            {
              path: 'guolu1',
              name: 'Guolu1',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Jiarelu/Guolu1'),
              meta: { title: '锅炉1' }
            }
          ]
        },
        {
          path: 'yixizhuangzhi',
          name: 'Yixizhuangzhi',
          component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Yixizhuangzhi/index'),
          redirect: '/wproenergymonitoring/criticalequipment/yixizhuangzhi/liejieqiyasuotoupingji',
          meta: { title: '乙烯装置' },
          children: [
            {
              path: 'liejieqiyasuotoupingji',
              name: 'Liejieqiyasuotoupingji',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Yixizhuangzhi/Liejieqiyasuotoupingji'),
              meta: { title: '裂解气压缩透平机' }
            },
            {
              path: 'bingxiyasuotoupingji',
              name: 'Bingxiyasuotoupingji',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Yixizhuangzhi/Bingxiyasuotoupingji'),
              meta: { title: '丙烯压缩透平机' }
            },
            {
              path: 'yixiyasuotoupingji',
              name: 'Yixiyasuotoupingji',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Yixizhuangzhi/Yixiyasuotoupingji'),
              meta: { title: '乙烯压缩透平机' }
            },
            {
              path: 'xxjingliuta',
              name: 'XXjingliuta',
              component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/Yixizhuangzhi/XXjingliuta'),
              meta: { title: 'XX精馏塔' }
            }
          ]
        }
      ]
    },
    {
      path: 'efficiencyindex',
      name: 'EfficiencyIndex',
      component: () => import('@/views/WproEnergyMonitoring/EfficiencyIndex'),
      meta: { title: '全厂能效指标监控' }
    },
    {
      path: 'efficiencyanalysis',
      name: 'EfficiencyAnalysis',
      component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/index'), // Parent router-view
      meta: { title: '全厂能耗分析' },
      redirect: '/wproenergymonitoring/efficiencyanalysis/refiningdepartment/1.3mpasteam',
      children: [
        {
          path: 'refiningdepartment',
          name: 'RefiningDepartment',
          component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/RefiningDepartment/index'),
          redirect: '/wproenergymonitoring/efficiencyanalysis/refiningdepartment/1.3mpasteam',
          meta: { title: '炼油部' },
          children: [
            {
              path: '1.3mpasteam',
              name: '1.3MpaSteam',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/RefiningDepartment/1.3MpaSteam'),
              meta: { title: '1.3Mpa蒸汽累积量' }
            },
            {
              path: '3.5mpasteam',
              name: '3.5MpaSteam',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/RefiningDepartment/3.5MpaSteam'),
              meta: { title: '3.5Mpa蒸汽累积量' }
            }
          ]
        },
        {
          path: 'tongjizhongxin',
          name: 'Tongjizhongxin',
          component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/index'),
          redirect: '/wproenergymonitoring/efficiencyanalysis/tongjizhongxin/lowpressure',
          meta: { title: '统计中心' },
          children: [
            {
              path: 'lowpressure',
              name: 'LowPressure',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/LowPressure'),
              meta: { title: '低压蒸汽' }
            },
            {
              path: 'mediumpressure',
              name: 'MediumPressure',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/MediumPressure'),
              meta: { title: '中压蒸汽' }
            },
            {
              path: 'fuelgas',
              name: 'FuelGas',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/FuelGas'),
              meta: { title: '燃料气' }
            },
            {
              path: 'lowchuyun',
              component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/Tongjizhongxin/SubordinateDepartment/ChuYunBu')
            }
          ]
        }
      ]
    },
    {
      path: 'reportexport',
      name: 'ReportExport',
      component: () => import('@/views/WproEnergyMonitoring/ReportExport'),
      meta: { title: '能耗报表导出' }
    }
  ]
}

export default WproEnergyMonitoringRouter
