<template>
  <div>
    <!-- 1.3Mpa蒸汽累积量 -->
    <div class="dataSelect">
      <div class="block">
        <p>请选择日期范围 :</p>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        />
      </div>
      <div class="dataSummary">
        <p>装置蒸汽累计总量</p>
        <div class="input">收蒸汽网管: {{ data1 }}</div>
        <div class="output">发蒸汽网管: {{ data2 }}</div>
      </div>
    </div>
    <el-card class="TableCard">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="device"
          label="装置"
          width="180"
        />
        <el-table-column
          prop="number"
          label="位号"
          width="180"
        />
        <el-table-column
          prop="tend"
          label="走向"
        />
        <el-table-column
          prop="unit"
          label="单位"
        />
        <el-table-column
          prop="cumulant"
          label="累积量"
        />
        <el-table-column label="查询">
          <el-button size="mini" @click="dataHistory()">选择</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      :visible.sync="dialogVisible"
      width="90%"
      @open="open()"
    >
      <div id="lineTable" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        device: '1#炼油',
        number: 'FIQ5412',
        tend: '2#常减压收蒸汽管网',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '1#炼油',
        number: 'FIQ9764',
        tend: '3#常减压收蒸汽管网',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '1#炼油',
        number: 'FIQ2405',
        tend: '3#柴油加氢收蒸汽管网',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '2#炼油',
        number: 'FIQ7102',
        tend: '发蒸汽管网（南节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '2#炼油',
        number: 'FIQ7101',
        tend: '收蒸汽管网（北节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '2#炼油',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '3#炼油',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '3#炼油',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '3#炼油',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }, {
        device: '3#炼油',
        number: 'FIQ6308',
        tend: '中压加氢收管网',
        unit: '吨',
        cumulant: '4611.87'
      }, {
        device: '3#炼油',
        number: 'FIQ5000',
        tend: '2#制氢收管网',
        unit: '吨',
        cumulant: '11163.03'
      }, {
        device: '4#炼油',
        number: 'FIQ1157',
        tend: '1#脱硫送管网',
        unit: '吨',
        cumulant: '233521.64'
      }, {
        device: '4#炼油',
        number: 'FIQ1158',
        tend: '1#焦化收管网',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '4#炼油',
        number: 'FIQ3303',
        tend: '2#硫磺收管网',
        unit: '吨',
        cumulant: '252305.56'
      }, {
        device: '4#炼油',
        number: 'FIQ2117',
        tend: '2#酸水收管网',
        unit: '吨',
        cumulant: '555779.63'
      }, {
        device: '4#炼油',
        number: 'FIQ9402',
        tend: '2#焦化送管网',
        unit: '吨',
        cumulant: '320927.81'
      }, {
        device: '4#炼油',
        number: 'FIQ9401',
        tend: '2#焦化收管网',
        unit: '吨',
        cumulant: '2892858.75'
      }, {
        device: '4#炼油',
        number: 'FIQ8325',
        tend: '3#硫磺收管网',
        unit: '吨',
        cumulant: '2851343.75'
      }, {
        device: '5#炼油',
        number: 'FIQ30701',
        tend: '2#催化收管网',
        unit: '吨',
        cumulant: '2502833.00'
      }, {
        device: '5#炼油',
        number: 'FIQ01001',
        tend: '2#气分收管网',
        unit: '吨',
        cumulant: '3103.16'
      }, {
        device: '5#炼油',
        number: 'FIQ09301',
        tend: 'S Zorb收管网',
        unit: '吨',
        cumulant: '33366.02'
      }, {
        device: '6#炼油',
        number: 'FIQ40801',
        tend: '渣油加氢送管网',
        unit: '吨',
        cumulant: '8548984.00'
      }, {
        device: '6#炼油',
        number: 'FIQ13103',
        tend: '4#硫磺收管网',
        unit: '吨',
        cumulant: '5622528.00'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      data1: '',
      data2: '',
      value1: '',
      value2: '',
      dialogVisible: false
    }
  },
  mounted() {
  },
  methods: {
    dataHistory() {
      this.dialogVisible = true
      // this.line()
    },
    open() {
      setTimeout(() => {
        this.line()
      }, 1000)
    },
    line() {
      const myChart = this.$echarts.init(document.getElementById('lineTable'))
      myChart.setOption({
        title: {
          left: 'center',
          text: '历史趋势'
        },
        xAxis: {
          type: 'category',
          data: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10', '02-11', '02-12', '02-13', '02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21', '02-22', '02-23', '02-24', '02-25', '02-26', '02-27', '02-28']
        },
        yAxis: {
          type: 'value'
        },
        axisPointer: {
          show: 'auto'
        },
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            data: [223, 784, 356, 245, 793, 794, 631, 580, 704, 4378, 2657, 25263, 3636, 4577, 366, 36, 3263, 253, 2456, 478, 589, 87704, 45585, 37647, 3263, 3266, 489, 6585],
            type: 'line',
            smooth: true
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dataSelect{
  position: relative;
  width: 95;
  margin: 30px;
  height: 130px;
  .block{
    position: absolute;
    left: 150px;
    width: 40%;
    height: 100px;
     p{
      font-size: 18px;
      margin: 20px;
    }
  }
  .dataSummary{
    position: absolute;
    width: 40%;
    height: 100px;
    right: 150px;
    p{
      font-size: 18px;
      margin: 20px;
    }
    .input{
      float: left;
      margin: 15px;
      width: 150px;
      height: 40px;
    }
    .output{
      float: left;
      margin: 15px;
      width: 150px;
      height: 40px;
    }
  }
}
.TableCard{
  position: relative;
  margin: 30px;
  width: 95%;
}
#lineTable{
  position: relative;
  display: center;
  left: 6%;
  width: 90%;
  height: 300px;
}
</style>
