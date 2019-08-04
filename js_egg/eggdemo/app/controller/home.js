const { Controller }  = require('egg');
class HomeController extends Controller{
    async index(){
        // ctx上下文对象 他里面有很多的属性和方法 .request .response
        // ctx.body = ctx.respons.body;
        this.ctx.body = "hello world";
    }
}



module.exports = HomeController;