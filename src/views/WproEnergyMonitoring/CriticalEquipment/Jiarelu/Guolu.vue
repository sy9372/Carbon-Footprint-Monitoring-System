<template>
  <div class="jiarelu">
    <!-- 加热炉 -->
    <div class="jiareluWarning">
      <p class="jiareluTitle1">加热炉指标预警</p>
      <div class="jiareluTable1">
        <el-table
          :data="tableData1"
          style="width: 100%"
          height="250"
        >
          <el-table-column
            fixed
            prop="target"
            label="关键能效指标"
            width="150"
          />
          <el-table-column
            prop="top"
            label="预警上界"
            width="150"
          />
          <el-table-column
            prop="amount1"
            label="加热炉数量"
            width="150"
          />
          <el-table-column
            prop="bottom"
            label="预警下界"
            width="150"
          />
          <el-table-column
            prop="amount2"
            label="加热炉数量"
            width="150"
          />
        </el-table>
      </div>
    </div>
    <div class="jiareluMonitoring">
      <p class="jiareluTitle2">加热炉能效监控</p>
      <div class="jiareluTable2">
        <el-table
          :data="tableData2"
          style="width: 100%"
          height="250"
        >
          <el-table-column
            fixed
            prop="device"
            label="装置"
            width="150"
          />
          <el-table-column
            prop="heater"
            label="加热炉"
            width="150"
          />
          <el-table-column
            prop="efficiency"
            label="能效"
            width="150"
          />
          <el-table-column
            prop="oxygen"
            label="氧含量"
            width="150"
          />
          <el-table-column
            prop="exhaustgas"
            label="排烟温度"
            width="150"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [{
        target: '氧含量（%）',
        top: '大于3%',
        amount1: '2',
        bottom: '小于3%',
        amount2: '3'
      }, {
        target: '排烟温度（℃）',
        top: '大于130℃',
        amount1: '5',
        bottom: '小于110℃',
        amount2: '4'
      }, {
        target: '指标1',
        top: 'XX',
        amount1: 'XX',
        bottom: 'XX',
        amount2: 'XX'
      }, {
        target: '指标2',
        top: 'XX',
        amount1: 'XX',
        bottom: 'XX',
        amount2: 'XX'
      }, {
        target: '指标3',
        top: 'XX',
        amount1: 'XX',
        bottom: 'XX',
        amount2: 'XX'
      }],
      tableData2: [{
        device: '1',
        heater: 'F-101',
        efficiency: '正常',
        oxygen: '50%',
        exhaustgas: '120℃'
      }, {
        device: '2',
        heater: 'F-103',
        efficiency: '正常',
        oxygen: '60%',
        exhaustgas: '115℃'
      }, {
        device: '3',
        heater: 'XX',
        efficiency: 'XX',
        oxygen: 'XX',
        exhaustgas: 'XX'
      }, {
        device: '4',
        heater: 'XX',
        efficiency: 'XX',
        oxygen: 'XX',
        exhaustgas: 'XX'
      }, {
        device: '5',
        heater: 'XX',
        efficiency: 'XX',
        oxygen: 'XX',
        exhaustgas: 'XX'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.jiareluTitle1{
  position: relative;
  margin:5px;
  left: 20%;
  top:20px;
}
.jiareluTable1{
  position: relative;
  padding: auto;
  margin: 20px;
  height: 300px;
  width:95%;
  top:20px;
}
.jiareluTitle2{
  position: relative;
  margin:5px;
  left: 20%;
  top:20px;
}
.jiareluTable2{
  position: relative;
  padding: auto;
  margin: 20px;
  height: 300px;
  width:95%;
  top:20px;
}
</style>

