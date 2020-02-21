var baseUrl = "http://yapi.demo.qunar.com/";
class http{
    static request({url}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                header: {
                    'Content-Type': 'application/text'
                },
                success: function(res) {
                    resolve(res)
                },
                fail: function(err) {
                    reject(err)
                }
            })
        })
    }
}
class DetailModel extends http{
    static getDetailData(url){
        return this.request({
            url:"mock/39606/movie"
        })
    }
}
module.exports = DetailModel
