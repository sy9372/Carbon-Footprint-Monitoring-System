import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/Home/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/carbonemission',
    name: 'CarbonEmission',
    meta: { title: '全流程碳排监控', icon: 'el-icon-s-help' },
    component: Layout,
    redirect: '/carbonemission/emissionsituation',
    children: [
      {
        path: 'emissionsituation',
        name: 'EmissionSituation',
        component: () => import('@/views/WprocessCarbonEmission/EmissionSituation/index'),
        meta: { title: '全流程碳排情况' }
      },
      {
        path: 'emissionplanning',
        name: 'EmissionPlanning',
        component: () => import('@/views/WprocessCarbonEmission/EmissionPlanning/index'),
        meta: { title: '全流程碳排计划' }
      },
      {
        path: 'carbonlabel',
        name: 'CarbonLabel',
        component: () => import('@/views/WprocessCarbonEmission/CarbonLabel/index'),
        meta: { title: '关键产品碳标签' }
      },
      {
        path: 'efficiencymonitor',
        name: 'EfficiencyMonitor',
        component: () => import('@/views/WprocessCarbonEmission/EfficiencyMonitor/index'),
        meta: { title: '碳效率监控' }
      }
    ]
  },

  {
    path: '/dataquery',
    name: 'DataQuery',
    meta: { title: '能耗/碳排数据查询', icon: 'form' },
    component: Layout,
    redirect: '/dataquery/refiningdepartment',
    children: [
      {
        path: 'refiningdepartment',
        name: 'RefiningDepartment',
        component: () => import('@/views/DataQuery/RefiningDepartment/index'),
        meta: { title: '能耗/碳排数据查询' }
      }
    ]
  },

  {
    path: '/wprocesscarbonemission',
    component: Layout,
    redirect: '/wprocesscarbonemission/criticalequipment',
    name: 'WprocessCarbonEmission',
    meta: { title: '全流程能效监控', icon: 'nested' },
    children: [
      {
        path: 'criticalequipment',
        name: 'CriticalEquipment',
        component: () => import('@/views/WproEnergyMonitoring/CriticalEquipment/index'),
        meta: { title: '关键设备能效监控' }
      },
      {
        path: 'efficiencyindex',
        name: 'EfficiencyIndex',
        component: () => import('@/views/WproEnergyMonitoring/EfficiencyIndex/index'),
        meta: { title: '全厂能效指标监控' }
      },
      {
        path: 'efficiencyanalysis',
        name: 'EfficiencyAnalysis',
        component: () => import('@/views/WproEnergyMonitoring/EfficiencyAnalysis/index'),
        meta: { title: '全厂能耗分析' }
      },
      {
        path: 'reportexport',
        name: 'ReportExport',
        component: () => import('@/views/WproEnergyMonitoring/ReportExport/index'),
        meta: { title: '能耗报表导出' }
      }
    ]
  },

  {
    path: '/emissionreport',
    component: Layout,
    redirect: '/emissionreport',
    name: 'EmissionReport',
    meta: { title: '碳排报告', icon: 'link' },
    children: [
      {
        path: 'systemtable',
        name: 'SystemTable',
        component: () => import('@/views/EmissionReport/SystemTable/index'),
        meta: { title: '系统填报表格' }
      },
      {
        path: 'emissionreport',
        name: 'EmissionReport',
        component: () => import('@/views/EmissionReport/EmissionReport/index'),
        meta: { title: '碳排报告' }
      }
    ]
  },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' }
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
