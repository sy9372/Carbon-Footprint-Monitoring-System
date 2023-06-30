<template>
  <div class="Monitor">
    <!-- 全厂能效指标监控 -->
    <el-col :span="12">
      <el-card id="chart1" />
      <el-card id="chart2" />
    </el-col>
    <el-col :span="12">
      <el-card id="chart3" />
      <el-card id="chart4" />
    </el-col>
    <div class="monitorTable">
      <p class="monitorTitle">关键指标数据表</p>
      <el-table
        :data="tableData"
        style="width: 100%"
        :sort-change="{prop: 'number', order: 'descending'}"
      >
        <el-table-column
          prop="number"
          label="装置号"
          width="150"
        />
        <el-table-column
          prop="temperature"
          label="温度/℃"
          width="150"
          sortable
        />
        <el-table-column
          prop="pressure"
          label="压力/kPa"
          sortable
          width="150"
        />
        <el-table-column
          prop="oxygen"
          label="氧含量/%"
          sortable
          width="150"
        />
        <el-table-column
          prop="refluxratio"
          label="回流比/%"
          sortable
          width="150"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tableData: [{
        number: '01',
        temperature: '90',
        pressure: '3',
        oxygen: '100',
        refluxratio: '40'
      }, {
        number: '02',
        temperature: '100',
        pressure: '2',
        oxygen: '90',
        refluxratio: '30'
      }, {
        number: '03',
        temperature: '80',
        pressure: '1',
        oxygen: '80',
        refluxratio: '50'
      }, {
        number: '04',
        temperature: '110',
        pressure: '4',
        oxygen: '95',
        refluxratio: '120'
      }]
    }
  },

  mounted() {
    this.line1()
    this.line2()
    this.line3()
    this.line4()
  },

  methods: {
    line1() {
      const myChart = this.$echarts.init(document.getElementById('chart1'))
      myChart.setOption({
        title: {
          text: '温度'
        },
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
      const myChart = this.$echarts.init(document.getElementById('chart2'))
      myChart.setOption({
        title: {
          text: '氧含量'
        },
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
      const myChart = this.$echarts.init(document.getElementById('chart3'))
      myChart.setOption({
        title: {
          text: '压力'
        },
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
    line4() {
      const myChart = this.$echarts.init(document.getElementById('chart4'))
      myChart.setOption({
        title: {
          text: '回流比'
        },
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
    sortMethod(a, b) {
      if (a - b > 0) {
        return a
      } else {
        return b
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#chart1{
  position: relative;
  width: 90%;
  height: 300px;
  margin: 30px;
  padding: auto;
}
#chart2{
  position: relative;
  width: 90%;
  height: 300px;
  margin: 30px;
  padding: auto;
}
#chart3{
  position: relative;
  width: 90%;
  height: 300px;
  margin: 30px;
}
#chart4{
  position: relative;
  width: 90%;
  height: 300px;
  margin: 30px;
}
.monitorTable{
  position: relative;
  height: 1500px;
  width: 90%;
  top:50px;
  left: 20px;
  margin: 20px;
  padding: auto;
  .monitorTitle{
    position: relative;
    left:25%;

  }
}
</style>
