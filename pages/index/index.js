// pages/index/index.js
const app = getApp();
const $http = require('../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabList:[
      {
        name: '最新评论',
        id: 1,
      },
      {
        name: '最新评客排行榜',
        id: 2,
      }
    ],
    tabMainList:[
      {
        name:'美食',
        id: 1,
        tip:"DELICACY"
      },
      {
        name: '亲子',
        id: 2,
        tip: "DELICACY"

      },
      {
        name: '休闲',
        id: 3,
        tip: "DELICACY"

      },
      {
        name: '生活',
        id: 4,
        tip: "DELICACY"

      },
    ],
    mainList:[
      {
        img: '',
        storeName: '465464',
        score: '1',
        address: 'dsfs',
        distance:14,
        viewCount: 0,
        commentCount: 0,
        favouriteCount: 0,
      }
    ],
    welfList:[1,2,3,4,5,6,7,8,9,1,2,3,4],
    tabMainIndex:0,
    tabIndex:0,
    isDrag:false,
  },

// 评论切换
  tabClick: function (event){
    this.setData({
      tabIndex: event.currentTarget.dataset.index
    })
  },
// 美食菜单切换
  clickTab: function(event){
    console.log(event.currentTarget.dataset.index)
    this.setData({
      tabMainIndex: event.currentTarget.dataset.index
    })
    
  },
  // 侧边栏菜单
  dragSlider: function () {
    console.log(132)
    this.setData({
      isDrag: !this.data.isDrag
    })
  },
  // onLaunch: function () {
  //   console.log(1)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.login({
      timeout:2000,
      success: function(res){
        console.log(JSON.stringify(res)  + '登录');
        if (res.code) {
          // 发起网络请求
          $http._get('/mb/login/' + res.code).then(res => {
            console.log(res);
            // wx.setStorage({
            //   'userInfo':res.data.token + ''
            // });
            wx.setStorage({
              key: "userInfo",
              data: res.data
            })
            wx.getStorage({
              key:"userInfo",
              success: function (res) {
                console.log(res.data.token)
                
              }
            });
            app.globalData['userInfo'] = res.data;
          })
         
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
    });

    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
            }
          })
        }
      }
    })
    console.log(this.data)
     this.setData({
      index:2
    })

    console.log(this.data)

   
    // wx.request({
    //   url:'',
    //   data:{

    //   },
    //   method:'Post',
    //   success : function () {

    //   },
    //   fail: function () {

    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(1)
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