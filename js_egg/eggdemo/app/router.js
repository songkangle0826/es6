/*
 * egg.js 和 Koa 的关系
 * egg.js是基于Koa封装的一个上级框架
 * router 其实就是路由中间件的router实例,可以再他身上定义路由规则
 * controller 控制器的容器
 * app.get('/',function(){});
 * 1. controller = {}
 * 2.得到HomeController,然后创建他的实例 let home = new HomeController;
 * 3. controller.home = home;
 * }
 */
module.exports = (app) =>{
    const { router, controller } = app;
    router.get('/',controller.home.index);
    router.get('/news',controller.news.index)
}