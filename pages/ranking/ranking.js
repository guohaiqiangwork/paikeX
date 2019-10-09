// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishideback: false, //是否显示箭头
    bar_Height: wx.getSystemInfoSync().statusBarHeight,
    phone_Height: wx.getSystemInfoSync().windowHeight, //获取手机高度
    my_class_b: true,
    produc_tabFalg: '001',
    productTabList: [{
      name: '拍客排行榜',
      id: '001'
    }, {
      name: '商家排行榜',
      id: '002'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //tab切换
  productTabSwich: function (e) {
    this.setData({
      produc_tabFalg: e.currentTarget.dataset.id,

    })
  }
  
  
})