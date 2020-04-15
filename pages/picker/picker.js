// static/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    profile:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    change: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      // 给region赋值
      let region = e.detail.value
      // 告诉父组件 要重新请求服务器
      this.triggerEvent('customevent', {region}, { bubbles: true, composed: true }) 
      
    }
  }
})
