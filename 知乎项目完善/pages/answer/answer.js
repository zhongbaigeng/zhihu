//answer.js
var util = require('../../utils/util.js')

var postsData = require('../../data/data_index')
var app = getApp();
Page({
  data: {
    motto: '知乎--微信小程序版',
    userInfo: {},
    addBookrackSucceed: true,
    CollectionSucceed: true,
    HelpSucceed: true,
    iconAddBookrack: "../../images/heart2.png",         //感谢图标
    iconAddBookrackSucceed: "../../images/heart.png",         //感谢成功图标    
    iconCollection: "../../images/star2.png",         //收藏图标
    iconCollectionSucceed: "../../images/star3.png",         //收藏图标成功图标  
    iconHelp: "../../images/star2.png",         //收藏图标
    iconHelpSucceed: "../../images/star3.png",         //收藏图标成功图标  
    isChecked: false
  },
  //事件处理函数
  toQuestion: function(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.qid)
    var qid=event.currentTarget.dataset.qid
    wx.navigateTo({
      url: '../question/question?id='+qid
    })
  },
  onLoad: function (option) {
    console.log('onLoad-----------------------------------'+option.id)
    var id = option.id;
   
    var postData =postsData.index.data[parseInt(id)-1];
    console.log(postData)
    this.setData({
      
      postData: postData
    })
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
  },
  clickOn:function(event){
    let value = this.data.isChecked;
    if(value){
      wx.showToast({
        title: '取消关注',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        isChecked: !value
      })
    }else{
      wx.showToast({
        title: '关注成功',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        isChecked: !value
      })
    }
    
    console.log(value)
  },
  clickThank:function(event){
    let value = this.data.addBookrackSucceed;
    wx.showToast({
      title: '加入成功',      //标题
      icon: "success",        //图标类型, 默认success
      duration: 1500                //提示框停留时间, 默认1500ms
    })
    this.setData({
      addBookrackSucceed: !value
    })
    console.log(value)
  },
  chooseAddBookrack:function(event){
    let value = this.data.addBookrackSucceed;
    if(value){
      wx.showToast({
        title: '感谢成功',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        addBookrackSucceed: !value
      })
    }else{
      wx.showToast({
        title: '取消感谢',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        addBookrackSucceed: !value
      })
    }
    
    console.log(value)
  },
  chooseCollection:function(event){
    let value = this.data.CollectionSucceed;
    if(value){
      wx.showToast({
        title: '收藏成功',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        CollectionSucceed: !value
      })

    }else{
      wx.showToast({
        title: '取消收藏成功',      //标题
        icon: "success",        //图标类型, 默认success
        duration: 1500                //提示框停留时间, 默认1500ms
      })
      this.setData({
        CollectionSucceed: !value
      })
    }
    
    
    console.log(value)
  }

})
