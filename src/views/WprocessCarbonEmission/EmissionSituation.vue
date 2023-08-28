<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">{{ title }}</div> -->
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
    <el-card class="cardMap">
      <div class="mapLY" @click="Lianyoubu">
        <p style="text-align: center;">炼油部</p>
        <p style="text-align: center;">data</p>
      </div>
      <div class="mapXT" @click="Xitingbu">
        <p style="text-align: center;">烯烃部</p>
        <p style="text-align: center;">data</p>
      </div>
      <div class="mapFTHG" @click="Fangtinghuagong">
        <p style="text-align: center;">芳烃化工部</p>
        <p style="text-align: center;">data</p>
      </div>
      <div class="mapFTLY" @click="Fangtinglianyou">
        <p style="text-align: center;">芳烃炼油部</p>
        <p style="text-align: center;">data</p>
      </div>
      <div class="mapCY" @click="Chuyunbu">
        <p style="text-align: center;">储运部</p>
        <p style="text-align: center;">data</p>
      </div>
    </el-card>
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
      title: '全流程碳排情况',
      importdata: [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73], ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245], ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111], ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128], ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106], ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73], ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107], ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106], ['2000-07-08', 107], ['2000-07-09', 66], ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64], ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83], ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]],
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
    this.line(this.importdata)
    this.pie()
  },
  methods: {
    line(data1) {
      const dateList = data1.map(function(item) {
        return item[0]
      })
      const valueList = data1.map(function(item) {
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
      const data = [{
        name: '抽余碳四B',
        value: '120.123'
      },
      {
        name: '甲醇',
        value: '21.5049'
      },
      {
        name: '气制氢气B',
        value: '0'
      },
      {
        name: '抽甲基叔丁基醚B',
        value: '81.0058'
      },
      {
        name: '丁烯-1B',
        value: '26.5249'
      },
      {
        name: '醚后液化石油气B',
        value: '39.5156'
      }]
      const myChart = this.$echarts.init(document.getElementById('dashboardPie'))
      myChart.setOption({
        title: [
          {
            text: '装置碳排占比',
            left: 'center'
          },
          {
            subtext: '1#MTBE',
            left: '16.67%',
            top: '50%',
            textAlign: 'center'
          },
          {
            subtext: '2#常减压装置',
            left: '50%',
            top: '50%',
            textAlign: 'center'
          },
          {
            subtext: '3#柴油加氢装置',
            left: '83.33%',
            top: '50%',
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
            right: '60%',
            top: -180,
            bottom: 0
          },
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
            left: '30%',
            right: '30%',
            top: -180,
            bottom: 0
          },
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
              position: 'outer',
              alignTo: 'none'
              // edgeDistance: 20
            },
            left: '60%',
            right: 0,
            top: -180,
            bottom: 0
          }
        ]
      })
    },
    Lianyoubu() {
      this.$router.push({ path: '/documentquery/lianyoubu' })
    },
    Xitingbu() {
      this.$router.push({ path: '/documentquery/xitingbu' })
    },
    Fangtinghuagong() {
      this.$router.push({ path: '/documentquery/fangtinghuagongbu' })
    },
    Fangtinglianyou() {
      this.$router.push({ path: '/documentquery/fangtinglianyoubu' })
    },
    Chuyunbu() {
      this.$router.push({ path: '/documentquery/chuyunbu' })
    }
  }
}
</script>

<style lang="scss" scoped>

.dashboard-text {
  //font-size: larger;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.dashboard1 {
  position: relative;
  width: 90%;
  height: 150px;
  top: 30px;
  margin: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .dashboard1-1 {
    position: relative;
    width: 15%;
    height: 80%;
    float: left;
    top: 15px;
    margin-left: 50px;

    .daTitle {
      position: absolute;
      top: 20px;
      left: 20px;
      color: rgb(51, 51, 52);
      font-size: 15px;
    }

    .daImg {
      position: absolute;
      margin-left: 15px;
      top: 60px;
      width: 50px;
    }

    .daData {
      position: absolute;
      top: 70px;
      margin-left: 70px;

      p {
        float: left;
        margin-left: 15px;
        color: rgb(51, 51, 52);
        font-size: medium;
      }

      img {
        float: left;
        margin-left: 15px;
      }
    }
  }
}

.cardMap{
  position: relative;
  width: 100%;
  height: 800px;
  margin: 30px;
  background: url('~@/icons/image/map/map.png') center center no-repeat;
  .mapLY{
    position: absolute;
    border-radius: 25px;
    right: 27%;
    top: 20%;
    width: 130px;
    height: 60px;
    padding: 10px 30px;
    background-color: cornflowerblue;
  }
  .mapXT{
    position: absolute;
    border-radius: 25px;
    left: 28%;
    top: 32%;
    width: 130px;
    height: 60px;
    padding: 10px 30px;
    background-color: cornflowerblue;
  }
  .mapFTHG{
    position: absolute;
    border-radius: 25px;
    left: 41%;
    top: 14%;
    width: 140px;
    height: 60px;
    padding: 10px 30px;
    background-color: cornflowerblue;
  }
  .mapFTLY{
    position: absolute;
    border-radius: 25px;
    left: 51%;
    top: 48%;
    width: 140px;
    height: 60px;
    padding: 10px 30px;
    background-color: cornflowerblue;
  }
  .mapCY{
    position: absolute;
    border-radius: 25px;
    right: 11%;
    bottom: 13%;
    width: 140px;
    height: 60px;
    padding: 10px 30px;
    background-color: cornflowerblue;
  }
}

#dashboardTable {
  position: relative;
  width: 100%;
  height: 500px;
  margin: 30px;
}
#dashboardPie{
  position: relative;
  width: 90%;
  height: 400px;
  margin: 30px;
}

</style>

