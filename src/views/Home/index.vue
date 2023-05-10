<template>
  <div class="home">
    <img class="homeImg" src="@/icons/image/home.png">
    <p class="homeTitleC">上海石化碳足迹监控系统</p>
    <p class="homeTitleE">Carbon Footprint Monitoring System</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  width: 100%;
  height: 300px;
  top:100px;
  .homeImg{
    position: absolute;
    width: 150px;
    height: 150px;
    float: left;
    left: 100px;
  }
  .homeTitleC{
    position: absolute;
    float: left;
    left: 300px;
    top: 10px;
    font-family: STXinwei,Times,serif;
    font-weight: 500;
    font-size: 80px;
  }
  .homeTitleE{
    position: absolute;
    float: left;
    left: 400px;
    top: 120px;
    font-family: Times New Roman;
    font-weight: 500;
    font-size: 45px;
  }
}
</style>
