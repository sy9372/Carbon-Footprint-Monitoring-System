import Layout from '@/layout'

const DataQueryRouter = {
    path: '/dataquery',
    name: 'DataQuery',
    meta: { title: '能耗/碳排数据查询', icon: 'form' },
    component: Layout,
    redirect: '/dataquery/companyentity',
    children: [
        {
            path: 'companyentity',
            name: 'CompanyEntity',
            component: () => import('@/views/DataQuery/CompanyEntity'), // Parent router-view
            meta: { title: '公司主体板块' }
        },
        {
        path: 'refiningsector',
        name: 'RefiningSector',
        component: () => import('@/views/DataQuery/RefiningSegment/index'), // Parent router-view
        meta: { title: '炼油板块' },
        redirect: '/dataquery/refiningsector/refinerydepartment',
        children: [
            {
                path: 'refinerydepartment',
                name: 'RefineryDepartment',
                component: () => import('@/views/DataQuery/RefiningSegment/LianYB'),
                meta: { title: '炼油部' }
            },
            {
                path: 'storagetransportationdepartmentrefining',
                name: 'StorageTransportationDepartmentRefining',
                component: () => import('@/views/DataQuery/RefiningSegment/ChuYB'),
                meta: { title: '储运部（炼油块）' }
            },
            {
                path: 'aromaticsrefining',
                name: 'AromaticsRefining',
                component: () => import('@/views/DataQuery/RefiningSegment/FangTB'),
                meta: { title: '芳烃部（炼油块）' }
            },
        ]},
        {
            path: 'chemicalsegment',
            name: 'ChemicalSegment',
            component: () => import('@/views/DataQuery/ChemicalSegment/index'), // Parent router-view
            meta: { title: '化工板块' },
            redirect: '/dataquery/ChemicalSegment/olefindepartment',
            children: [
                {
                    path: 'olefindepartment',
                    name: 'OlefinDepartment',
                    component: () => import('@/views/DataQuery/ChemicalSegment/XiTB'),
                    meta: { title: '烯烃部' }
                },
                {
                    path: 'aromaticchemicals',
                    name: 'AromaticChemicals',
                    component: () => import('@/views/DataQuery/ChemicalSegment/FangTB'),
                    meta: { title: '芳烃部（化工块）' }
                },
                {
                    path: 'storagetransportationdepartmentchemical',
                    name: 'StorageTransportationDepartmentChemical',
                    component: () => import('@/views/DataQuery/ChemicalSegment/ChuYB'),
                    meta: { title: '储运部（化工块）' }
                },
                {
                    path: 'ministrychemicalindustry',
                    name: 'MinistryChemicalIndustry',
                    component: () => import('@/views/DataQuery/ChemicalSegment/HuaGB'),
                    meta: { title: '化工部' }
                },
                {
                    path: 'polyesterdepartment',
                    name: 'PolyesterDepartment',
                    component: () => import('@/views/DataQuery/ChemicalSegment/DiLB'),
                    meta: { title: '涤纶部' }
                },
                {
                    path: 'acrylicfiberdepartment',
                    name: 'AcrylicFiberDepartment',
                    component: () => import('@/views/DataQuery/ChemicalSegment/QingLB'),
                    meta: { title: '晴纶部' }
                },
                {
                    path: 'plasticdepartment',
                    name: 'PlasticDepartment',
                    component: () => import('@/views/DataQuery/ChemicalSegment/SuLB'),
                    meta: { title: '塑料部' }
                },
                {
                    path: 'ministryenvironmentalprotectionwateraffairs',
                    name: 'MinistryEnvironmentalProtectionWaterAffairs',
                    component: () => import('@/views/DataQuery/ChemicalSegment/XiTB'),
                    meta: { title: '环保水务部' }
                }
            ]
        },
        {
            path: 'nonproductionsegment',
            name: 'NonProductionSegment',
            component: () => import('@/views/DataQuery/NonProductionSegment'), // Parent router-view
            meta: { title: '非生产板块' },
        }
    ]
}

export default DataQueryRouter