const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 封装请求
const request = (url, method, data, cb) => {
  var baseApi ="https://51zhaomen.com"
  wx.request({
    url: baseApi + url,
    method,
    data,
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      cb(res)
    },
    fail: (res) =>{
      wx.hideLoading()
      wx.showToast({
        title: '服务器请求失败',
        icon: 'none',
        duration: 2000
      })
    }
  })
} 
const showLoading = (title) => {
  wx.showLoading({
    title,
    mask: true
  })
}
const success = (title) => {
  wx.showToast({
    title,
    icon: 'success',
    duration: 2000
  })
}
const error = (title) => {
  wx.showToast({
    title,
    icon: 'none',
    duration: 2000
  })
}
module.exports = {
  formatTime,
  request,
  showLoading,
  success,
  error
}
