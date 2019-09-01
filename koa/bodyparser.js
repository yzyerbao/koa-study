const koa = require('./koa');
const app = new koa();
// app.use(require('koa-static')(__dirname + '/'));
app.use((ctx, next)=>{
    const red = ctx.request.req;
    let reqData = [];
    let size = 0;
    req.on('data', data =>{
        console.log('req on',data);
        reqData.push(data);
        size += data.length;
    })
    req.on('end',function () {
        console.log('req end');
        const data = Buffer.contact(reqData, size);
        console.log('data',size,data.toString());
    })
    next();
});
