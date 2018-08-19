let koa = require("koa");

let app = new koa();
app.routes=[];
app.use=function(fn){
    app.routes.push(fn);

}
app.use((ctx)=>{
    console.log(cxt.req.url); //ctx.req=req
    console.log(ctx.request.req.url);//ctx.request.req=req
    console.log(cxt.request.url);//ctx.request是koa自己封装得到
    console.log(ctx.url);//用ctx代理，ctx.request属性

})

function dispatch(index){
    //现取出第一个中间件 让其执行
    //将索引递增 调用next，就是将下一函数执行
    if(index===app.routes.length) return null;
    let moddleware = app.routes[index];
    moddleware({},()=>dispatch(index+1));
}
dispatch(0);

//koa 可以使用async await 
let log = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('ok');
            resolve();
        }, 1000);
    })
}