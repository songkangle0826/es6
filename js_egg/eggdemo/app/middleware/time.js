module.exports = (options,app) =>{
    // ctx 上下文   nex执行下一层中间件
    return async function(ctx,next){
        const start = Date.now();
        await next();
        console.log(options.prefix + (Date.now() - start)+'ms');
    }
}