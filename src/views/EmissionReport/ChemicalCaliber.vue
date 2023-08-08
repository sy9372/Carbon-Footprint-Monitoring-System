<!-- 这里是石油化工口径报表 -->
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
                    width="300">
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
            :visible.sync="dialogVisible2"
            title="表2:企业温室气体排放总量汇总"
            width="80%"
        >
            <el-table
                :data="tableData2"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="activity"
                    label="碳排放活动"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="排放量（吨CO2）"
                    width="200">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表2-1:除自备电厂以外的温室气体排放量汇总</p>
            <el-table
                :data="tableData21"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="activity"
                    label="碳排放活动"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="排放量（吨CO2）"
                    width="200">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表2-2:自备电厂温室气体排放量汇总</p>
            <el-table
                :data="tableData22"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="activity"
                    label="碳排放活动"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="排放量（吨CO2）"
                    width="200">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible3"
            title="表3:自备电厂以外的化石燃料燃烧排放"
            width="80%">
            <el-table
                :data="tableData3"
                :span-method="objectSpanMethod3"
                show-summary
                sum-text="2021年统计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="fuelType"
                    label="燃料品种">
                </el-table-column>
                <el-table-column
                    prop="yearEmission"
                    label="年消费量（吨或万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="yearSource"
                    label="年消费来源">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="燃料低位发热量（GJ/t或GJ/万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="type1"
                    label="低位发热量来源">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="单位热值含碳量（tC/TJ）">
                </el-table-column>
                <el-table-column
                    prop="type2"
                    label="单位热值含碳量来源">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="单位含碳量（tC/T）">
                </el-table-column>
                <el-table-column
                    prop="type3"
                    label="单位含碳量来源">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="碳氧化率">
                </el-table-column>
                <el-table-column
                    prop="rateType"
                    label="氧化率来源">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2直接排放量（吨）">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible4"
            title="表4:火炬燃烧二氧化碳排放"
            width="80%">
            <p style="margin-top: 50px;font-size: 17px;">表4-2:事故火炬燃烧排放的活动水平和其他成分数据一览表</p>
            <el-table
                :data="tableData4"
                :span-method="objectSpanMethod4"
                show-summary
                sum-text="2021年事故火炬排放统计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="事故火炬序号">
                </el-table-column>
                <el-table-column
                    prop="lose"
                    label="加工损失（吨）">
                </el-table-column>
                <el-table-column
                    prop="ratios"
                    label="事故排放所占比例">
                </el-table-column>
                <el-table-column
                    prop="factor"
                    label="折算系数">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="火炬燃烧的碳氧化率">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="事故火炬燃烧CO2排放量（吨）">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表4-3:火炬燃烧排放活动水平汇总表</p>
            <el-table
                :data="tableData43"
                :span-method="objectSpanMethod4"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="排放类别">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量（吨）">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible5"
            title="表5: 工业生产过程CO2排放"
            width="80%">
            <p style="margin-top: 50px;font-size: 17px;">表5-1:催化裂化装置催化剂烧焦CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData51"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="装置序号">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="烧焦量（吨）">
                </el-table-column>
                <el-table-column
                    prop="type1"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="焦层的含碳量（吨碳/吨焦）">
                </el-table-column>
                <el-table-column
                    prop="type2"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="碳氧化率">
                </el-table-column>
                <el-table-column
                    prop="rateType"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-2:催化重整装置催化剂烧焦CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData52"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="装置序号">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="待再生的催化剂量（吨）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="再生前催化剂含碳量（吨碳/吨催化剂）">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="再生后催化剂含碳量（吨碳/吨催化剂）">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="碳氧化率">
                </el-table-column>
                <el-table-column
                    prop="rateType"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-4:制氢装置CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData54"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="原料名称">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="原料投入量（吨或万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="原料含碳量（吨碳/吨或吨碳/万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="碳氧化率">
                </el-table-column>
                <el-table-column
                    prop="rateType"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-8:乙烯裂解装置CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData58"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="装置序号">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="烧焦尾气平均流量（Nm3/小时）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="年累计烧焦时间（小时）">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="烧焦尾气中CO2体积浓度（%）">
                </el-table-column>
                <el-table-column
                    prop="type1"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="value4"
                    label="烧焦尾气中CO2体积浓度（%）">
                </el-table-column>
                <el-table-column
                    prop="type2"
                    label="数据来源">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-9:乙二醇/环氧乙烷装置CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData59"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="装置序号">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="乙烯原料用量">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="原料含碳量（吨碳/吨乙烯）">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="当量环氧乙烷产品产量（吨）">
                </el-table-column>
                <el-table-column
                    prop="value4"
                    label="环氧乙烷含碳量（吨碳/吨环氧乙烷）">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-10:其他产品生产装置CO2排放活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData510"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="name1"
                    label="原料名称">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="原料投入量（吨）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="原料含碳量（吨碳/吨原料）">
                </el-table-column>
                <el-table-column
                    prop="name2"
                    label="产品名称">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="产品产出量（吨）">
                </el-table-column>
                <el-table-column
                    prop="value4"
                    label="产品含碳量（吨碳/吨产品）">
                </el-table-column>
                <el-table-column
                    prop="value5"
                    label="废弃物产生量（吨）">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表5-11:工业生产过程CO2排放量汇总表</p>
            <el-table
                :data="tableData511"
                show-summary
                sum-text="2021年总计"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="num"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="工业过程名称">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="2021年CO2排放量">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible6"
            title="表6:CO2 回收利用量"
            width="80%">
            <el-table
                :data="tableData6"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="CO2回收外供量（万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="外供气体CO2体积浓度（%）">
                </el-table-column>
                <el-table-column
                    prop="value3"
                    label="CO2回收作原料量（万Nm3）">
                </el-table-column>
                <el-table-column
                    prop="value4"
                    label="原料气CO2体积浓度（%）">
                </el-table-column>
                <el-table-column
                    prop="value5"
                    label="CO2回收量（吨）">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible7"
            title="表7:净购入电力、热力隐含的碳排放"
            width="80%">
            <p style="font-size: 17px;">表7-1:企业净购入的电力和热力消费活动水平和排放因子数据一览表</p>
            <el-table
                :data="tableData7"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="year"
                    label="年度">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型">
                </el-table-column>
                <el-table-column label="电力和热力消费活动水平">
                    <el-table-column
                    prop="value1"
                    label="购入量">
                    </el-table-column>
                    <el-table-column
                        prop="value2"
                        label="外供量">
                    </el-table-column>
                    <el-table-column
                        prop="value3"
                        label="净购入量">
                    </el-table-column>
                    <el-table-column
                        prop="unit1"
                        label="单位">
                    </el-table-column>
                </el-table-column>
                <el-table-column label="CO2排放因子">
                    <el-table-column
                        prop="factor"
                        label="系数">
                    </el-table-column>
                    <el-table-column
                        prop="unit2"
                        label="单位">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="CO2排放量（tCO2）">
                </el-table-column>
                <el-table-column
                    prop="instruction"
                    label="说明">
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible8"
            title="表8: 目备电厂排放量计算表"
            width="80%">
            <p style="margin-top: 50px;font-size: 17px;">表8-1:燃料燃烧直接排放</p>
            <el-table
                :data="tableData81"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="fuel"
                    label="固体燃料（品种可自行增减）">
                </el-table-column>
                <el-table-column
                    prop="consumption"
                    label="年燃料消耗量（吨）">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="年均低位热值（MJ/Kg）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="单位热值含碳量（tC/TJ）">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="氧化率）">
                </el-table-column>
                <el-table-column
                    prop="param"
                    label="CO2/C转换系数=44/12">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="直接排放量（tCO2）">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表8-2:外购电力间接排放</p>
            <el-table
                :data="tableData82"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="value"
                    label="年外购电力电量（MWh）">
                </el-table-column>
                <el-table-column
                    prop="factor"
                    label="排放因子（tCO2/MWh）">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="直接排放量（tCO2）">
                </el-table-column>
            </el-table>
            <p style="margin-top: 50px;font-size: 17px;">表8-3:脱硫过程直接排放</p>
            <el-table
                :data="tableData83"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="type"
                    label="脱硫类型">
                </el-table-column>
                <el-table-column
                    prop="value1"
                    label="年脱硫剂耗用量（t）">
                </el-table-column>
                <el-table-column
                    prop="value2"
                    label="脱硫剂碳酸盐含量">
                </el-table-column>
                <el-table-column
                    prop="factor"
                    label="脱硫剂排放因子（tCO2/t碳酸盐）">
                </el-table-column>
                <el-table-column
                    prop="emission"
                    label="直接排放量（tCO2）">
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '中国石油化工企业温室气体排放年度报告',
            tableData: [
                {
                    list: '表2:企业温室气体排放总量汇总',
                    num: 2
                },{
                    list: '表3:自备电厂以外的化石燃料燃烧排放',
                    num: 3
                },{
                    list: '表4:火炬燃烧二氧化碳排放',
                    num: 4
                },{
                    list: '表5: 工业生产过程CO2排放',
                    num: 5
                },{
                    list: '表6:CO2 回收利用量',
                    num: 6
                },{
                    list: '表7:净购入电力、热力隐含的碳排放',
                    num: 7
                },{
                    list: '表8: 目备电厂排放量计算表',
                    num: 8
                },{
                    list: '表9 20XX年碳排放补充数据核算报告模板数据汇总表',
                    num: 9
                },{
                    list: '表10:',
                    num: 10
                }
            ],
            dialogVisible2: false,
            dialogVisible3: false,
            dialogVisible4: false,
            dialogVisible5: false,
            dialogVisible6: false,
            dialogVisible7: false,
            dialogVisible8: false,
            dialogVisible9: false,
            tableData2: [
                {
                    activity: '企业二氧化碳排放总量',
                    emission: ''
                }
            ],
            tableData21: [
                {
                    activity: '化石燃料燃烧二氧化碳排放量',
                    emission: ''
                },{
                    activity: '火炬燃烧二氧化碳排放量',
                    emission: ''
                },{
                    activity: '工业生产过程二氧化碳排放量',
                    emission: ''
                },{
                    activity: '二氧化碳回收利用量',
                    emission: ''
                },{
                    activity: '净购入使用的电力、热力产生的排放量',
                    emission: ''
                },{
                    activity: '除自备电厂以外的二氧化碳排放总量',
                    emission: ''
                }
            ],
            tableData22: [
                {
                    activity: '化石燃料燃烧二氧化碳排放量',
                    emission: ''
                },{
                    activity: '脱硫过程二氧化碳排放量',
                    emission: ''
                },{
                    activity: '净购入使用的电力、热力产生的排放量',
                    emission: ''
                },{
                    activity: '自备电厂二氧化碳排放总量',
                    emission: ''
                },
            ],
            tableData3: [
                {
                    year: '2021',
                    fuelType: '炼厂干气',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '46.05',
                    type1: '缺省',
                    value2: '18.2',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.99',
                    rateType: '缺省',
                    emission: ''
                },{
                    year: '2021',
                    fuelType: '乙烯焦油',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '33.453',
                    type1: '缺省',
                    value2: '22',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.98',
                    rateType: '缺省',
                    emission: ''
                },{
                    year: '2021',
                    fuelType: '液化石油气',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '47.31',
                    type1: '缺省',
                    value2: '17.2',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.99',
                    rateType: '缺省',
                    emission: ''
                },{
                    year: '2021',
                    fuelType: '天然气',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '389.31',
                    type1: '缺省',
                    value2: '15.3',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.99',
                    rateType: '缺省',
                    emission: ''
                },{
                    year: '2021',
                    fuelType: '汽油（车辆用）',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '44.8',
                    type1: '缺省',
                    value2: '18.9',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.98',
                    rateType: '缺省',
                    emission: ''
                },{
                    year: '2021',
                    fuelType: '柴油（车辆用）',
                    yearEmission: '',
                    yearSource: '计量',
                    value1: '43.33',
                    type1: '缺省',
                    value2: '20.2',
                    type2: '缺省',
                    value3: '',
                    type3: '',
                    rate: '0.98',
                    rateType: '缺省',
                    emission: ''
                },
            ],
            tableData4: [
                {
                    year: '2021',
                    number: '第1次事故火炬',
                    lose: '',
                    ratios: '',
                    factor: '',
                    rate: '',
                    emission: ''
                },{
                    year: '2021',
                    number: '第2次事故火炬',
                    lose: '',
                    ratios: '',
                    factor: '',
                    rate: '',
                    emission: ''
                },{
                    year: '2021',
                    number: '第..次事故火炬',
                    lose: '',
                    ratios: '',
                    factor: '',
                    rate: '',
                    emission: ''
                },
            ],
            tableData43: [
                {
                    year: '2021',
                    type: '正常火炬燃烧CO2排放',
                    emission: ''
                },
                {
                    year: '2021',
                    type: '事故火炬燃烧CO2排放',
                    emission: ''
                },
                {
                    year: '2021',
                    type: '火炬燃烧CO2排放',
                    emission: ''
                },
            ],
            tableData51: [
                {
                    year: '2021',
                    num: '1',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '2',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '3',
                    value1: '',
                    type1: '',
                    value2: '',
                    type2: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                }
            ],
            tableData52: [
                {
                    year: '2021',
                    num: '1',
                    value1: '',
                    value2: '',
                    value3: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '2',
                    value1: '',
                    value2: '',
                    value3: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '3',
                    value1: '',
                    value2: '',
                    value3: '',
                    rate: '98%',
                    rateType: '',
                    emission: ''
                }
            ],
            tableData54: [
                {
                    year: '2021',
                    name: '天然气1',
                    value1: '',
                    value2: '',
                    type: '计算值',
                    rate: '1',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    name: '天然气2',
                    value1: '',
                    value2: '',
                    type: '计算值',
                    rate: '1',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    name: '天然气3',
                    value1: '',
                    value2: '',
                    type: '计算值',
                    rate: '1',
                    rateType: '',
                    emission: ''
                },{
                    year: '2021',
                    name: '液化气',
                    value1: '',
                    value2: '',
                    type: '计算值',
                    rate: '1',
                    rateType: '',
                    emission: ''
                },
            ],
            tableData58: [
                {
                    year: '2021',
                    num: '1(10台6管炉)',
                    value1: '',
                    value2: '',
                    value3: '0.1%',
                    type1: '计算值',
                    value4: '',
                    type2: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '2(2台4管炉)',
                    value1: '',
                    value2: '',
                    value3: '0.1%',
                    type1: '',
                    value4: '',
                    type2: '',
                    emission: ''
                },
            ],
            tableData59: [
                {
                    year: '2021',
                    num: '1',
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: '',
                    emission: ''
                },{
                    year: '2021',
                    num: '2',
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: '',
                    emission: ''
                }
            ],
            tableData510: [
                {
                    year: '2021(PVA、硫磺回收)',
                    name1: '乙烯',
                    value1: '',
                    value2: '',
                    name2: '',
                    value3: '',
                    value4: '',
                    value5: '',
                    emission: ''
                },{
                    year: '2021(PVA、硫磺回收)',
                    name1: '醋酸',
                    value1: '',
                    value2: '',
                    name2: '',
                    value3: '',
                    value4: '',
                    value5: '',
                    emission: ''
                },{
                    year: '2021(PVA、硫磺回收)',
                    name1: '硫磺回收',
                    value1: '',
                    value2: '',
                    name2: '',
                    value3: '',
                    value4: '',
                    value5: '',
                    emission: ''
                },
            ],
            tableData511: [
                {
                    num: '1',
                    name: '催化裂化',
                    emission: ''
                },{
                    num: '2',
                    name: '催化重整',
                    emission: ''
                },{
                    num: '3',
                    name: '其他装置催化剂烧焦',
                    emission: ''
                },{
                    num: '4',
                    name: '制氢装置',
                    emission: ''
                },{
                    num: '5',
                    name: '硫化焦化装置',
                    emission: ''
                },{
                    num: '6',
                    name: '石油焦煅烧装置',
                    emission: ''
                },{
                    num: '7',
                    name: '氧化沥青装置',
                    emission: ''
                },{
                    num: '8',
                    name: '乙烯裂解装置',
                    emission: ''
                },{
                    num: '9',
                    name: '乙二醇/环氧乙烷生产',
                    emission: ''
                },{
                    num: '10',
                    name: '其他产品生产装置',
                    emission: ''
                },{
                    num: '11',
                    name: '总计',
                    emission: ''
                },
            ],
            tableData6: [
                {
                    year: '',
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: '',
                    value5: ''
                }
            ],
            tableData7: [
                {
                    year: '2021',
                    type: '电力',
                    value1: '',
                    value2: '',
                    value3: '',
                    unit1: 'MWh',
                    factor: '',
                    unit2: 'tCO2/MWh',
                    emission: '',
                    instruction: ''
                },{
                    year: '2021',
                    type: '蒸汽',
                    value1: '',
                    value2: '',
                    value3: '',
                    unit1: 'GJ',
                    factor: '',
                    unit2: 'tCO2/GJ',
                    emission: '',
                    instruction: ''
                },{
                    year: '2021',
                    type: '合计',
                    value1: '',
                    value2: '',
                    value3: '',
                    unit1: '',
                    factor: '',
                    unit2: '',
                    emission: '',
                    instruction: ''
                }
            ],
            tableData81: [
                {
                    fuel: '烟煤（0-4#机组）',
                    consumption: '',
                    value1: '',
                    value2: '',
                    rate: '0.99',
                    param: '3.667',
                    emission: ''
                },{
                    fuel: '柴油（0-4#机组）',
                    consumption: '',
                    value1: '',
                    value2: '',
                    rate: '0.98',
                    param: '3.667',
                    emission: ''
                },{
                    fuel: '烟煤（5-6#机组）',
                    consumption: '',
                    value1: '',
                    value2: '',
                    rate: '0.99',
                    param: '3.667',
                    emission: ''
                },{
                    fuel: '石油焦（5-6#机组）',
                    consumption: '',
                    value1: '',
                    value2: '',
                    rate: '0.98',
                    param: '3.667',
                    emission: ''
                },{
                    fuel: '柴油（5-6#机组）',
                    consumption: '',
                    value1: '',
                    value2: '',
                    rate: '0.98',
                    param: '3.667',
                    emission: ''
                }
            ],
            tableData82: [
                {
                    value: '',
                    factor: '0.7035',
                    emission: ''
                }
            ],
            tableData83: [
                {
                    type: '石灰石',
                    value1: '',
                    value2: '90%',
                    factor: '0.44',
                    emission: ''
                }
            ]
        }
    },
    methods: {
        handleClick (row) {
            console.log(row.num)
            if (row.num === 2) {
                this.dialogVisible2 = true
            }
            if (row.num === 3) {
                this.dialogVisible3 = true
            }
            if (row.num === 4) {
                this.dialogVisible4 = true
            }
            if (row.num === 5) {
                this.dialogVisible5 = true
            }
            if (row.num === 6) {
                this.dialogVisible6 = true
            }
            if (row.num === 7) {
                this.dialogVisible7 = true
            }
            if (row.num === 8) {
                this.dialogVisible8 = true
            }
        },
        objectSpanMethod3 ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 6,
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
        objectSpanMethod4 ({ row, column, rowIndex, columnIndex }) {
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