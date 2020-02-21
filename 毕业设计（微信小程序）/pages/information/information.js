const DetailModel = require('../../models/HTTP');
Page({
data:{
  movie:[],
  x:true,
  isShow:true
},
onLoad:async  function(options) {
  let id = options.id
  var isShow=!this.data.isShow
  console.log(id)
var res = await DetailModel.DetailModel.getDetailData(id)
this.setData({
  movie:res.data,
  isShow
})
  
},
handleImage(e){
  var url =e.currentTarget.dataset.url;
  var casts = this.data.movie.casts;
  var urls = casts.map(item=>{
    return item.avatars.small;
  })
  wx.previewImage({
    current: url,
    urls
  });
},
handleToggle(){
  console.log(1);
    wx.navigateTo({
    url: '/pages/Comment/Comment',

  })
}
})