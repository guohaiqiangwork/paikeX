const baseUrl = 'http://192.168.1.200:9090';
const app = getApp();
const http = ({ url = '', param = {}, ...other } = {}) => {
  wx.showLoading({
    title: '请求中，请耐心等待..'
  });
  let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      ...other,
      complete: (res) => {
        // console.log(res);
        wx.hideLoading();
        console.log(`耗时${Date.now() - timeStart}`);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else if(res.code == 3){
          wx.login({
            timeout: 2000,
            success: function (res) {
              console.log(res);
              if (res.code) {
                var _this = this;
                // 发起网络请求
                http._get('/mb/login/' + res.code).then(res => {
                  console.log(res);
                  wx.setStorage({
                    key: "userInfo",
                    data: res.data
                  })
                  app.globalData.userInfo = res.data;
                })

              } else {
                console.log('登录失败！' + res.errMsg)
              }
            },
          });
        }
        else {
          console.log(url)
          reject(res)
        }
      }
    })
  })
}

const getUrl = (url) => {
  url = baseUrl + url;
  return url
}

// get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const _post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'post'
  })
}

const _put = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}

module.exports = {
  baseUrl,
  _get,
  _post,
}



