//logs.js
var util = require('../../utils/util.js')
var postsData = require('../../data/data_index')
var app = getApp();
Page({
  data: {
    navTab: ["通知", "赞与感谢", "关注"],
    currentNavtab: "0"
  },
  onLoad: function (option) {
    var postData =postsData.index.data;
    postData = postData.slice(0,3);
    console.log(postData)
    this.setData({
      
      postData: postData
    })

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})
