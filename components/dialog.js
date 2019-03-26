// common/component/modal.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '这里是默认标题'
    },
    height: {
      type: Number,
      value: 524
    },
    width: {
      type: Number,
      value: 620
    },
    cancelText: {
      type: String,
      value: '取消'
    },

    confirmText: {
      type: String,
      value: '确定'
    },

    backdrop: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },


  ready: function() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //modal隐藏
    hideModal: function(e) {
      if (e) {
        let type = e.currentTarget.dataset.type;
        if (type == 'mask' && !this.data.backdrop) {
          return;
        }
      }
      if (this.data.isShow) this._toggleModal();
    },

    //modal显示
    showModal: function() {
      if (!this.data.isShow) {
        this._toggleModal();
      }
    },

    //切换modal的显示还是隐藏
    _toggleModal: function() {
      this.setData({
        isShow: !this.data.isShow
      })


    },
    //取消事件 向外部page 发送事件通知
    _cancelModal: function() {
      this.triggerEvent("cancelEvent");
    },

    //确认事件
    _confirmModal: function() {
      this.triggerEvent("confirmEvent");
    }

  }
})