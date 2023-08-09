<template>
  <div class="home">
    <el-card class="box-card">
      <img class="homeImg" src="@/icons/image/login2.png">
      <img class="homeTitleC" src="@/icons/image/home/TitleC.png">
      <img class="homeTitleE" src="@/icons/image/home/TitleE.png">
      <el-button v-for="item in List" :key="item.name" plain :icon="item.icon" class="homeButton" @click="ChangePage(item.path)">{{ item.label }}</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [{
        name: 'CarbonEmission',
        label: '全流程碳排监控',
        icon: 'el-icon-s-management',
        path: '/carbonemission/emissionsituation'
      }, {
        name: 'DataQuery',
        label: '能耗/碳排数据查询',
        icon: 'el-icon-s-data',
        path: '/dataquery/companyentity'
      }, {
        name: 'WproEnergyMonitoring',
        label: '全流程能效监控',
        icon: 'el-icon-s-custom',
        path: '/wproenergymonitoring/criticalequipment/jiarelu/guolu'
      }, {
        name: 'EmissionReport',
        label: '碳排报告',
        icon: 'el-icon-s-marketing',
        path: '/emissionreport/carbonassets'
      }]
    }
  },
  methods: {
    ChangePage(param) {
      this.$router.push({ path: param })
    }
  }

}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  width: 100%;
  height: 94vh;
  top:0px;
  .box-card{
    position: absolute;
    width: 95%;
    height: 95%;
    margin: 20px 35px;
    background-color: #fafafb;
  }
  .homeImg{
    position: absolute;
    width: 25%;
    float: left;
    left: 10px;
    bottom: 10px;
  }
  .homeTitleC{
    position: absolute;
    float: left;
    width: 80%;
    left: 140px;
    top: 120px;
    z-index: 2;
  }
  .homeTitleE{
    position: absolute;
    float: left;
    width: 70%;
    left: 230px;
    top: 250px;
    z-index: 2;
  }
}
// .homeButton{
//   position: relative;
//   width:100px;
//   height: 100px;
// }
</style>
