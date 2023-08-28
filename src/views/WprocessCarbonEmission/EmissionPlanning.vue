<template>
  <div class="Plan">
    <p class="PlanTitile">年度碳排计划</p>
    <div id="dashboardbar" />
    <div id="dashboardPercentage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.bar()
    this.percentage()
  },
  methods: {
    bar() {
      const myChart = this.$echarts.init(document.getElementById('dashboardbar'))
      myChart.setOption({
        title: {
          text: '年度碳排计划与执行情况',
          subtext: '累计碳排放量'
        },
        tooltip: {
          trigger: 'axis'

        },
        legend: {
          data: ['计划值', '实际值']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '计划值',
            type: 'bar',
            data: [
              50.0, 100.0, 150.0, 200.0, 250.0, 300.0, 350.0, 400.0, 450.0, 500.0, 550.0, 600.0
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }
            // markLine: {
            // data: [{ type: 'average', name: 'Avg' }]
            // }
          },
          {
            name: '实际值',
            type: 'bar',
            data: [
              58.6, 110.4, 159.7, 214.5, 262.7, 310.8, 364.6, 422.2, 468.7, 513.3, 570.5, 622.3
            ],
            markPoint: {

              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }
            // markLine: {
            //   data: [{ type: 'average', name: 'Avg' }]
            // }
          }
        ]
      })
    },
    percentage() {
      const myChart = this.$echarts.init(document.getElementById('dashboardPercentage'))
      myChart.setOption({
        title: {
          text: '装置碳排配额对标'
        },
        color: ['#5470c6'], // 设置柱状图的颜色
        textStyle: {
          color: '#828282'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          // 设置x轴显示几段
          min: 0,
          max: 150,
          interval: 50,
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: '#t3e67f0'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['炼油', '烯烃', '芳烃', '乙烯', '丙烯'],
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: '#e0e0e0'
            }
          },
          inside: true,
          textStyle: {
            color: '#000'
          }
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#f1f1f1', // 定义柱形的背景色
                barBorderRadius: [0, 10, 10, 0] // 定义背景柱形的圆角
              }
            },
            barGap: '-100%', // 设置柱形重合的重要步骤
            data: [150, 150, 150, 150, 150],
            animation: false, // 关闭动画效果
            barWidth: '22px' // 设置柱形宽度
          },
          {
            type: 'bar',
            data: [65, 75, 85, 110, 130],
            barWidth: '22px',
            barGap: '-100%', // 设置柱形重合的重要步骤
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0] // 定义柱形的圆角
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

.PlanTitile {
  position: relative;
  font-size: larger;
  width: 50%;
  padding: auto;
}

#dashboardbar {
  position: relative;
  background-color: white;
  width: 100%;
  height: 300px;
  margin: 50px 0;
}

#dashboardPercentage {
  position: relative;
  background-color: white;
  //top: 130px;
  width: 100%;
  height: 300px;
  margin: 20px 0;
}

</style>
