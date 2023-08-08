<!-- 这里是公司主体——燃动能耗查询 -->
<template>
  <div>
    <div class="companyTitle">
      <p>公司主体燃动能耗查询</p>
    </div>
    <div class="companyEntity">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="item in runLabelData" :key="item.value" :label="item.name">{{ item.name }}</el-tab-pane>
      </el-tabs>
      <el-table
        :data="tableData"
        height="500"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="180"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
          width="100"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="monthQuantity"
          label="本月实物量"
        />
        <el-table-column
          prop="totalQuantity"
          label="累计实物量"
        />
        <el-table-column
          prop="refine"
          label="炼油板块累计"
        />
        <el-table-column
          prop="chemical"
          label="化工板块累计"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      runLabelData: [
        {
          value: 'Chuyunbu',
          name: '1月'
        },
        {
          value: 'Gonggongshiyebu',
          name: '2月'
        },
        {
          value: 'Dianqiyibiaozhongxin',
          name: '3月'
        },
        {
          value: 'Fangting',
          name: '4月'
        },
        {
          value: 'Huanbaoshuiwu',
          name: '5月'
        },
        {
          value: 'Jinglunbu',
          name: '6月'
        },
        {
          value: 'LianyouXiting',
          name: '7月'
        },
        {
          value: 'Redianbu',
          name: '8月'
        },
        {
          value: 'Dilunbu',
          name: '9月'
        },
        {
          value: 'Dilunbu',
          name: '10月'
        },
        {
          value: 'Dilunbu',
          name: '11月'
        },
        {
          value: 'Dilunbu',
          name: '12月'
        }
      ],
      activeName: 'Chuyunbu',
      tableData: [{
        name: '脱硫天然气',
        unit: '吨',
        factor: '1.33540',
        monthQuantity: '9810.2096',
        totalQuantity: '125640.1315',
        refine: '21.97',
        chemical: '125618.1615'
      }, {
        name: '普通液化石油气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '商品丙丁烷混合物液化石油气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '醚后碳四液化石油气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '液化石油气（工业协议）',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '炼化干气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '甲烷氢',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: 'C2回收\干气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '抽余碳四',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }, {
        name: '回收火炬气',
        unit: '吨',
        factor: '1.20000',
        monthQuantity: '0.0000',
        totalQuantity: '0.0000',
        refine: '0.0000',
        chemical: '0.0000'
      }]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.companyTitle{
    position: relative;
    margin: 20px;
    top:10px;
    left: 40%;
}
.companyEntity{
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 20px;
  top: 30px;
  width: 95%;
  height: 500px;
}

</style>

