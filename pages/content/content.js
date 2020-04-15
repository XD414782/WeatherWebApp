// static/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    HeWeather6:{
      type:Object,
      value:{}
    },
    now:{
      type: Object,
      value: {}
    },
    transNowAttribute:{
      type: Object,
      value: {}
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
    getNow(e){
      console.log(e)
    }
  }
})
