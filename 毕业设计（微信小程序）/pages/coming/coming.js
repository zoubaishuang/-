const DetailModel =require("../../models/DetailModel")
Page({
  data:{
    cinema:[]
  },
  async onLoad(){
    var res = await DetailModel.getDetailData()

  var cinema = res.data
  console.log(cinema)
    this.setData({
   cinema
     
    })
  },
  handleToggle(){
    console.log(1);
      wx.navigateTo({
      url: '/pages/Comment/Comment',
  
    })
  }
 
  
 
})