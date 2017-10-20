/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
app.factory("carServer",["baseServer",function(baseServer){
    return{
        getProduct:function(type,url){
            return baseServer.ajax(type,url);
        }
    }
}])