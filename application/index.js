let http = require('http');
let context = require('./context');
let resquest = require('./request');
let respone = require('./respone');
class Koa{
    constructor(){
        this.callbackFn;
        this.context = context;
        this.request = request;
        this.respone = respone;
    }
    use(cb){
        this.callbackFn=cd;
    }
    createContext(req,res){
        //希望cte可以拿到context属性 但是不修改context属性
        let ctx = Object.create(this.context);
        ctx.request = Object.create(this.request);
        ctx.respone=Object.create(this.respone);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.respone.res = res;
        return ctx;
    }
    handleRequest(req,res){
        res.statusCode = 404;
        let ctx =  this.createContext(req,res);
        this.callbackFn(ctx);
        let body = ctx.body;
        if(typeof body === 'undefined'){
            res.send('Not Found')
        }else if(typeof body ==='string'){
            res.send(body);
        }
    }
    listen(){
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...arguments);
    }
}

module.exports = Koa;