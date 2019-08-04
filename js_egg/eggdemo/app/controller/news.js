const { Controller }  = require('egg');
class NewsController extends Controller{
    // 一般来说控制器只会处理
    async index(){
        let { ctx } = this;
        // 后端渲染
        let news = await this.ctx.service.news.fetch();
        await ctx.render('news.ejs',{
            news
        })
    }
}



module.exports = NewsController;