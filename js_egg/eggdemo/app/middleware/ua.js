module.exports = (options,app) =>{
    return async function(ctx,next){
        let userAgent = ctx.get('user-agent');  // 得到了就是请求头中的User-agent
        // let ua = [/Chrome/,/Firefox/];
        let matched = options.uas.some(item=>item.test(userAgent));
        console.log(matched)
        if(matched){
            ctx.status= 403; //forbidden;
            ctx.body = "无权访问"
        }else{
            await next();
        }
    }
}