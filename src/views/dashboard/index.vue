<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ title }}</div>
    <div class="dashboard1">
      <div v-for="item in dataObj" :key="item.name1" class="dashboard1-1">
        <img class="daImg" :src="item.icon1">
        <p class="daTitle">{{ item.name1 }}</p>
        <div class="daData">
          <p>{{ item.num1 }}</p>
          <img :src="item.icon2" width="20">
          <p>{{ item.num2 }}</p>
        </div>
      </div>
    </div>
    <div id="dashboardTable" />
    <div id="dashboardPie" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      title: '上海石化碳足迹监控系统',
      dataObj: [
        {
          name1: '今日总能耗（标油吨）',
          icon1: require('@/icons/image/deleption.png'),
          num1: '1000',
          icon2: require('@/icons/image/uparrow.png'),
          num2: '1%'
        },
        {
          name1: '今日总碳排量（吨）',
          icon1: require('@/icons/image/deemission.png'),
          num1: '500',
          icon2: require('@/icons/image/downarrow.png'),
          num2: '5%'
        },
        {
          name1: '本月总能耗（标油吨）',
          icon1: require('@/icons/image/deleption.png'),
          num1: '1000',
          icon2: require('@/icons/image/uparrow.png'),
          num2: '1%'
        },
        {
          name1: '本月总碳排量（吨）',
          icon1: require('@/icons/image/deemission.png'),
          num1: '500',
          icon2: require('@/icons/image/downarrow.png'),
          num2: '5%'
        },
        {
          name1: '本月总经济效益（元）',
          icon1: require('@/icons/image/deeconomic.png'),
          num1: '1000',
          icon2: require('@/icons/image/uparrow.png'),
          num2: '1%'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    this.line()
    this.pie()
  },
  methods: {
    line() {
      const data = [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73], ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245], ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111], ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128], ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106], ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73], ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107], ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106], ['2000-07-08', 107], ['2000-07-09', 66], ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64], ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83], ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]]
      const dateList = data.map(function(item) {
        return item[0]
      })
      const valueList = data.map(function(item) {
        return item[1]
      })
      const myChart = this.$echarts.init(document.getElementById('dashboardTable'))
      myChart.setOption({
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          },
          {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          }
        ],
        title: [
          {
            left: 'center',
            text: '日装置能耗'
          },
          {
            top: '55%',
            left: 'center',
            text: '日碳排趋势'
          }
        ],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [
          {
            data: dateList
          },
          {
            data: dateList,
            gridIndex: 1
          }
        ],
        yAxis: [
          {},
          {
            gridIndex: 1
          }
        ],
        grid: [
          {
            bottom: '60%'
          },
          {
            top: '60%'
          }
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList
          },
          {
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
          }
        ]
      })
    },
    pie() {
      const data = [
        {
          name: 'Apples',
          value: 70
        },
        {
          name: 'Strawberries',
          value: 68
        },
        {
          name: 'Bananas',
          value: 48
        },
        {
          name: 'Oranges',
          value: 40
        },
        {
          name: 'Pears',
          value: 32
        },
        {
          name: 'Pineapples',
          value: 27
        },
        {
          name: 'Grapes',
          value: 18
        }
      ]
      const myChart = this.$echarts.init(document.getElementById('dashboardPie'))
      myChart.setOption({
        title: [
          {
            text: 'Pie label alignTo',
            left: 'center'
          },
          {
            subtext: 'alignTo: "none" (default)',
            left: '16.67%',
            top: '75%',
            textAlign: 'center'
          },
          {
            subtext: 'alignTo: "labelLine"',
            left: '50%',
            top: '75%',
            textAlign: 'center'
          },
          {
            subtext: 'alignTo: "edge"',
            left: '83.33%',
            top: '75%',
            textAlign: 'center'
          }
        ],
        series: [
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
              position: 'outer',
              alignTo: 'none',
              bleedMargin: 5
            },
            left: 0,
            right: '66.6667%',
            top: 0,
            bottom: 0
          },
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
              position: 'outer',
              alignTo: 'labelLine',
              bleedMargin: 5
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
          },
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
              position: 'outer',
              alignTo: 'edge',
              margin: 20
            },
            left: '66.6667%',
            right: 0,
            top: 0,
            bottom: 0
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard1 {
  width: 100%;
  height: 100px;

  .dashboard1-1 {
    position: relative;
    top: 30px;
    width: 15%;
    height: 100%;
    float: left;
    margin-left: 50px;
    background-color: rgb(38, 133, 171);

    .daTitle {
      position: absolute;
      top: 20px;
      left: 20px;
      color: aliceblue;
      font-size: 16px;
    }

    .daImg {
      position: absolute;
      margin-left: 15px;
      top: 45px;
      width: 50px;
    }

    .daData {
      position: absolute;
      top: 70px;
      margin-left: 70px;

      p {
        float: left;
        margin-left: 15px;
        color: aliceblue;
        font-size: medium;
      }

      img {
        float: left;
        margin-left: 15px;
      }
    }
  }
}

#dashboardTable {
  position: relative;
  top: 100px;
  left: -10px;
  width: 100%;
  height: 500px;
}
#dashboardPie{
  position: relative;
  left: -20px;
  top:100px;
  width: 100%;
  height: 400px;
}

</style>
