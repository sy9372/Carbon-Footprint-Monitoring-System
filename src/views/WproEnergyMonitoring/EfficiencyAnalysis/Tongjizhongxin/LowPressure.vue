<template>
  <div class="lowpressure">
    <!-- 低压蒸汽 -->
    <div class="lowpressureData">
      <div v-for="item in dataObj" :key="item.name" class="lowpressureData1">
        <p class="lowTitle">{{ item.name }}</p>
        <div class="lowData">
          <p>{{ item.num }}</p>
        </div>
      </div>
    </div>
    <div id="lowpressureLine" />
    <div v-for="item in departmentData" :key="item.value" class="dataTab">
      <el-button plain class="buttonChange" @click="redirect(item.path)">{{ item.name }}</el-button>
    </div>
    <el-card class="lowpressureTable">
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
          name: '低压蒸汽产汽累积量',
          num: '10t/h'
        },
        {
          name: '低压蒸汽耗汽累积量',
          num: '10t/h'
        },
        {
          name: '低压蒸汽损耗量',
          num: '0.5t/h'
        },
        {
          name: '低压蒸汽损耗率',
          num: '5%'
        }
      ],
      departmentData: [
        {
          value: 'Chuyunbu',
          name: '储运部',
          path: '/tongjizhongxin/lowpressure/lowchuyun',
          icon: ''
        },
        {
          value: 'Gonggongshiyebu',
          name: '公共事业部',
          path: '/tongjizhongxin/lowpressure/publicdepartment',
          icon: ''
        },
        {
          value: 'Dianqiyibiaozhongxin',
          name: '电气仪表中心',
          path: '/tongjizhongxin/lowpressure/electricalcenter',
          icon: ''
        },
        {
          value: 'Fangting',
          name: '芳烃',
          path: '/tongjizhongxin/lowpressure/aromatics',
          icon: ''
        },
        {
          value: 'Huanbaoshuiwu',
          name: '环保水务',
          path: '/tongjizhongxin/lowpressure/environmentalwater',
          icon: ''
        },
        {
          value: 'Jinglunbu',
          name: '腈纶部',
          path: '/tongjizhongxin/lowpressure/acrylicfabric',
          icon: ''
        },
        {
          value: 'LianyouXiting',
          name: '炼油、烯烃',
          path: '/tongjizhongxin/lowpressure/refinedolefins',
          icon: ''
        },
        {
          value: 'Redianbu',
          name: '热电部',
          path: '/tongjizhongxin/lowpressure/heatelectricity',
          icon: ''
        },
        {
          value: 'Dilunbu',
          name: '涤纶部',
          path: '/tongjizhongxin/lowpressure/dacrondepartment',
          icon: ''
        }
      ],
      tableData: [
        {
          department: '储运部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '公用事业部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '电气仪表中心',
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
          department: '环保水务',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '晴纶部',
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
        }, {
          department: '热电部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }, {
          department: '涤纶部',
          device: '',
          number: '',
          flow: '',
          calorific: '',
          temperature: '',
          pressure: ''
        }
      ],
      dialogVisible: false
    }
  },
  mounted() {
    this.line()
  },
  methods: {
    redirect(param) {
      console.log('success')
      console.log(param)
      this.$router.push({ path: param })
    },
    line() {
      const myChart = this.$echarts.init(document.getElementById('lowpressureLine'))
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
    }
  }
}
</script>

<style lang="scss" scoped>
.lowpressureData{
  position: relative;
  width: 95%;
  height: 150px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .lowpressureData1{
  position: relative;
  width: 15%;
  height: 80%;
  float: left;
  top: 15px;
  margin-left: 50px;
  }
  .lowTitle {
    position: absolute;
    top: 20px;
    left: 20px;
    color: rgb(51, 51, 52);
    font-size: 15px;
  }
  .lowData {
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
#lowpressureLine {
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 20px;
  top: 30px;
  width: 95%;
  height: 400px;
}
.lowpressureTable{
  position: relative;
  width: 95%;
  margin: 20px;
  top: 60px;
}
.dataTab{
  position: relative;
  top: 20px;
  margin-top: 30px;
  margin-left: 20px;
  float: left;
  width: 120px;
  height: 50px;
  .buttonChange{
    position: absolute;
    width: 110px;
    height: 50px;
  }
}
#lineTable{
  position: relative;
  display: center;
  left: 6%;
  width: 90%;
  height: 300px;
}
</style>

