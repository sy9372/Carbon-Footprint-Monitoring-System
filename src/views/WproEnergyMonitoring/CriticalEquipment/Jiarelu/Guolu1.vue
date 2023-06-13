<template>
  <div class="criticalEquipment">
    <!-- 锅炉1 -->
    <div class="equipmentOptions">
      <p class="equipmentTitle">设备名称</p>
      <div class="options">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="equipmentData">
      <div v-for="item in dataObj" :key="item.name" class="equipmentData1">
        <p class="daTitle">{{ item.name }}</p>
        <div class="daData">
          <p>{{ item.num }}</p>
        </div>
      </div>
    </div>
    <div class="equipmentDcs">
      <p class="dcsTitle">设备DCS图</p>
      <div class="dcs-Optionimg">
        <img :src="value" class="dcs-Img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: require('@/icons/image/dcs/flowsheet24.jpg'),
        label: '锅炉'
      }, {
        value: require('@/icons/image/dcs/flowsheet6.jpg'),
        label: '裂解气压缩机'
      }, {
        value: require('@/icons/image/dcs/flowsheet22.jpg'),
        label: '丙烯压缩机'
      }, {
        value: require('@/icons/image/dcs/flowsheet33.jpg'),
        label: '乙烯压缩机'
      }, {
        value: require('@/icons/image/dcs/flowsheet41.jpg'),
        label: '精馏塔'
      }],
      imgchose: null,
      showImg: false,
      value: '',
      dataObj: [
        {
          name: '温度',
          num: '100℃'
        },
        {
          name: '压力',
          num: '1000Pa'
        },
        {
          name: '氧含量',
          num: '80%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.equipmentOptions{
  position: absolute;
  width: 100%;
  height: 100px;
  margin: 20px;
  .equipmentTitle{
    position: absolute;
    top: 10px;
    left: 20px;
    float: left;
    width: auto;
    font-size: 20px;
  }
  .options{
    position: absolute;
    float: left;
    width: 200px;
    left: 200px;
    top: 5px;
  }
}
.equipmentData{
  position: relative;
  width: 95%;
  height: 150px;
  top: 100px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .equipmentData1{
  position: relative;
  width: 15%;
  height: 80%;
  float: left;
  top: 15px;
  margin-left: 50px;
  }
  .daTitle {
    position: absolute;
    top: 20px;
    left: 20px;
    color: rgb(51, 51, 52);
    font-size: 15px;
  }
  .daData {
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
.equipmentDcs{
  position: relative;
  width: 100%;
  height: 1000px;
  top:100px;
  margin: 20px;
  .dcsTitle{
    position: relative;
    font-size: 25px;
    left: 500px;
    top: 30px;
    margin: 10px;
  }
  .dcs-Optionimg{
    position: relative;
    height: 700px;
    width: 95%;
    top: 40px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
}

</style>

