<template>
  <div>
    <p>烯烃部-加热炉能效监控</p>
    <el-card class="box-card1">
      <el-row :gutter="20">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-col :span="12">
            <div class="zhuangzhi1">
              <el-collapse-item title="装置1" name="1">
                <div><img src="@/icons/image/LYJiarelu/LYjiarelu1.png" width="95%"></div>
                <div>能耗表
                  <el-table
                    :data="tableData"
                    style="width: 95%"
                    height="300"
                  >
                    <el-table-column
                      fixed
                      prop="date"
                      label="月份"
                      width="90"
                    />
                    <el-table-column
                      prop="total"
                      label="总量（标油）/t"
                      width="140"
                    />
                    <el-table-column
                      prop="energy1"
                      label="燃料气/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy2"
                      label="1.3Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy3"
                      label="3.5Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy4"
                      label="电力/t"
                      width="120"
                    />

                  </el-table>
                </div>
                <div id="EnergyPie1" />
              </el-collapse-item>
            </div>
            <div class="zhuangzhi3">
              <el-collapse-item title="装置3" name="3">
                <div><img src="@/icons/image/LYJiarelu/LYjiarelu3.png" width="95%"></div>
                <div>能耗表
                  <el-table
                    :data="tableData"
                    style="width: 95%"
                    height="300"
                  >
                    <el-table-column
                      fixed
                      prop="date"
                      label="月份"
                      width="90"
                    />
                    <el-table-column
                      prop="total"
                      label="总量（标油）/t"
                      width="140"
                    />
                    <el-table-column
                      prop="energy1"
                      label="燃料气/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy2"
                      label="1.3Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy3"
                      label="3.5Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy4"
                      label="电力/t"
                      width="120"
                    />

                  </el-table>
                </div>
                <div id="EnergyPie3" />
              </el-collapse-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="zhuangzhi2">
              <el-collapse-item title="装置2" name="2">
                <div><img src="@/icons/image/LYJiarelu/LYjiarelu2.png" width="95%"></div>
                <div>能耗表
                  <el-table
                    :data="tableData"
                    style="width: 95%"
                    height="300"
                  >
                    <el-table-column
                      fixed
                      prop="date"
                      label="月份"
                      width="90"
                    />
                    <el-table-column
                      prop="total"
                      label="总量（标油）/t"
                      width="140"
                    />
                    <el-table-column
                      prop="energy1"
                      label="燃料气/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy2"
                      label="1.3Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy3"
                      label="3.5Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy4"
                      label="电力/t"
                      width="120"
                    />

                  </el-table>
                </div>
                <div id="EnergyPie2" />
              </el-collapse-item>
            </div>
            <div class="zhuangzhi4">
              <el-collapse-item title="装置4" name="4">
                <div><img src="@/icons/image/LYJiarelu/LYjiarelu4.png" width="95%"></div>
                <div>能耗表
                  <el-table
                    :data="tableData"
                    style="width: 95%"
                    height="300"
                  >
                    <el-table-column
                      fixed
                      prop="date"
                      label="月份"
                      width="90"
                    />
                    <el-table-column
                      prop="total"
                      label="总量（标油）/t"
                      width="140"
                    />
                    <el-table-column
                      prop="energy1"
                      label="燃料气/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy2"
                      label="1.3Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy3"
                      label="3.5Mpa蒸汽/t"
                      width="120"
                    />
                    <el-table-column
                      prop="energy4"
                      label="电力/t"
                      width="120"
                    />
                  </el-table>
                </div>
                <div id="EnergyPie4" />
              </el-collapse-item>
            </div>
          </el-col>
        </el-collapse>
      </el-row>
    </el-card>
    <el-card class="box-card2">
      <el-row :gutter="20">
        <el-col :span="12">
          <div id="EnergyPie" />
        </el-col>
        <el-col :span="12">
          <div id="EnergyLine" />
        </el-col>
      </el-row>
      <div class="zbTable">
        <p class="zbTitle">关键指标数据表</p>
        <el-table
          :data="tableData1"
          style="width: 75%"
          :sort-change="{prop: 'number', order: 'descending'}"
        >
          <el-table-column
            prop="number"
            label="装置"
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
    </el-card></div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      tableData: [{
        date: '1月',
        total: '1000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '2月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '3月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '4月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '5月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '6月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }, {
        date: '7月',
        total: '10000',
        energy1: '10',
        energy2: '10',
        energy3: '10',
        energy4: '10'
      }],
      tableData1: [{
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
    this.pie()
    this.line()
    this.pie1()
    this.pie2()
    this.pie3()
    this.pie4()
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    pie() {
      const myChart = this.$echarts.init(document.getElementById('EnergyPie'))
      myChart.setOption({
        title: {
          text: '各个装置能耗占比',
          subtext: '炼油部-加热炉',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1000, name: '装置1' },
              { value: 700, name: '装置2' },
              { value: 500, name: '装置3' },
              { value: 400, name: '装置4' },
              { value: 200, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    line() {
      const myChart = this.$echarts.init(document.getElementById('EnergyLine'))
      myChart.setOption({
        title: {
          text: '能效趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['装置1', '装置2', '装置3', '装置4', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '装置1',
            type: 'line',
            stack: 'Total',
            data: [80, 132, 101, 134, 90, 230, 210]
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
            name: '其他',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    pie1() {
      const myChart = this.$echarts.init(document.getElementById('EnergyPie1'))
      myChart.setOption({
        title: {
          text: '各类能源消耗量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1000, name: '燃料气' },
              { value: 700, name: '1.3Mpa蒸汽' },
              { value: 500, name: '3.5Mpa蒸汽' },
              { value: 400, name: '电力' },
              { value: 200, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    pie2() {
      const myChart = this.$echarts.init(document.getElementById('EnergyPie2'))
      myChart.setOption({
        title: {
          text: '各类能源消耗量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1000, name: '燃料气' },
              { value: 700, name: '1.3Mpa蒸汽' },
              { value: 500, name: '3.5Mpa蒸汽' },
              { value: 400, name: '电力' },
              { value: 200, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    pie3() {
      const myChart = this.$echarts.init(document.getElementById('EnergyPie3'))
      myChart.setOption({
        title: {
          text: '各类能源消耗量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1000, name: '燃料气' },
              { value: 700, name: '1.3Mpa蒸汽' },
              { value: 500, name: '3.5Mpa蒸汽' },
              { value: 400, name: '电力' },
              { value: 200, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    pie4() {
      const myChart = this.$echarts.init(document.getElementById('EnergyPie4'))
      myChart.setOption({
        title: {
          text: '各类能源消耗量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1000, name: '燃料气' },
              { value: 700, name: '1.3Mpa蒸汽' },
              { value: 500, name: '3.5Mpa蒸汽' },
              { value: 400, name: '电力' },
              { value: 200, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.zhuangzhi1 {
  position: relative;
  margin: 20px;
  width: 95%;
}
.zhuangzhi2 {
  position: relative;
  margin: 20px;
  width: 95%;
}
.zhuangzhi3 {
  position: relative;
  margin: 20px;
  width: 95%;
}
.zhuangzhi4 {
  position: relative;
  margin: 20px;
  width: 95%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.box-card1 {
  margin:30px;
  width: 95%;
}
.box-card2 {
  margin:30px;
  height: 1000px;
  width: 95%;
}
#EnergyPie{
  position: relative;
  height: 500px;
  width: 100%;
  top:30px;
}
#EnergyLine{
  position: relative;
  height: 450px;
  width: 100%;
  top:30px;
}
#EnergyPie1{
  position: relative;
  height: 300px;
  width: 500px;
  top:30px;
}
#EnergyPie2{
  position: relative;
  height: 300px;
  width: 500px;
  top:30px;
}
#EnergyPie3{
  position: relative;
  height: 300px;
  width: 500px;
  top:30px;
}
#EnergyPie4{
  position: relative;
  height: 300px;
  width: 500px;
  top:30px;
}
.zbTable{
  position: relative;
  height: 1500px;
  width: 90%;
  top:30px;
  left: 15px;
  margin: 20px;
  padding: auto;
  .zbTitle{
    position: relative;
    left:30%;

  }
}
</style>
