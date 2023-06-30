<template>
  <div>
    <!-- 裂解气压缩透平机 -->
    <div class="dcsImage">
      <div v-for="item in imgData" :key="item.value" class="imgContent" @click="photoVersion(item.name,item.url)">
        <img :src="item.url" alt="" width="100%">
      </div>
      <el-dialog
        :title="name"
        :visible.sync="dialogVisible"
        width="80%"
      >
        <img :src="url" alt="" width="100%">
      </el-dialog>
    </div>
    <div class="liejieqiData">
      <div v-for="item in dataObj" :key="item.name" class="liejieqiData1">
        <p class="daTitle">{{ item.name }}</p>
        <div class="daData">
          <p>{{ item.num }}</p>
        </div>
      </div>
    </div>
    <div class="liejieqiTable">
      <p class="liejieqiTitle">关键指标数据表</p>
      <el-table
        :data="tableData"
        style="width: 100%"
        height="250"
      >
        <el-table-column
          fixed
          prop="number"
          label="装置位号"
          width="150"
        />
        <el-table-column
          prop="temperature"
          label="温度"
          width="150"
        />
        <el-table-column
          prop="pressure"
          label="压力"
          width="150"
        />
        <el-table-column
          prop="oxygen"
          label="氧含量"
          width="150"
        />
        <el-table-column
          prop="refluxratio"
          label="回流比"
          width="150"
        />
        <el-table-column
          prop="sensitivityplate"
          label="灵敏板温度"
          width="150"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        {
          name: '裂解炉DCS图1',
          url: require('@/icons/image/Ethyleneplant/liejieqi1.png'),
          value: 'dcs1'
        }, {
          name: '裂解炉DCS图2',
          url: require('@/icons/image/Ethyleneplant/liejieqi2.png'),
          value: 'dcs2'
        }, {
          name: '裂解炉DCS图3',
          url: require('@/icons/image/Ethyleneplant/liejieqi3.png'),
          value: 'dcs3'
        }, {
          name: '裂解炉DCS图4',
          url: require('@/icons/image/Ethyleneplant/liejieqi4.png'),
          value: 'dcs4'
        }, {
          name: '裂解炉DCS图5',
          url: require('@/icons/image/Ethyleneplant/liejieqi5.png'),
          value: 'dcs5'
        }, {
          name: '裂解炉DCS图6',
          url: require('@/icons/image/Ethyleneplant/liejieqi6.png'),
          value: 'dcs6'
        }
      ],
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
      ],
      tableData: [{
        number: 'GB2201',
        temperature: '100℃',
        pressure: '100kPa',
        oxygen: '80%',
        refluxratio: '0.5',
        sensitivityplate: '60℃'
      }, {
        number: 'GT2201',
        temperature: '120℃',
        pressure: '150kPa',
        oxygen: '60%',
        refluxratio: '0.8',
        sensitivityplate: '60℃'
      }, {
        number: 'XX',
        temperature: 'XX',
        pressure: 'XX',
        oxygen: 'XX',
        refluxratio: 'XX',
        sensitivityplate: 'XX'
      }, {
        number: 'XX',
        temperature: 'XX',
        pressure: 'XX',
        oxygen: 'XX',
        refluxratio: 'XX',
        sensitivityplate: 'XX'
      }, {
        number: 'XX',
        temperature: 'XX',
        pressure: 'XX',
        oxygen: 'XX',
        refluxratio: 'XX',
        sensitivityplate: 'XX'
      }],
      dialogVisible: false,
      name: '',
      url: ''
    }
  },
  methods: {
    photoVersion(param1, param2) {
      this.dialogVisible = true
      this.name = param1
      this.url = param2
    }
  }
}
</script>

<style lang="scss" scoped>

.dcsImage{
    position: relative;
    height: 400px;
    width: 100%;
    margin: 20px;
    .imgContent{
    position: relative;
    float: left;
    width: 330px;
    height: 180px;
    margin: 20px
    }
}
.liejieqiData{
  position: relative;
  width: 95%;
  height: 150px;
  top: 100px;
  left: 20px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .liejieqiData1{
  position: relative;
  width: 15%;
  height: 80%;
  float: left;
  top: 15px;
  margin-left: 100px;
  }
  .daTitle {
    position: absolute;
    top: 15px;
    left: 20px;
    color: rgb(51, 51, 52);
    font-size: 15px;
  }
  .daData {
    position: absolute;
    top: 60px;

    p {
      float: left;
      margin-left: 18px;
      color: rgb(209, 18, 18);
      font-size: medium;
    }
  }
}
.liejieqiTable{
  position: relative;
  padding: auto;
  margin: 20px;
  height: 500px;
  width:95%;
  top:180px;
  left: 20px;
  .liejieqiTitle{
  position: relative;
  margin:5px;
  left: 30%;
  }
}
</style>
