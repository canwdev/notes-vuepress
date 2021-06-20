const canvas = document.getElementById('canvas')
const options = {
  chartZone: [50, 50, 1000, 700], // 绘制区域
  yAxisLabel: ['0', '100', '200', '300', '400'], // Y轴的标签
  yMax: 400, // y的最大值，用于计算比例
  xAxisLabel: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  xAxisPos: [], // 用于暂存x坐标轴标签的位置
  data: [10, 50, 200, 330, 390, 320, 220], // x轴对应y轴的值
  barStyle: {
    width: 70,
    color: '#1abc9c'
  },
  padNumber: 0.96,
  axisColor: '#353535'
}

drawBarChart(canvas, options)

/**
 * 绘制柱状图
 */
function drawBarChart(canvas, options) {
  const context = canvas.getContext('2d')
  // 填充背景色
  context.save();// 保存当前设置的绘图上下文
  context.beginPath()
  context.rect(0, 0, canvas.width, canvas.height)
  context.fillStyle = '#fff'
  context.fill()
  context.restore();// 恢复之前保存的上下文样式设置

  drawAxis()
  drawYLabels()
  drawXLabels()
  drawDataWithCubicBezier(context, options)
  drawArrow()

  // 绘制坐标轴
  function drawAxis() {
    let chartZone = options.chartZone
    context.strokeWidth = 1
    context.strokeStyle = options.axisColor
    context.moveTo(chartZone[0], chartZone[1])
    context.lineTo(chartZone[0], chartZone[3])
    context.lineTo(chartZone[2], chartZone[3])
    context.stroke()
  }

  // 绘制Y轴坐标
  function drawYLabels() {
    let labels = options.yAxisLabel
    let yLength = (options.chartZone[3] - options.chartZone[1]) * options.padNumber
    let gap = yLength / (labels.length - 1)

    labels.forEach(function (label, index) {
      // 绘制坐标文字
      let offset = context.measureText(label).width + 20
      context.font = '16px'
      const drawX = options.chartZone[0] // 绘制水平起始坐标
      const drawY = options.chartZone[3] - index * gap // 绘制垂直起始坐标

      context.fillText(
        label, // 文字内容
        drawX - offset,
        drawY + 4
      )
      // 绘制小短线
      context.beginPath()
      context.strokeStyle = options.axisColor
      context.moveTo(drawX - 10, drawY)
      context.lineTo(drawX, drawY)
      context.stroke()

      // 绘制辅助线
      if (index !== 0) {
        context.beginPath()
        context.strokeStyle = '#eaeaea'
        context.strokeWidth = 2
        context.moveTo(drawX, drawY)
        context.lineTo(options.chartZone[2], drawY)
        context.stroke()
      }

    })
  }

  // 绘制X轴坐标
  function drawXLabels() {
    let labels = options.xAxisLabel
    let xLength = (options.chartZone[2] - options.chartZone[0]) * options.padNumber
    let gap = xLength / labels.length

    labels.forEach(function (label, index) {
      let offset = context.measureText(label).width / 2
      context.font = '18px'
      const drawX = options.chartZone[0] + (index + 1) * gap
      const drawY = options.chartZone[3]

      // 绘制文字
      context.fillText(
        label,
        drawX - offset,
        drawY + 20
      )

      // 绘制小短线
      context.beginPath()
      context.strokeStyle = options.axisColor
      context.moveTo(drawX, drawY)
      context.lineTo(drawX, drawY + 5)
      context.stroke()
      options.xAxisPos[index] = (index + 1) * gap
    })
  }

  // 绘制箭头
  function drawArrow() {
    let factor = 2 // 箭头大小因子
    context.save()
    context.globalAlpha = 0.7 // 填充透明度
    context.fillStyle = options.axisColor
    // 绘制Y轴箭头
    context.translate(options.chartZone[0], options.chartZone[1]) // 设置坐标系原点至Y轴末端
    context.beginPath() // 开始绘制
    context.moveTo(0, 0) // 移动至新坐标系原点
    context.lineTo(2 * factor, 0)
    context.lineTo(0, -10 * factor)
    context.lineTo(-2 * factor, 0)
    context.lineTo(2 * factor, 0)
    context.fill()
    context.restore()

    // 绘制X轴箭头
    context.save()
    context.globalAlpha = 0.7 // 填充透明度
    context.fillStyle = options.axisColor
    context.translate(options.chartZone[2], options.chartZone[3])
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(0, 2 * factor)
    context.lineTo(10 * factor, 0)
    context.lineTo(0, -2 * factor)
    context.lineTo(0, 2 * factor)
    context.fill()
    context.restore()
  }
}
