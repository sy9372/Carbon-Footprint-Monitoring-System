<template>
  <div class="CarbonLabel">
    <div class="CL-option">
      <p class="CarbonLabelTitle">{{ name }}</p>
      <div class="Options">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <p class="CL-title">产品流程图</p>
    </div>
    <div class="CL-optionimg">
      <img :src="value" class="CL-Img">
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      name: '关键产品碳标签',
      options: [{
        value: require('@/icons/image/criticalproduct/ethylene.png'),
        label: '乙烯'
      }, {
        value: require('@/icons/image/criticalproduct/propylene.png'),
        label: '丙烯'
      }, {
        value: require('@/icons/image/criticalproduct/butadiene.png'),
        label: '丁二烯'
      }, {
        value: require('@/icons/image/criticalproduct/benzene.png'),
        label: '苯'
      }],
      imgchose: null,
      showImg: false,
      value: ''
    }
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
.CL-option{
  position: relative;
  width: 100%;
  height: 100px;
  margin: 50px;
  .CarbonLabelTitle{
    position: absolute;
    top: 20px;
    left: 50px;
    float: left;
    width: auto;
    font-size: 20px;
  }
  .Options{
    position: absolute;
    float: left;
    width: 200px;
    left: 300px;
    top: 15px;
  }
  .CL-title{
  position: absolute;
  font-size: 25px;
  left: 500px;
  top: 100px;
  margin-bottom: 20px;
}
}

.CL-optionimg{
  position: relative;
  height: 650px;
  width: 90%;
  left: 50px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>
