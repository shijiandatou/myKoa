import { prototype } from "stream";

let proto={
    
}
//prto.url = ctx.request.url
function defineGetter(property,name){
    //自定义获取器 代理
    //proto.url = proto.request.url
    proto.__defineGetter__(name,function(){
        return this[prototype][name];
    });
}
function defineSetter(prototype,name){
    proto.__defineSetter__(name,function(value){
        this[prototype][name]=value
    })
}
defineGetter('request','url');
defineGetter('request','path');
defineGetter('respone','body');
defineSetter('respone','body');
module.exports=proto;