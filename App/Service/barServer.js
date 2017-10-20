/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
app.factory("barServer",["baseServer",function(baseServer){
    return{
        getProductd:function(type,url){
            return baseServer.ajax(type,url);
        }
    }
}])