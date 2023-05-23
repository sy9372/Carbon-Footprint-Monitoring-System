<template>
  <div class="Plan">
    <p class="PlanTitile">年度碳排计划</p>
    <div id="dashboardbar" />
    <div id="dashboardcontrast" />
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
    this.contrast()
  },
  methods: {
    bar() {
      const myChart = this.$echarts.init(document.getElementById('dashboardbar'))
      myChart.setOption({
        title: {
          text: '年度碳排计划与执行情况'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params) {
            let tar
            if (params[1] && params[1].value !== '-') {
              tar = params[1]
            } else {
              tar = params[2]
            }
            return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
          }
        },
        legend: {
          data: ['增加', '减少']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: (function() {
            const list = []
            for (let i = 1; i <= 12; i++) {
              list.push('Mth' + i)
            }
            return list
          })()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292, 1592]
          },
          {
            name: '减少',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-', 300]
          },
          {
            name: '增加',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203, '-']
          }
        ]
      })
    },
    contrast() {
      const myChart = this.$echarts.init(document.getElementById('dashboardcontrast'))
      myChart.setOption({
        title: {
          text: '年装置碳排配额对标'
        },
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, '炼油'],
            [57.1, 78254, '烯烃'],
            [74.4, 41032, '芳烃'],
            [50.1, 12755, '涤纶'],
            [89.7, 20145, '化工1'],
            [68.1, 79146, '化工2'],
            [19.6, 91852, '化工3'],
            [10.6, 101852, '化工4'],
            [32.7, 20112, '化工5']
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Plan {
  position: relative;
  width: 100%;
  height: 100%;

  .PlanTitile {
    position: absolute;
    font-size: larger;
    top: 10px;
    float: left;
    left: 10px;
  }
  #dashboardbar{
    position: relative;
    background-color: white;
    top: 60px;
    width: 100%;
    height: 300px;
    float: left
    }
  #dashboardcontrast{
    position: relative;
    background-color:white;
    top: 80px;
    width: 100%;
    height: 300px;
    float: left;
  }
}
</style>
