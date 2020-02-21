var baseUrl = "https://douban-api.uieee.com/";
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
    static getDetailData(id){
        return this.request({
            url:`v2/movie/subject/${id}`,
        })
    }
    static getCat(){
        return this.request({
            url:"v2/movie/in_theaters"
        })
    }
    static getmodel(){
        return this.request({
            url:"v2/movie/coming_soon"
        })
    }
}
module.exports = {DetailModel}