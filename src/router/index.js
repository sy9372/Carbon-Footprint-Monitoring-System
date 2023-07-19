import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

import DataQueryRouter from './modules/DataQuery.js'
import WproEnergyMonitoringRouter from './modules/WproEnergyMonitoring.js'
import LabelPageRouter from './modules/LabelPage.js'

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
        component: () => import('@/views/WprocessCarbonEmission/EmissionSituation'),
        meta: { title: '全流程碳排情况' }
      },
      {
        path: 'emissionplanning',
        name: 'EmissionPlanning',
        component: () => import('@/views/WprocessCarbonEmission/EmissionPlanning'),
        meta: { title: '全流程碳排计划' }
      },
      {
        path: 'carbonlabel',
        name: 'CarbonLabel',
        component: () => import('@/views/WprocessCarbonEmission/CarbonLabel'),
        meta: { title: '关键产品碳标签' }
      },
      {
        path: 'efficiencymonitor',
        name: 'EfficiencyMonitor',
        component: () => import('@/views/WprocessCarbonEmission/EfficiencyMonitor'),
        meta: { title: '碳效率监控' }
      }
    ]
  },

  // {
  //   path: '/dataquery',
  //   name: 'DataQuery',
  //   meta: { title: '能耗/碳排数据查询', icon: 'form' },
  //   component: Layout,
  //   redirect: '/dataquery/refiningdepartment',
  //   children: [
  //     {
  //       path: 'refiningdepartment',
  //       name: 'RefiningDepartment',
  //       component: () => import('@/views/DataQuery/RefiningDepartment'),
  //       meta: { title: '能耗/碳排数据查询' }
  //     },
  //     {
  //       path: 'lianyoubu',
  //       name: 'Lianyoubu',
  //       component: () => import('@/views/DataQuery/Lianyoubu'),
  //       meta: { title: '炼油部' }
  //     },
  //     {
  //       path: 'xitingbu',
  //       name: 'Xitingbu',
  //       component: () => import('@/views/DataQuery/Xitingbu'),
  //       meta: { title: '烯烃部' }
  //     },
  //     {
  //       path: 'fangtinghuagongbu',
  //       name: 'Fangtinghuagongbu',
  //       component: () => import('@/views/DataQuery/Fangtinghuagongbu'),
  //       meta: { title: '芳烃化工部' }
  //     },
  //     {
  //       path: 'fangtinglianyoubu',
  //       name: 'Fangtinglianyoubu',
  //       component: () => import('@/views/DataQuery/Fangtinglianyoubu'),
  //       meta: { title: '芳烃炼油部' }
  //     },
  //     {
  //       path: 'chuyunbu',
  //       name: 'Chuyunbu',
  //       component: () => import('@/views/DataQuery/Chuyunbu'),
  //       meta: { title: '储运部' }
  //     }
  //   ]
  // },
  DataQueryRouter,

  WproEnergyMonitoringRouter,

  {
    path: '/emissionreport',
    component: Layout,
    redirect: '/emissionreport/carbonassets',
    name: 'EmissionReport',
    meta: { title: '碳排报告', icon: 'link' },
    children: [
      {
        path: 'carbonassets',
        name: 'CarbonAssets',
        component: () => import('@/views/EmissionReport/CarbonAssets'),
        meta: { title: '碳资产管理系统' }
      },
      {
        path: 'carbonmarket',
        name: 'CarbonMarket',
        component: () => import('@/views/EmissionReport/CarbonMarket'),
        meta: { title: '全国碳市场管理平台' }
      },
      {
        path: 'chemicalcaliber',
        name: 'ChemicalCaliber',
        component: () => import('@/views/EmissionReport/ChemicalCaliber'),
        meta: { title: '石油化工口径报表' }
      },
      {
        path: 'carbonemissionsh',
        name: 'CarbonEmissionSH',
        component: () => import('@/views/EmissionReport/CarbonEmissionSH'),
        meta: { title: '上海市碳排放报告直报系统' }
      },
      // {
      //   path: 'systemtable',
      //   name: 'SystemTable',
      //   component: () => import('@/views/EmissionReport/SystemTable'),
      //   meta: { title: '系统填报表格' }
      // },
      // {
      //   path: 'carbonreport',
      //   name: 'CarbonReport',
      //   component: () => import('@/views/EmissionReport/CarbonReport'),
      //   meta: { title: '碳排报告' }
      // }
    ]
  },
  LabelPageRouter,

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
