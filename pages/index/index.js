//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 1,
    scrollHeight: 0,
    searchValue: '',
    searchStatus: true,
    idolsList: []
  },
  clickTab: function(e) {
    var that = this;
    console.log(e.target.dataset.current)
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  inputChange: function(e) {
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
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       // 发起网络请求
    //       console.log(res.code)
    //       wx.request({
    //         url: 'https://bzb.chanhua.art/api/xcx/login',
    //         method: 'post',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
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