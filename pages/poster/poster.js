// pages/poster/poster.js
const promisify = require('../../utils/promisify.js')
const wxGetImageInfo = promisify(wx.getImageInfo)
const wxCanvasToTempFilePath = promisify(wx.canvasToTempFilePath)
const wxSaveImageToPhotosAlbum = promisify(wx.saveImageToPhotosAlbum)
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  downloadImage: function() {
    wxCanvasToTempFilePath({
      canvasId: 'shareCanvas'
    }, this).then(res => {
      return wxSaveImageToPhotosAlbum({
        filePath: res.tempFilePath
      })
    }).then(res => {
      wx.showToast({
        title: '已保存到相册'
      })
    })
  },

  createCanvans: function() {
    wx.getSystemInfo({
      success: function(res) {
        const windowWidth = res.windowWidth
        const diffdistance = (windowWidth - 350) / 2
        const ctx = wx.createCanvasContext('shareCanvas')
        ctx.drawImage('/images/poster_bg.png', 0, 0, 350, 531)
        // 排名
        ctx.setFontSize(34)
        ctx.fillText('NO.2', 190, 50)
        // 时间
        ctx.setFontSize(20)
        const timeMetrics = ctx.measureText('2019-03-22')
        ctx.fillText('2019-03-22', (350 - timeMetrics.width) / 2, 272)
        //姓名
        ctx.setFontSize(22)
        const metrics = ctx.measureText('朱一龙')
        ctx.fillText('朱一龙', (350 - metrics.width) / 2, 235)
        //人气值
        ctx.setFontSize(24)
        ctx.fillText('123456789', 160, 322)

        //用户图像
        ctx.save()
        ctx.beginPath()
        ctx.arc(175, 140, 60, 0, 2 * Math.PI)
        ctx.setFillStyle('#EEEEEE')
        ctx.fill()
        ctx.clip()
        ctx.drawImage('/images/person_one.png', 115, 80, 120, 120)
        ctx.restore()

        ctx.draw()
      }
    });


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.createCanvans()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})