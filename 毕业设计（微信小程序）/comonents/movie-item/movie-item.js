
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
    handleToggle(){
      var id = this.properties.data.id;
  
      
      wx.navigateTo({
        url: '/pages/information/information?id='+id
      });
    }
  }
})