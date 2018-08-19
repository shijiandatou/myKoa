let url = request('url');
let request={
    get url(){
        return this.req.rul;
    },
    get path(){
        return url.parse(this.req.url).pathname;
    }
}
module.exports = request;