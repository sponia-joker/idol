//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollHeight: 0,
    searchValue: '',
    searchStatus: true,
    idolsList: []
  },
  inputChange: function(e) {
    console.log('inputChange', e)
    this.setData({
      searchValue: e.detail.value
    });
  },
  inputFocus: function(e) {
    console.log('inputFocus', e)
    this.setData({
      idolsList: []
    });
  },
  onKeywordConfirm: function(e) {
    console.log('onKeywordConfirm', e)
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function() {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        console.info(res.windowHeight);
        let height = res.windowHeight;
        wx.createSelectorQuery().selectAll('.tab-content').boundingClientRect(function(rects) {
          rects.forEach(function(rect) {
            that.setData({
              scrollHeight: res.windowHeight - rect.bottom
            });
          })
        }).exec();
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})