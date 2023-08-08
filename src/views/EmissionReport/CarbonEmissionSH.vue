<!-- 这里是上海市碳排放报告直报系统 -->
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
                prop="type"
                label="排放类型"
                width="200">
            </el-table-column>
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
        title="表7 活动水平"
        :visible.sync="dialogVisible7"
        width="80%"
      >
        <el-table
            :data="tableData7"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="number"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="fuelType"
                label="燃料类型">
            </el-table-column>
            <el-table-column
                prop="totalConsumption"
                label="总消耗量(t)">
            </el-table-column>
            <el-table-column
                prop="equipment"
                label="设备">
            </el-table-column>
            <el-table-column
                prop="fuelConsumption"
                label="燃料消耗量">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表8 相关参数(低位热值与单位热值)"
        :visible.sync="dialogVisible8"
        width="80%"
      >
        <el-table
            :data="tableData8"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="fuelType"
                label="燃料类型">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="value1"
                label="低位热值（tJ/t或tJ/m3）">
            </el-table-column>
            <el-table-column
                prop="type1"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="value2"
                label="单位热值含碳量（tC/tJ）">
            </el-table-column>
            <el-table-column
                prop="type2"
                label="缺省值/检测值">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表10 相关参数(氧化率)"
        :visible.sync="dialogVisible10"
        width="80%"
      >
        <el-table
            :data="tableData10"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="equipment"
                label="设备">
            </el-table-column>
            <el-table-column
                prop="fueltype"
                label="燃料类型">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="rate"
                label="氧化率">
            </el-table-column>
            <el-table-column
                prop="type"
                label="缺省值/检测值">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表12化石燃料排放明细（燃料）"
        :visible.sync="dialogVisible12"
        width="80%"
      >
        <el-table
            :data="tableData12"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="number"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="fueltype"
                label="燃料类型">
            </el-table-column>
            <el-table-column
                prop="value1"
                label="低位热值（tJ/t或tJ/m3）">
            </el-table-column>
            <el-table-column
                prop="type1"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="value2"
                label="单位热值含碳量（tC/tJ）">
            </el-table-column>
            <el-table-column
                prop="type2"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="value3"
                label="含碳量（t-C/t或t-C/m3）">
            </el-table-column>
            <el-table-column
                prop="type3"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="consumption"
                label="总消耗量（t）">
            </el-table-column>
            <el-table-column
                prop="equipment"
                label="设备">
            </el-table-column>
            <el-table-column
                prop="fuelconsumption"
                label="燃料消耗量">
            </el-table-column>
            <el-table-column
                prop="rate"
                label="氧化率">
            </el-table-column>
            <el-table-column
                prop="type"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="emission"
                label="排放量（t.CO2）">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表13化石燃料排放明细（设备）"
        :visible.sync="dialogVisible13"
        width="80%"
      >
        <el-table
            :data="tableData13"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="number"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="equipment"
                label="设备">
            </el-table-column>
            <el-table-column
                prop="fueltype"
                label="燃料类型">
            </el-table-column>
            <el-table-column
                prop="value1"
                label="低位热值（tJ/t或tJ/m3）">
            </el-table-column>
            <el-table-column
                prop="type1"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="value2"
                label="单位热值含碳量（tC/tJ）">
            </el-table-column>
            <el-table-column
                prop="type2"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="value3"
                label="含碳量（t-C/t或t-C/m3）">
            </el-table-column>
            <el-table-column
                prop="type3"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="rate"
                label="氧化率">
            </el-table-column>
            <el-table-column
                prop="type"
                label="缺省值/检测值">
            </el-table-column>
            <el-table-column
                prop="fuelconsumption"
                label="燃料消耗量">
            </el-table-column>
            <el-table-column
                prop="emission"
                label="排放量（t.CO2）">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表14过程排放"
        :visible.sync="dialogVisible14"
        width="80%"
      >
        <el-table
            :data="tableData14"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="offerings"
                label="产品">
            </el-table-column>
            <el-table-column
                prop="method"
                label="方法">
            </el-table-column>
            <el-table-column
                prop="material"
                label="原料">
            </el-table-column>
            <el-table-column
                prop="production"
                label="产量（t或m3）">
            </el-table-column>
            <el-table-column
                prop="factors"
                label="排放因子（tCO2/t）">
            </el-table-column>
            <el-table-column
                prop="emission"
                label="排放量（tCO2）">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表15废弃物焚烧"
        :visible.sync="dialogVisible15"
        width="80%"
      >
        <el-table
            :data="tableData15"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="limit"
                label="范围">
            </el-table-column>
            <el-table-column
                prop="source"
                label="来源">
            </el-table-column>
            <el-table-column
                prop="value"
                label="焚烧量">
            </el-table-column>
            <el-table-column
                prop="factors"
                label="排放因子（tCO2/t）">
            </el-table-column>
            <el-table-column
                prop="emission"
                label="排放量（tCO2）">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表16 物料平衡法"
        :visible.sync="dialogVisible16"
        width="80%"
      >
        <el-table
            :data="tableData16"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="number"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="system"
                label="生产系统">
            </el-table-column>
            <el-table-column label="输入含碳原料、材料">
                <el-table-column
                prop="name1"
                label="名称">
                </el-table-column>
                <el-table-column
                prop="input"
                label="输入量（t）">
                </el-table-column>
                <el-table-column
                prop="carbon1"
                label="含碳量（t）">
                </el-table-column>
            </el-table-column>
            <el-table-column label="输出含碳产品及废弃物">
                <el-table-column
                prop="name2"
                label="名称">
                </el-table-column>
                <el-table-column
                prop="output"
                label="输出量（t）">
                </el-table-column>
                <el-table-column
                prop="carbon2"
                label="含碳量（t）">
                </el-table-column>
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表17 间接排放"
        :visible.sync="dialogVisible17"
        width="80%"
      >
        <el-table
            :data="tableData17"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="type"
                label="能源类型">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="outflow"
                label="外购量">
            </el-table-column>
            <el-table-column
                prop="green"
                label="外购绿电量">
            </el-table-column>
            <el-table-column
                prop="factors"
                label="排放因子（tCO2/t）">
            </el-table-column>
            <el-table-column
                prop="emission"
                label="年度排放量（t）">
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog
        title="表18 排放汇总"
        :visible.sync="dialogVisible18"
        width="80%">
        <el-table
            :data="tableData18"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
            prop="type"
            label="排放类型">
            </el-table-column>
            <el-table-column label="直接排放" >
                <el-table-column
                prop="type1"
                label="化石燃料燃烧排放">
                </el-table-column>
                <el-table-column
                prop="type2"
                label="过程排放">
                </el-table-column>
                <el-table-column
                prop="type3"
                label="废弃物焚烧排放">
                </el-table-column>
                <el-table-column
                prop="type4"
                label="物料平衡法">
                </el-table-column>
            </el-table-column>
            <el-table-column
                prop="type5"
                label="间接排放">
            </el-table-column>
            <el-table-column
                prop="type6"
                label="非能源利用扣减">
            </el-table-column>
            <el-table-column
                prop="total"
                label="总排放量">
            </el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name: '上海市碳排放交易试点企业碳排放状况报告',
            tableData: [
                {
                    type: '直接排放',
                    list: '表7 活动水平',
                    num: '7',
                },{
                    type: '直接排放',
                    list: '表8 相关参数(低位热值与单位热值)',
                    num: '8'
                },{
                    type: '直接排放',
                    list: '表10 相关参数(氧化率)',
                    num: '10'
                },{
                    type: '直接排放',
                    list: '表12化石燃料排放明细（燃料）',
                    num: '12'
                },{
                    type: '直接排放',
                    list: '表13化石燃料排放明细（设备）',
                    num: '13'
                },{
                    type: '直接排放',
                    list: '表14过程排放',
                    num: '14'
                },{
                    type: '直接排放',
                    list: '表15废弃物焚烧',
                    num: '15'
                },{
                    type: '直接排放',
                    list: '表16物料平衡法',
                    num: '16'
                },{
                    type: '间接排放',
                    list: '表17 间接排放',
                    num: '17'
                },{
                    type: '排放汇总',
                    list: '表18 排放总汇',
                    num: '18'
                }
            ],
            dialogVisible7: false,
            dialogVisible8: false,
            dialogVisible10: false,
            dialogVisible12:false,
            dialogVisible13:false,
            dialogVisible14:false,
            dialogVisible15:false,
            dialogVisible16:false,
            dialogVisible17:false,
            dialogVisible18:false,
            tableData7: [
                {
                    id: '',
                    number: '1',
                    fuelType: '石油焦',
                    totalConsumption: '228731',
                    equipment: '自设备电站锅炉',
                    fuelConsumption: '956.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '自设备电站锅炉',
                    fuelConsumption: '227775.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他',
                    fuelConsumption: '0.00000'
                },
                {
                    id: '',
                    number: '2',
                    fuelType: '液化石油气',
                    totalConsumption: '11224',
                    equipment: '其他加热炉',
                    fuelConsumption: '3167.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他加热炉',
                    fuelConsumption: '8057.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他',
                    fuelConsumption: '0.00000'
                },
                {
                    id: '',
                    number: '3',
                    fuelType: '天然气',
                    totalConsumption: '464221039',
                    equipment: '其他加热炉',
                    fuelConsumption: '236422351.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他加热炉',
                    fuelConsumption: '50105032.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他加热炉',
                    fuelConsumption: '167801039.00000'
                },
                {
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他',
                    fuelConsumption: '9892617.00000'
                },
                {
                    id: '',
                    number: '4',
                    fuelType: '柴油',
                    totalConsumption: '1294',
                    equipment: '自备电站锅炉',
                    fuelConsumption: '995.00000'
                },{
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '其他',
                    fuelConsumption: '299.00000'
                },{
                    id: '',
                    number: '5',
                    fuelType: '烟煤',
                    totalConsumption: '365098',
                    equipment: '',
                    fuelConsumption: ''
                },{
                    id: '',
                    number: '6',
                    fuelType: '汽油',
                    totalConsumption: '241',
                    equipment: '',
                    fuelConsumption: ''
                },{
                    id: '',
                    number: '7',
                    fuelType: '焦炭',
                    totalConsumption: '203152.965',
                    equipment: '',
                    fuelConsumption: ''
                },{
                    id: '',
                    number: '8',
                    fuelType: '燃料油',
                    totalConsumption: '39526',
                    equipment: '',
                    fuelConsumption: ''
                },{
                    id: '',
                    number: '9',
                    fuelType: '炼厂干气',
                    totalConsumption: '732774.452',
                    equipment: '',
                    fuelConsumption: ''
                },{
                    id: '',
                    number: '',
                    fuelType: '',
                    totalConsumption: '',
                    equipment: '',
                    fuelConsumption: ''
                },
            ],
            tableData8: [
                {
                    fuelType: '石油焦',
                    unit: 't',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '液化石油气',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '天然气',
                    unit: 'm3',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '柴油',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '烟煤',
                    unit: 't',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '汽油',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '焦炭',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '燃料油',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                },{
                    fuelType: '炼厂干气',
                    unit: 't',
                    value1: '',
                    type1: '缺省值',
                    value2: '',
                    type2: '缺省值'
                }
            ],
            tableData10: [
                {
                    equipment: '自备电站锅炉',
                    fueltype: '柴油',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '烟煤',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '天然气',
                    unit: 'm3',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '小型工业锅炉',
                    fueltype: '燃料油',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '汽油',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '天然气',
                    unit: 'm3',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '天然气',
                    unit: 'm3',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '自备电站锅炉',
                    fueltype: '烟煤',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '自备电站锅炉',
                    fueltype: '烟煤',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '自备电站锅炉',
                    fueltype: '石油焦',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '自备电站锅炉',
                    fueltype: '石油焦',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '石油焦',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他',
                    fueltype: '燃料油',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他',
                    fueltype: '柴油',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他',
                    fueltype: '天然气',
                    unit: 'm3',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '炼厂干气',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '炼厂干气',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '炼厂干气',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '炼厂干气',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '液化石油气',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '液化石油气',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '液化石油气',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                },{
                    equipment: '其他加热炉',
                    fueltype: '焦炭',
                    unit: 't',
                    rate: '',
                    type: '检测值',
                },{
                    equipment: '其他',
                    fueltype: '焦炭',
                    unit: 't',
                    rate: '1',
                    type: '缺省值',
                }
            ],
            tableData12: [
                {
                    number: '1',
                    fueltype: '石油焦',
                    value1: '',
                    type1: '检测值',
                    value2: '27.50000',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '自备电站锅炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '自备电站锅炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '2',
                    fueltype: '液化石油气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '3',
                    fueltype: '天然气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '4',
                    fueltype: '柴油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '自备电站锅炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '5',
                    fueltype: '烟煤',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '自备电站锅炉',
                    fuelconsumption: '',
                    rate: '',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '自备电站锅炉',
                    fuelconsumption: '',
                    rate: '',
                    type: '检测值',
                    emission: ''
                },{
                    number: '6',
                    fueltype: '汽油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '7',
                    fueltype: '焦炭',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '8',
                    fueltype: '燃料油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '小型工业锅炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                },{
                    number: '9',
                    fueltype: '炼厂干气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他加热炉',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '检测值',
                    emission: ''
                },{
                    number: '',
                    fueltype: '',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    consumption: '',
                    equipment: '其他',
                    fuelconsumption: '',
                    rate: '1.00000',
                    type: '',
                    emission: ''
                }
            ],
            tableData13: [
                {
                    number: '1',
                    equipment: '其他',
                    fueltype: '石油焦',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '液化石油气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '天然气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '柴油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '烟煤',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '汽油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '焦炭',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '燃料油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '炼厂干气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '2',
                    equipment: '其他加热炉',
                    fueltype: '液化石油气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '液化石油气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '天然气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '天然气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '天然气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '焦炭',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '炼厂干气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '炼厂干气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '炼厂干气',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '3',
                    equipment: '小型工业锅炉',
                    fueltype: '燃料油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '4',
                    equipment: '自备电站锅炉',
                    fueltype: '石油焦',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '石油焦',
                    value1: '检测值',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '柴油',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '烟煤',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                },{
                    number: '',
                    equipment: '',
                    fueltype: '烟煤',
                    value1: '',
                    type1: '检测值',
                    value2: '',
                    type2: '',
                    value3: '',
                    type3: '',
                    rate: '1.00000',
                    type: '检测值',
                    fuelconsumption: '',
                    emission: ''
                }
            ],
            tableData14: [
                {
                    offerings: '环氧乙烷',
                    method: '空气过程（80）',
                    material: '',
                    production: '',
                    factors: '',
                    emission: ''
                }
            ],
            tableData15: [
                {
                    limit: '危险废弃物',
                    source: '',
                    value: '',
                    production: '',
                    factors: '',
                    emission: ''
                }
            ],
            tableData16: [],
            tableData17: [
                {
                    type: '外购电力',
                    unit: '万千瓦时',
                    outflow: '',
                    green: '',
                    factors: '',
                    emission: ''
                },{
                    type: '外购热力',
                    unit: '百万千焦',
                    outflow: '',
                    green: '',
                    factors: '',
                    emission: ''
                }
            ],
            tableData18: [
                {
                    type: '排放量（tCO2）',
                    type1: '',
                    type2: '',
                    type3: '',
                    type4: '',
                    type5: '',
                    type6: '',
                    total: ''
                }
            ]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row.num)
            if (row.num === "7") {
                this.dialogVisible7 = true
            }
            if (row.num === "8") {
                this.dialogVisible8 = true
            }
            if (row.num === "10") {
                this.dialogVisible10 = true
            }
            if (row.num === "12") {
                this.dialogVisible12 = true
            }
            if (row.num === "13") {
                this.dialogVisible13 = true
            }
            if (row.num === "14") {
                this.dialogVisible14 = true
            }
            if (row.num === "15") {
                this.dialogVisible15 = true
            }
            if (row.num === "16") {
                this.dialogVisible16 = true
            }
            if (row.num === "17") {
                this.dialogVisible17 = true
            }
            if (row.num === "18") {
                this.dialogVisible18 = true
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