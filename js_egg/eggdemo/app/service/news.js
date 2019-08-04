const { Service } = require('egg');

class NewsService extends  Service{
    // eggJS里内置一个方法, 用来读取远程接口数据
    async fetch(){
        // config是this的属性
        let { data } = await this.ctx.curl(this.config.news.url);
        // 将buffer对象转化为对象
        data = data.toString();
        let reg = /<a href="(.+?)".+>([\s\S]+?)<\/a>/g;
        let news = [];
        data.replace(reg,(metch,url,title)=>{
            news.push({
                title,
                url,
                time: this.ctx.helper.relative(new Date())
            })
        })
        data.replace();
        return news;
    }
}

module.exports = NewsService;