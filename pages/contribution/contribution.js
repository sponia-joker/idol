// pages/detail/detail.js
var app = getApp()
Page({
  data: {
    currentTab: 0,
    scrollHeight: 0
  },
  onLoad: function() {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        let height = res.windowHeight;
        console.log(height)
        wx.createSelectorQuery().selectAll('.swiper-tab').boundingClientRect(function(rects) {
          rects.forEach(function(rect) {
            console.log(rect.bottom)
            that.setData({
              scrollHeight: res.windowHeight - rect.bottom - 50
            });
          })
        }).exec();
      }
    });
  },
  scrolltolower: function(e) {
    console.log('scrolltolower')
  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})