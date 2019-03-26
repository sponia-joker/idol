// pages/guild/guild.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    flowerNumberValue: '',
    chatTop: 0,
    messageValue: '',
    invitation: false,
    messageInput: false
  },
  flowerNumberInput: function(e) {
    this.setData({
      flowerNumberValue: e.detail.value
    })
  },
  _confirmSendFlowerEvent: function(e) {

    wx.showToast({
      title: '赠送鲜花成功',
      icon: 'none',
      duration: 2000
    })
    setTimeout(() => {
      this.sendFlowerModal.hideModal();
    }, 2000)

  },
  _cancelSendFlowerEvent: function(e) {
    this.sendFlowerModal.hideModal();
  },
  toggleInvationVis: function() {
    this.setData({
      invitation: !this.data.invitation
    })
  },
  toggleSendFlower: function() {
    this.sendFlowerModal.showModal();
  },
  toggleMessageInput: function() {
    this.setData({
      messageInput: !this.data.messageInput
    })
  },
  bottom: function() {
    let query = wx.createSelectorQuery();
    const that = this
    query.selectAll('.message-item').boundingClientRect(function(rects) {
      let element = rects.pop()
      that.setData({
        chatTop: that.data.chatTop + element.bottom
      });
    }).exec();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

    var that = this
    wx.getSystemInfo({
      success: function(res) {
        console.info(res.windowHeight);
        let height = res.windowHeight;
        wx.createSelectorQuery().selectAll('.guild-top').boundingClientRect(function(rects) {
          rects.forEach(function(rect) {
            that.setData({
              scrollHeight: res.windowHeight - rect.bottom
            });
          })
        }).exec();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.bottom()
    this.sendFlowerModal = this.selectComponent("#sendFlowerModal");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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