<template>
  <div class="RefinedOlefinsBox">
    <!-- 这里是炼油烯烃 -->
    <div class="roBox">
      <img class="roImage1" src="@/icons/image/lowpressure/LianyouXiting1.png">
      <img class="roImage2" src="@/icons/image/lowpressure/LianyouXiting2.png">
      <img class="roImage3" src="@/icons/image/lowpressure/LianyouXiting3.png">
      <img class="roImage4" src="@/icons/image/lowpressure/LianyouXiting4.png">
    </div>
    <div class="roDataSelect">
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
      <div class="roDataSummary">
        <p>装置蒸汽累计总量</p>
        <div class="input">收蒸汽网管: {{ data1 }}</div>
        <div class="output">发蒸汽网管: {{ data2 }}</div>
      </div>
    </div>
    <el-card class="roTableCard">
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
      <div id="roLineTable" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        device: '炼油部2#催化裂化',
        number: 'FIQ5412',
        tend: '',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '炼油部C2回收',
        number: 'FIQ9764',
        tend: '',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '炼油部S-Zorb',
        number: 'FIQ2405',
        tend: '',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '炼油部',
        number: 'FIQ7102',
        tend: '',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '炼油部4#硫磺',
        number: 'FIQ7101',
        tend: '',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '炼油部2#常减压',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部储藏罐区',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '联合车间',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '储运部七车间',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }, {
        device: '储运部一车间',
        number: 'FIQ5412',
        tend: '2#常减压收蒸汽管网',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '储运部二车间',
        number: 'FIQ9764',
        tend: '3#常减压收蒸汽管网',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '储运部三车间',
        number: 'FIQ2405',
        tend: '3#柴油加氢收蒸汽管网',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '储运部四车间',
        number: 'FIQ7102',
        tend: '发蒸汽管网（南节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部五车间',
        number: 'FIQ7101',
        tend: '收蒸汽管网（北节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部六车间',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部储藏罐区',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '联合车间',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '储运部七车间',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }, {
        device: '储运部一车间',
        number: 'FIQ5412',
        tend: '2#常减压收蒸汽管网',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '储运部二车间',
        number: 'FIQ9764',
        tend: '3#常减压收蒸汽管网',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '储运部三车间',
        number: 'FIQ2405',
        tend: '3#柴油加氢收蒸汽管网',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '储运部四车间',
        number: 'FIQ7102',
        tend: '发蒸汽管网（南节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部五车间',
        number: 'FIQ7101',
        tend: '收蒸汽管网（北节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部六车间',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部储藏罐区',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '联合车间',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '储运部七车间',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }, {
        device: '储运部一车间',
        number: 'FIQ5412',
        tend: '2#常减压收蒸汽管网',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '储运部二车间',
        number: 'FIQ9764',
        tend: '3#常减压收蒸汽管网',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '储运部三车间',
        number: 'FIQ2405',
        tend: '3#柴油加氢收蒸汽管网',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '储运部四车间',
        number: 'FIQ7102',
        tend: '发蒸汽管网（南节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部五车间',
        number: 'FIQ7101',
        tend: '收蒸汽管网（北节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部六车间',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部储藏罐区',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '联合车间',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '储运部七车间',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }, {
        device: '储运部一车间',
        number: 'FIQ5412',
        tend: '2#常减压收蒸汽管网',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '储运部二车间',
        number: 'FIQ9764',
        tend: '3#常减压收蒸汽管网',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '储运部三车间',
        number: 'FIQ2405',
        tend: '3#柴油加氢收蒸汽管网',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '储运部四车间',
        number: 'FIQ7102',
        tend: '发蒸汽管网（南节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部五车间',
        number: 'FIQ7101',
        tend: '收蒸汽管网（北节点）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部六车间',
        number: 'FIQ2140',
        tend: '事故收蒸汽管网（北）',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '储运部储藏罐区',
        number: 'FIQ4411',
        tend: '重整预加氢送管网',
        unit: '吨',
        cumulant: '160099.27'
      }, {
        device: '联合车间',
        number: 'FIQ6402',
        tend: '中压加氢送外界',
        unit: '吨',
        cumulant: '62493.25'
      }, {
        device: '储运部七车间',
        number: 'FIQ7414',
        tend: '航煤/2#脱硫收管网',
        unit: '吨',
        cumulant: '8.60'
      }],
      data1: '',
      data2: '',
      dialogVisible: false
    }
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
      const myChart = this.$echarts.init(document.getElementById('roLineTable'))
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
.roBox{
  position: relative;
  width: 95%;
  height: 3200px;
  margin: 30px;
  .roImage1{
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .roImage2{
    position: absolute;
    top: 800px;
    width: 100%;
    text-align: center;
  }
  .roImage3{
    position: absolute;
    top: 1600px;
    width: 100%;
    text-align: center;
  }
  .roImage4{
    position: absolute;
    top: 2400px;
    width: 100%;
    text-align: center;
  }
}
.roDataSelect{
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
  .roDataSummary{
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
.roTableCard{
  position: relative;
  top: 50px;
  margin: 30px;
  width: 95%;
}
#roLineTable{
    position: relative;
    display: center;
    left: 6%;
    width: 90%;
    height: 300px;
}
</style>
