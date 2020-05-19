// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "HeWeather6": null,
    "profile": {
      "headimage": "../../static/img/citrus2.jpg",
      "customItem": '全部',
      "region":['湖南省', '长沙市', '望城区'],
    },
    "transNowAttribute":{
      "fl":"温度",
      "pres":"气压",
      "vis": "能见度",
      "wind_dir": "风向",
      "wind_spd": "风速",
      "wind_sc": "风力"
    }
  },
  locationChange: function (e) {
    const that = this
    let location = e.detail.region[1]
    wx.request({
      url: '你的url',
      data:{
        "location": location
      },
      success:function(res){
        that.setData({"HeWeather6":res.data.HeWeather6})
        that.setData({"profile.region": e.detail.region})

      },
      fail:function(){
        console.log("请求失败")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 因为回调函数中的作用域已经脱离了调用函数，因此需要在回调函数外边把this赋给一个新的变量才可
    const that = this;
    wx.request({
      url: '你的url',
      success: function (res) {
        that.setData({ "HeWeather6":res.data.HeWeather6})
      },
      fail: function () {
        console.log("请求失败")
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
