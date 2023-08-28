<!-- 这里是碳资产管理系统 -->
<template>
  <div>
    <div class="title" style="width: 95%; height: 50px; margin: 20px; padding-left: 18%;">
      <p style="font-size: 40px; ">{{ name }}</p>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          prop="list"
          label="列表"
          width="300"
        />
        <el-table-column
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :visible.sync="dialogVisible1"
      title="1月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible2"
      title="2月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible3"
      title="3月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible4"
      title="4月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible5"
      title="5月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible6"
      title="6月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible7"
      title="7月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible8"
      title="8月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible9"
      title="9月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible10"
      title="10月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible11"
      title="11月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible12"
      title="12月份公司主体燃动能耗"
      width="80%"
    >
      <el-table
        :data="tableData1"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="name"
          label="物料名称"
          width="280px"
        />
        <el-table-column
          prop="unit"
          label="实物量单位"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="factor"
          label="系数"
        />
        <el-table-column
          prop="month"
          label="本月实物量"
        />
        <el-table-column
          prop="accumulate"
          label="累计实物量"
        />
        <el-table-column
          prop="lianyou"
          label="其中：炼油板块累计"
        />
        <el-table-column
          prop="huagong"
          label="化工板块累计"
        />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '公司主体燃动能耗',
      tableData: [
        {
          list: '1月份公司主体燃动能耗',
          num: 1
        }, {
          list: '2月份公司主体燃动能耗',
          num: 2
        }, {
          list: '3月份公司主体燃动能耗',
          num: 3
        }, {
          list: '4月份公司主体燃动能耗',
          num: 4
        }, {
          list: '5月份公司主体燃动能耗',
          num: 5
        }, {
          list: '6月份公司主体燃动能耗',
          num: 6
        }, {
          list: '7月份公司主体燃动能耗',
          num: 7
        }, {
          list: '8月份公司主体燃动能耗',
          num: 8
        }, {
          list: '9月份公司主体燃动能耗',
          num: 9
        }, {
          list: '10月份公司主体燃动能耗',
          num: 10
        }, {
          list: '11月份公司主体燃动能耗',
          num: 11
        }, {
          list: '12月份公司主体燃动能耗',
          num: 12
        }
      ],
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      dialogVisible6: false,
      dialogVisible7: false,
      dialogVisible8: false,
      dialogVisible9: false,
      dialogVisible10: false,
      dialogVisible11: false,
      dialogVisible12: false,
      tableData1: [
        {
          name: '脱硫天然气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '普通液化石油气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '商品丙丁烷混合物液化石油气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '醚后碳四液化石油气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '液化石油气（工业协议）',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '炼化干气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '甲烷氢',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: ' C2回收/干气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '抽余碳四',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '回收火炬气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '初常顶气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '减顶气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '制氢解析气',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '乙烯焦油',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '焦碳',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '工业气体/氧气99.5/管输 ',
          unit: '千立方米',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '氮气',
          unit: '千立方米',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '火力发电',
          unit: '万千瓦时',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '光伏发电',
          unit: '万千瓦时',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '中压蒸汽(35-39s)',
          unit: '吉焦',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '低压蒸汽(13s)',
          unit: '吉焦',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '其他蒸汽(10s以下)',
          unit: '吉焦',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '海水',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '原水',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '脱盐水II',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '冷冻盐水',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '凉水塔冷却循环水',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '回用蒸汽冷凝水',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '净化风',
          unit: '千立方米',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '非净化风',
          unit: '千立方米',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '燃动能耗合计',
          unit: '吨标油',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '动力用气肥煤5500/St.ar<0.6 12≤Mt<15',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '动力用气肥煤6000',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '动力用气肥煤5000\St.ar<0.6 8≤Mt<12',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '高硫石油焦',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '石油焦（混）',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '0号车用柴油(Ⅲ)',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '0号普通柴油',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }, {
          name: '碳十',
          unit: '吨',
          factor: '',
          month: '',
          accumulate: '',
          lianyou: '',
          huagong: ''
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row.num)
      if (row.num === 1) {
        this.dialogVisible1 = true
      }
      if (row.num === 2) {
        this.dialogVisible2 = true
      }
      if (row.num === 3) {
        this.dialogVisible3 = true
      }
      if (row.num === 4) {
        this.dialogVisible4 = true
      }
      if (row.num === 5) {
        this.dialogVisible5 = true
      }
      if (row.num === 6) {
        this.dialogVisible6 = true
      }
      if (row.num === 7) {
        this.dialogVisible7 = true
      }
      if (row.num === 8) {
        this.dialogVisible8 = true
      }
      if (row.num === 9) {
        this.dialogVisible9 = true
      }
      if (row.num === 10) {
        this.dialogVisible10 = true
      }
      if (row.num === 11) {
        this.dialogVisible11 = true
      }
      if (row.num === 12) {
        this.dialogVisible12 = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
    position: relative;
    width: 95%;
    height: auto;
    margin: 20px;
    padding-left: 20%;
}
</style>
