var config  = require('../../comm/script/config')
Page({
  data:{
    searchType: 'keyword',
    hotKeyword: config.hotKeyword,
    hotTag: config.hotTag
  },
  changeSearchType: function() {
    var types = ['默认', '类型'];
    var searchType = ['keyword', 'tag']
    var that = this
    wx.showActionSheet({
      itemList: types,
      success: function(res) {
        console.log(res)
        if (!res.cancel) {
          that.setData({
            searchType: searchType[res.tapIndex]
          })
        }
      }
    })
  },


})