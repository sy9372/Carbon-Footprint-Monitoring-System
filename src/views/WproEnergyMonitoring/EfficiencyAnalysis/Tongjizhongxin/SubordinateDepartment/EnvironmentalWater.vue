<template>
  <div class="EnvironmentalWaterBox">
    <!-- 这里是环保水务 -->
    <div class="ewBox">
      <img class="ewImage" src="@/icons/image/lowpressure/Huanbaoshuiwu.png">
    </div>
    <div class="ewDataSelect">
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
      <div class="ewDataSummary">
        <p>装置蒸汽累计总量</p>
        <div class="input">收蒸汽网管: {{ data1 }}</div>
        <div class="output">发蒸汽网管: {{ data2 }}</div>
      </div>
    </div>
    <el-card class="ewTableCard">
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
      <div id="ewLineTable" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        device: '遍式氧化车间',
        number: 'FIQ5412',
        tend: '',
        unit: '吨',
        cumulant: '152496.44'
      }, {
        device: '污水处理车间',
        number: 'FIQ9764',
        tend: '',
        unit: '千克',
        cumulant: '59006.97'
      }, {
        device: '西区食堂',
        number: 'FIQ2405',
        tend: '',
        unit: '千克',
        cumulant: '70513.71'
      }, {
        device: '西区浴室',
        number: 'FIQ7102',
        tend: '',
        unit: '吨',
        cumulant: 'N/A'
      }, {
        device: '东区浴室',
        number: 'FIQ7101',
        tend: '',
        unit: '吨',
        cumulant: 'N/A'
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
      const myChart = this.$echarts.init(document.getElementById('ewLineTable'))
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
.ewBox{
  position: relative;
  width: 95%;
  height: 720px;
  margin: 30px;
  .ewImage{
    position: absolute;
    width: 100%;
    text-align: center;
  }
}
.ewDataSelect{
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
  .ewDataSummary{
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
.ewTableCard{
  position: relative;
  top: 50px;
  margin: 30px;
  width: 95%;
}
#ewLineTable{
    position: relative;
    display: center;
    left: 6%;
    width: 90%;
    height: 300px;
}
</style>
