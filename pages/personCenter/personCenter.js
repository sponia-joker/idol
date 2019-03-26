// pages/book/shared/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usenameInputValue: '',
    flowerInputValue: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  usenameInputChange: function(e) {
    this.setData({
      usenameInputValue: e.detail.value
    })
  },
  flowerInputChange: function(e) {
    this.setData({
      flowerInputValue: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.updateUsernameModal = this.selectComponent("#updateUsernameModal");
    this.dropGuildModal = this.selectComponent("#dropGuildModal");
    this.updateFlowerModal = this.selectComponent('#updateFlowerModal')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(this.route)
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

  },
  _dropGuild: function(e) {

  },

  _updateUsername: function(e) {
    this.updateUsernameModal.showModal();
  },
  _dropGuild: function(e) {
    this.dropGuildModal.showModal()
  },
  _updateFlower: function(e) {
    this.updateFlowerModal.showModal()
  },
  _cancelUsernameEvent: function() {
    this.updateUsernameModal.hideModal();
  },
  _confirmUsernameEvent: function() {
    wx.showToast({
      title: '修改成功',
      icon: 'none',
      duration: 2000
    })
    setTimeout(() => {
      this.updateUsernameModal.hideModal();
    }, 2000)
  },
  _canceldropGuildEvent: function() {
    console.log("_canceldropGuildEvent点击取消了!");
    this.dropGuildModal.hideModal();
  },
  _confirmdropGuildEvent: function() {
    console.log("_confirmdropGuildEvent点击确定了!");
    this.dropGuildModal.hideModal();
  },
  _cancelFlowerEvent: function() {
    console.log("_confirmFlowerEvent点击取消了!");
    this.updateFlowerModal.hideModal();
  },
  _confirmFlowerEvent: function() {
    wx.showToast({
      title: '兑换鲜花成功',
      icon: 'none',
      duration: 2000
    })
    setTimeout(() => {
      this.updateFlowerModal.hideModal();
    }, 2000)
  }

})