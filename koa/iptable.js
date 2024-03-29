// iptable.js
module.exports = async function(ctx, next) {
    const { res, req } = ctx;
    const blackList = ['127.0.0.1'];
    const ip = getClientIP(req);

    if (blackList.includes(ip)) {//出现在⿊名单中将被拒绝
        ctx.body = "not allowed";
        开课吧web全栈架构师
    } else {
        await next();
    }
};
function getClientIP(req) {
    return (
        req.headers["x-forwarded-for"] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress
    );
}
// app.js
// app.use(require("./interceptor"));
// app.listen(3000, '0.0.0.0', () => {
//     console.log("监听端⼝3000");
// });
