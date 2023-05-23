<template>
  <div class="DataQuery">
    <div class="Options">
      <p class="DQ-title">请选择需要查询的数据</p>
      <el-cascader ref="cascaderHandle" class="DQ-option" :options="options" clearable placeholder="请选择" />
      <el-row>
        <el-button type="primary" plain class="DQ-button" @click="clear">清空</el-button>
      </el-row>
      <p class="emission">裝置碳排量</p>
      <div class="emission-data">111</div>
    </div>
    <el-card class="box-card">
      <el-table
        :data="tableData"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="物料名称"
          width="180"
        />
        <el-table-column
          prop="num"
          label="消耗量"
        />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="tableEdit(scope.row, scope.$index)">编辑</el-button>
            <el-button type="danger" size="mini" @click="open(scope.$index)">删除</el-button>
          </template>
          <!-- <el-button type="primary" @click="dialogVisible = true">编辑</el-button> -->
        </el-table-column>
      </el-table>
    </el-card>
    <el-button type="primary" class="tableAdd" @click="handleAdd">+ 新增</el-button>
    <div class="tableEdit">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
      >
        <!-- 表单信息 -->
        <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
          <el-form-item label="日期" prop="date">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-DD"
            />
          </el-form-item>
          <el-form-item label="物料名称" prop="name">
            <el-input v-model="form.name" placeholder="请输入物料名称" />
          </el-form-item>
          <el-form-item label="消耗量" prop="num">
            <el-input v-model="form.num" placeholder="请输入消耗量" />
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="cancle">取 消</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      options: [{
        value: 'lianyoubu',
        label: '上海石化炼油部',
        children: [{
          value: '1',
          label: '1#炼油联合部',
          children: [{
            value: '2changjianya',
            label: '2#常减压装置'
          }, {
            value: '3changjianya',
            label: '3#常减压装置'
          }, {
            value: '3chaiyoujiaqing',
            label: '3#柴油加氢装置'
          }, {
            value: '3tuoliu',
            label: '3#脱硫装置'
          }, {
            value: '2qingting',
            label: '2#轻烃回收装置'
          }, {
            value: '3qingting',
            label: '3#轻烃回收装置'
          }, {
            value: '2xunhuan',
            label: '2#循环水场'
          }, {
            value: '3xunhuan',
            label: '3#循环水场'
          }]
        }, {
          value: '2',
          label: '2#炼油联合部',
          children: [{
            value: 'chanpinjingzhi',
            label: '产品精制装置'
          }, {
            value: 'tuoliqing',
            label: '溶剂脱沥青装置'
          }]
        }, {
          value: '3',
          label: '3#炼油联合部'
        }, {
          value: '4',
          label: '4#炼油联合部'
        }, {
          value: '5',
          label: '5#炼油联合部'
        }]
      }, {
        value: 'xitingbu',
        label: '上海石化烯烃部',
        children: [{
          value: '2',
          label: '2#烯烃联合装置'
        }]
      }, {
        value: 'fangtinghuagong',
        label: '上海石化芳烃化工'
      }, {
        value: 'fangtinglianyou',
        label: '上海石化芳烃炼油'
      }, {
        value: 'chuyun',
        label: '上海石化储运部'
      }],
      tableData: [{
        id: '1',
        name: '抽余碳四B',
        num: '120.123',
        date: '2021-01-17'
      },
      {
        id: '2',
        name: '甲醇',
        num: '21.5049',
        date: '2021-01-17'
      },
      {
        id: '31',
        name: '气制氢气B',
        num: '0',
        date: '2021-01-17'
      },
      {
        id: '4',
        name: '抽甲基叔丁基醚B',
        num: '81.0058',
        date: '2021-01-17'
      },
      {
        id: '5',
        name: '丁烯-1B',
        num: '26.5249',
        date: '2021-01-17'
      },
      {
        id: '6',
        name: '醚后液化石油气B',
        num: '39.5156',
        date: '2021-01-17'
      }],
      rules: {
        date: [
          { required: true, message: '请选择日期' }
        ],
        name: [
          { required: true, message: '请输入物料名称' }
        ],
        num: [
          { required: true, message: '请输入消耗量' }
        ]
      },
      form: {
        date: '',
        name: '',
        num: ''
      },
      dialogVisible: false,
      dialogIndex: 0,
      modelType: 0 // 0表示新增弹窗，1表示编辑弹窗
    }
  },
  methods: {
    // 清空按钮点击事件
    clear() {
      // 主动触发点击事件
      this.$refs.cascaderHandle.checkedValue = ''
    },
    // 提交表单
    submit() {
      this.$refs.form.validate((vaild) => {
        console.log(vaild)
        if (vaild) {
          // 后续对表单数据的处理
          if (this.modelType === 0) {
            // console.log(this.form, 'form')
            this.tableAdd()
          } else {
            this.update(this.dialogIndex)
          }
          // 清空表单数据
          this.$refs.form.resetFields()
          // 关闭弹窗
          this.dialogVisible = false
        }
      })
    },
    // 弹窗关闭的时候
    // eslint-disable-next-line no-dupe-keys, vue/no-dupe-keys
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    cancle() {
      this.handleClose()
    },
    handleAdd() {
      this.modelType = 0
      this.dialogVisible = true
    },
    tableEdit(row, index) {
      this.modelType = 1
      this.dialogVisible = true
      this.dialogIndex = index
      // 需要对当前行数据进行深拷贝，否则会出错,显示
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 数据更新
    update(index) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(index)
          this.tableData[index].date = this.form.date
          this.tableData[index].name = this.form.name
          this.tableData[index].num = this.form.num
          console.log(this.form)
        } else {
          alert('编辑内容有误,请您检查提示信息并重新编辑后提交')
          return false
        }
      })
    },
    open(index) {
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)

        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    tableAdd() {
      this.tableData.push({
        date: this.form.date,
        name: this.form.name,
        num: this.form.num
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Options{
  position: relative;
  width: 90%;
  height: 150px;
  margin: 30px 70px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .DQ-title{
    position: absolute;
    width: 300px;
    left: 150px;
    font-size: 20px;
    top: 30px;
  }
  .DQ-option{
    position: absolute;
    left: 100px;
    top: 80px;
  }
  .DQ-button{
    position: absolute;
    left: 330px;
    top: 80px;

  }
  .emission{
    position: absolute;
    width: 30%;
    left: 700px;
    top: 30px;
    font-size: 20px;
  }
  .emission-data{
    position: absolute;
    left: 700px;
    top: 80px;
    font-size: 20px;
  }
}
.box-card{
  position: relative;
  width: 90%;
  margin: 30px 70px;
}
.tableAdd{
  position: relative;
  float: right;
  right: 80px;
}
</style>
