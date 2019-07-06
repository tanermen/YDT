// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:[
      {name:'张三',id:0},
      { name: '张三', id: 0 }
      ],
    region: ["四川省", "成都市", "双流区"],
    idx:''
  },
  saleChange(e){
    // 所属销售
    var that = this;
    var idx = e.detail.value;
    this.setData({
      idx
    })
  },
  cityChange(e){
    // 城市选择器
    var region = e.detail.value;
    this.setData({
      region
    })
  },
  formSubmit(){
    
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

  }
})