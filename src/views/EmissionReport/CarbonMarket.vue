<!-- 这里是全国碳市场管理平台 -->
<template>
  <div>
    <div class="title" style="width: 95%; height: 50px; margin: 20px; padding-left: 18%;"> 
        <p style="font-size: 40px; ">{{ name }}</p>
    </div>
    <div class="table"> 
        <el-table
        :data="tableData"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row>
            <el-table-column
                prop="list"
                label="列表"
                width="200">
            </el-table-column>
            <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">下载</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog
        title="表 3 化石燃料燃烧排放表"
        :visible.sync="dialogVisible3"
        width="80%"
      >
        <el-table
            :data="tableData3"
            :span-method="objectSpanMethod3"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="unitName"
                label="机组名称"
                width="100">
            </el-table-column>
            <el-table-column
                prop="fuelType"
                label="燃料类型"
                width="100">
            </el-table-column>
            <el-table-column
                prop="paraName"
                label="参数名称"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="指标单位"
                align="center">
            </el-table-column>
            <el-table-column
                prop="data"
                label="数据"
                align="center">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表 4 购入使用电力排放表"
        :visible.sync="dialogVisible4"
        width="80%"
      >
        <el-table
            :data="tableData4"
            :span-method="objectSpanMethod4"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="unitName"
                label="机组名称"
                width="150">
            </el-table-column>
            <el-table-column
                prop="paraName"
                label="参数名称"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="指标单位"
                align="center">
            </el-table-column>
            <el-table-column
                prop="data"
                label="数据"
                align="center">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表 5 生产数据及排放量汇总表"
        :visible.sync="dialogVisible5"
        width="80%"
      >
        <el-table
            :data="tableData5"
            :span-method="objectSpanMethod5"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="unitName"
                label="机组名称"
                width="150">
            </el-table-column>
            <el-table-column
                prop="paraName"
                label="参数名称"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="指标单位"
                align="center">
            </el-table-column>
            <el-table-column
                prop="data"
                label="数据"
                align="center">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表 7 辅助参数报告项"
        :visible.sync="dialogVisible7"
        width="80%"
      >
        <el-table
            :data="tableData7"
            :span-method="objectSpanMethod7"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="unitName"
                label="机组名称"
                width="100">
            </el-table-column>
            <el-table-column
                prop="paraName"
                label="参数名称"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="指标单位"
                align="center">
            </el-table-column>
            <el-table-column
                prop="data"
                label="数据"
                align="center">
            </el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name: '全国碳市场管理平台碳排报表',
            tableData: [
                {
                    list: '表 3 化石燃料燃烧排放表',
                    num: 3
                },{
                    list: '表 4 购入使用电力排放表',
                    num: 4
                },{
                    list: '表 5 生产数据及排放量汇总表',
                    num: 5
                },{
                    list: '表 7 辅助参数报告项',
                    num: 7
                },
            ],
            dialogVisible2: false,
            dialogVisible3: false,
            dialogVisible4: false,
            dialogVisible5: false,
            dialogVisible7: false,
            tableData3: [
                {
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '化石燃料燃烧排放量',
                    unit: 'CO2',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '化石燃料热量',
                    unit: 'GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '消耗量',
                    unit: 't',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '收到基水分',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '空干基水分',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '收到基元素碳含量',
                    unit: 'tC/t',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '收到基低位发热量',
                    unit: 'GJ/t',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '单位热值含碳量',
                    unit: 'tC/GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '碳氧化率',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '收到基氢含量',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '一般烟煤',
                    paraName: '收到基全硫',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '化石燃料燃烧排放量',
                    unit: 'tCO2',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '化石燃料热量',
                    unit: 'GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '消耗量',
                    unit: 't',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '元素碳含量',
                    unit: 'tC/t',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '低位发热量',
                    unit: 'GJ/t',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '单位热值含碳量',
                    unit: 'tC/GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    fuelType: '柴油',
                    paraName: '碳氧化率',
                    unit: '%',
                    data: ''
                },
            ],
            tableData4: [
                {
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '购入使用电力排放量',
                    unit: 'tCO2',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '电网排放因子',
                    unit: 'tCO2/MWh',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '购入使用电量',
                    unit: 'MWh',
                    data: ''
                },
            ],
            tableData5: [
                {
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '机组二氧化碳排放量',
                    unit: 'tCO2',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '发电量',
                    unit: 'MWh',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '供热量',
                    unit: 'GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '运行小时数',
                    unit: 'h',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '负荷（出力）系数',
                    unit: '%',
                    data: ''
                },{
                    unitName: '全部机组',
                    paraName: '全部机组二氧化碳排放量',
                    unit: 'tCO2',
                    data: ''
                },
            ],
            tableData7: [
                {
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '发电碳排放强度',
                    unit: 'tCO2/MWh',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '供热碳排放强度',
                    unit: 'tCO2/GJ',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '上网电量',
                    unit: 'MWh',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '供热比',
                    unit: '%',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '发电煤（气）耗',
                    unit: 'tce/MWh或10e4Nm3/MWh',
                    data: ''
                },{
                    unitName: '合并机组（1#机组、2#机组、3#机组、4#机组、5#机组）',
                    paraName: '供热煤（气）耗',
                    unit: 'tce/GJ或10e4Nm3/GJ',
                    data: ''
                },{
                    unitName: '煤种1',
                    paraName: '煤种',
                    unit: '',
                    data: ''
                },{
                    unitName: '煤种1',
                    paraName: '煤炭购入量',
                    unit: 't',
                    data: ''
                },{
                    unitName: '煤种1',
                    paraName: '煤种',
                    unit: '',
                    data: ''
                },
            ]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row.num)
            if (row.num === 3) {
                this.dialogVisible3 = true
            }
            if (row.num === 4) {
                this.dialogVisible4 = true
            }
            if (row.num === 5) {
                this.dialogVisible5 = true
            }
            if (row.num === 7) {
                this.dialogVisible7 = true
            }
        },
        objectSpanMethod3({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex === 0)
                return {
                    rowspan: 18,
                    colspan: 1
                };
                else {
                    return {
                        rowspan:0,
                        colspan:0
                    }
                }
            } 
            if (columnIndex === 1) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 11,
                        colspan: 1
                    }
                }
                if (rowIndex === 11) {
                    return {
                        rowspan: 7,
                        colspan: 1
                    }
                }
                else {
                    return {
                        rowspan:0,
                        colspan:0
                    }
                }
            } 
        },
        objectSpanMethod4({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 3,
                        colspan: 1
                    }
                }
                else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                }
            }
        },
        objectSpanMethod5({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    }
                }
                else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                }
            }
        },
        objectSpanMethod7({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 6,
                        colspan: 1
                    }
                }
                if (rowIndex === 6) {
                    return {
                        rowspan: 3,
                        colspan: 1
                    }
                }
                else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.table{
    position: relative;
    width: 95%;
    height: auto;
    margin: 20px;
    padding-left: 20%;
}
</style>