<!-- 这里是炼油板块——储运部（炼油块） -->
<!-- 这里是炼油板块——炼油部 -->
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
        id="tableData"
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
    <div class="userEdit">
      <el-button type="primary" class="tableAdd" @click="handleAdd">+ 新增</el-button>
      <el-button type="primary" class="exportExcel" @click="exportExcel()">导出</el-button>
      <el-button type="primary" class="excelUpLoad" @click="excelUpLoad()">导入</el-button>
    </div>
    <div class="upLoad">
      <el-dialog
        title="导入excel表格"
        :visible.sync="isShow"
        width="50%"
        :before-close="closeShow"
      >
        <div class="upload-excel">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :limit="1"
            :on-exceed="fileOverLimit"
            :http-request="httpRequest"
            accept=".xlsx"
          >
            <div style="margin-top: 10px">
              <!-- <img src="@/assets/img/EXCEL.svg" style="width: 20px"> -->
              <p class="upload-text">(仅支持.xlsx文件上传)</p>
            </div>
          </el-upload>
          <!-- <div class="btn-upload">
            <el-button
              size="mini"
              type="primary"
              @click="handleUpload"
            >
              点击上传
            </el-button>
          </div>

          <input
            ref="excel-upload-input"
            class="excel-upload-input"
            type="file"
            accept=".xlsx, .xls"
            @change="handleClick"
          >
          <div
            class="drop"
            @drop="handleDrop"
            @dragover="handleDragover"
            @dragenter="handleDragover"
          >
            <i class="el-icon-upload" />
            <span>将文件拖到此处</span>
          </div> -->
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="isShow = false">确 定</el-button>
        </span>
      </el-dialog></div>
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
    <el-card id="trendLine">
      <!-- 趋势图 -->
    </el-card>
  </div>
</template>

<script>
import transform from '../exprotToExcel.js'
import * as XLSX from 'xlsx'
export default {
  // props: {
  //   isShow: Boolean,
  //   onSuccess: Function, // eslint-disable-line
  // },
  data() {
    return {
      options: [{
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
      excelData: {
        header: [],
        results: []
      },
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
      modelType: 0, // 0表示新增弹窗，1表示编辑弹窗
      isShow: false
    }
  },
  mounted() {
    this.line()
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
    },
    exportExcel() {
      console.log('success')
      // console.log(this.tableData)
      transform(this.tableData, '导出数据详情', this.callback)
    },
    callback(prams) {
      console.log('prams')
    },
    excelUpLoad() {
      this.isShow = true
    },
    line() {
      const myChart = this.$echarts.init(document.getElementById('trendLine'))
      myChart.setOption({
        title: {
          text: '碳排趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
      })
    },
    closeShow() {
      this.$parent.isShow = false
    },
    exceedFile(files, fileList) {
      this.$message.warning(
        `只能选择 ${this.limitNum} 个文件，当前共选择了 ${
          files.length + fileList.length
        } 个`
      )
    },
    fileOverLimit() {
      this.$message({
        showClose: true,
        message: '一次性上传数量超过限制，请等待当前文件传输完毕',
        type: 'warning'
      })
    },
    async httpRequest(params) {
      // // this.btnshow = true
      // const form = new FormData()
      // form.append('file', params.file)
      // form.append('type', 'market')
      // console.log(form)
      // const res = await this.$http.diagnosis.uploadFdFile(form)
      // console.log(res)
      // // this.text = '原油进口量整体趋势'
      // this.$message({
      //   showClose: true,
      //   message: res.data.data,
      //   type: 'success'
      // })

      // this.fileName = res.data.data
      // this.n = 1
    },
    // 点击导入
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('仅支持单个上传一个文件')
        return
      }
      const rawFile = files[0] // 获取文件信息
      if (!this.isExcel(rawFile)) {
        // 是不是excel文件
        this.$message.error(
          'Only supports upload .xlsx, .xls, .csv suffix files'
        )
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click() // 触发表单上传事件，跳出选择文件框
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile) // 判断文件上传大小
      if (before) {
        this.readerData(rawFile) // 把excel转化成数组
      }
    },
    // 限定文件大小
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: '请不要上传大于1M的文件',
        type: 'warning'
      })
      return false
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(rawFile)
        // 参数可以是 Blob 或者 File 对象异步结果将在onload 事件中体现
        reader.onload = (e) => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0] // "SheetJS" 取出工作表名称
          const worksheet = workbook.Sheets[firstSheetName] // 取出工作表名称对应的表格数据
          const header = this.getHeaderRow(worksheet) // 表头名
          const results = XLSX.utils.sheet_to_json(worksheet) // 输出数据，除去表头
          this.excelData.results = results
          this.excelData.header = header
          this.onSuccess && this.onSuccess(this.excelData)
          this.loading = false
          resolve()
        }
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref']) //! ref: "A1:E21"
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell) // 每个头部名
        headers.push(hdr)
      }
      return headers
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
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

.upLoad{
  .upload-excel{
    display: flex;
    justify-content: center;
    // margin-top: 100px;
    .excel-upload-input {
      display: none;
      z-index: -9999;
    }
    .btn-upload,
    .drop {
      border: 1px dashed #bbb;
      width: 350px;
      height: 160px;
      text-align: center;
      line-height: 160px;
    }
    .drop {
      line-height: 80px;
      color: #bbb;
      i {
        font-size: 60px;
        display: block;
      }
    }
  }
}
.userEdit{
  position: relative;
  margin: 30px 70px;
  width: 90%;
  height: 50px;
  .tableAdd{
    position: absolute;
    right: 20px;
    width: 85px;
  }
  .exportExcel{
    position: absolute;
    width: 85px;
    right: 150px;
  }
  .excelUpLoad{
    position: absolute;
    width: 85px;
    right: 280px;
  }
}

#trendLine{
  position: relative;
  margin: 30px 70px;
  padding: 20px;
  width: 90%;
  height: 400px;
}
</style>

