//answer.js
var util = require('../../utils/util.js')
var postsData = require('../../data/data_index')
var app = getApp();

Page({
  data: {
    motto: '知乎--微信小程序版',
    userInfo: {},
    isChecked: false
  },
  //事件处理函数
  bindItemTap: function(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.qid)
    var qid=event.currentTarget.dataset.qid
    wx.navigateTo({
      url: '../answer/answer?id='+qid
    })
  },
  clickOn:function(event){
    let value = this.data.isChecked;
    if(value){
      wx.showToast({
        title: '关注成功',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        isChecked: !value
      })
    }else{
      wx.showToast({
        title: '取消关注',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        isChecked: !value
      })
    }
    
    console.log(value)
  },
  onLoad: function (option) {
    console.log('onLoad---------------=========-------------'+option.id)
    var id = option.id;
    var AllpostData=postsData.index.data;
    console.log(AllpostData)
    var postData =postsData.index.data[parseInt(id)-1];
    console.log(postData)
    this.setData({
      AllpostData:AllpostData,
        postData: postData
    })
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event){
    console.log(event)
  }
})
