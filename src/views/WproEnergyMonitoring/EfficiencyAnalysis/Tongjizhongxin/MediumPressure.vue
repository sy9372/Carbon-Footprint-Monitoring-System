<template>
  <div>
    <!-- 中压蒸汽 -->
    <div class="medpressureData">
      <div v-for="item in dataObj" :key="item.name" class="medpressureData1">
        <p class="medTitle">{{ item.name }}</p>
        <div class="medData">
          <p>{{ item.num }}</p>
        </div>
      </div>
    </div>
    <div id="medpressureLine" />
    <div class="medTab"> 
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="item in runLabelData" :key="item.value" :label="item.name">{{item.name}}</el-tab-pane>
      </el-tabs>
    </div>
    <el-card class="medBlockLine"> 
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in runLabelData" :key="item.value">
          <h3 class="medium">{{ item.name }}</h3>
          <div :id="item.value" style="width: 100%; height: 300px; background-color: aliceblue;" />
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <!-- <el-card class="blockLine">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="item in runLabelData" :key="item.value">
          <div :id="item.value">{{ item.name }}</div>
        </el-carousel-item>
      </el-carousel>
    </el-card> -->
    <el-card class="medpressureTable">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="department"
          label="部门"
          width="180"
        />
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
          prop="flow"
          label="流量(t/h)"
        />
        <el-table-column
          prop="calorific"
          label="热值(GJ/h)"
        />
        <el-table-column
          prop="temperature"
          label="温度(℃)"
        />
        <el-table-column
          prop="pressure"
          label="压力(Mpa)"
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
      dataObj: [
        {
          name: '中压蒸汽产汽累积量',
          num: '10t/h'
        },
        {
          name: '中压蒸汽耗汽累积量',
          num: '10t/h'
        },
        {
          name: '中压蒸汽损耗量',
          num: '0.5t/h'
        },
        {
          name: '中压蒸汽损耗率',
          num: '5%'
        }
      ],
      tableData: [
        {
          department: '涤纶部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '芳烃',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '化工部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '炼油/烯烃',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }
      ],
      runLabelData: [
        {
          value: 'Chuyunbu',
          name: '储运部'
        },
        {
          value: 'Gonggongshiyebu',
          name: '公共事业部'
        },
        {
          value: 'Dianqiyibiaozhongxin',
          name: '电气仪表中心'
        },
        {
          value: 'Fangting',
          name: '芳烃'
        },
        {
          value: 'Huanbaoshuiwu',
          name: '环保水务'
        },
        {
          value: 'Jinglunbu',
          name: '腈纶部'
        },
        {
          value: 'LianyouXiting',
          name: '炼油、烯烃'
        },
        {
          value: 'Redianbu',
          name: '热电部'
        },
        {
          value: 'Dilunbu',
          name: '涤纶部'
        }
      ],
      dialogVisible: false,
      activeName: 'Chuyunbu'
    }
  },
  mounted() {
    setTimeout(() => {
      this.line1()
      this.line2()
      this.line3()
    },800)
    this.line()
  },
  methods: {
    line() {
      const myChart = this.$echarts.init(document.getElementById('medpressureLine'))
      myChart.setOption({
        title: {
          text: '产耗趋势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} t/h'
          }
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [10, 12, 13, 11, 13, 12, 14],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [8, 10, 9, 10, 8, 9, 11],
            markPoint: {
              data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
      })
    },
    historyline() {
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
    },
    open() {
      setTimeout(() => {
        this.historyline()
      }, 1000)
    },
    dataHistory() {
      this.dialogVisible = true
    },
    handleClick(tab, event) {
        console.log(tab, event);
      },
    line1() {
      const myChart = this.$echarts.init(document.getElementById('Chuyunbu'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['装置1', '装置2', '装置3', '装置4', '装置5']
        },
        grid: {
          top: '20%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '装置1',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '装置2',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '装置3',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '装置4',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '装置5',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    line2() {
      const myChart = this.$echarts.init(document.getElementById('Gonggongshiyebu'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['装置1', '装置2', '装置3', '装置4', '装置5']
        },
        grid: {
          top: '20%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '装置1',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '装置2',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '装置3',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '装置4',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '装置5',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    line3() {
      const myChart = this.$echarts.init(document.getElementById('Dianqiyibiaozhongxin'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['装置1', '装置2', '装置3', '装置4', '装置5']
        },
        grid: {
          top: '20%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '装置1',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '装置2',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '装置3',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '装置4',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '装置5',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.medpressureData{
  position: relative;
  width: 95%;
  height: 150px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .medpressureData1{
  position: relative;
  width: 15%;
  height: 80%;
  float: left;
  top: 15px;
  margin-left: 50px;
  }
  .medTitle {
    position: absolute;
    top: 20px;
    left: 20px;
    color: rgb(51, 51, 52);
    font-size: 15px;
  }
  .medData {
    position: absolute;
    top: 70px;

    p {
      float: left;
      margin-left: 18px;
      color: rgb(209, 18, 18);
      font-size: medium;
    }
  }
}
#medpressureLine {
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 20px;
  top: 30px;
  width: 95%;
  height: 400px;
}
.medTab{
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 20px;
  top: 30px;
  width: 95%;
  height: 400px;
}
.medBlockLine{
  position: relative;
  width: 95%;
  height: 400px;
  margin: 20px;
  top: 30px;
}
/* .blockLine{
  position: relative;
  width: 95%;
  height: 450px;
  top: 30px;
  margin: 20px;
  #Chuyunbu{
    position: absolute;
    width: 1200px;
    height: 400px;
  }
  #Gonggongshiyebu{
    position: absolute;
    width: 1200px;
    height: 400px;
  }
  #Dianqiyibiaozhongxin{
    position: absolute;
    width: 1200px;
    height: 400px;
  }
} */
.medpressureTable{
  position: relative;
  width: 95%;
  margin: 20px;
  top: 60px;
}
#lineTable{
  position: relative;
  display: center;
  left: 6%;
  width: 90%;
  height: 300px;
}
</style>

