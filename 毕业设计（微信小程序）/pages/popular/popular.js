const DetailModel =require("../../models/HTTP")
Page({
  data:{
    movie:[],
    subjects:[]
  },
  onLoad:async function(options){
    var res=await DetailModel.DetailModel.getCat()
    var data=await DetailModel.DetailModel.getmodel()
    console.log(res);
    this.setData({
      movie:res.data.subjects,
      subjects:data.data.subjects
    })
  }
})