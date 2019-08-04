'use strict';

const BaseController = require('./base.js');

class UsersController extends BaseController {
    async sigup() {
        let { ctx } = this;
        // 得到请求体 {username,password,email}
        let  user = ctx.request.body;
        try{
            let doc = await ctx.model.User.create(user);
            this.success('注册成功',{ doc })
        }catch(error){
            this.error({ error })
        }
    }
    async sigin(){
        let { ctx } = this;
        let user = ctx.request.body;
        try {
            user = await ctx.model.User.findOne(user);
            if(user){
                // 如果登录成功了,则需要写入session回话
                // 可以通过ctx.session.use是否为null来判断此用户是否登录
                ctx.session.user = user;
                this.success('登录成功',{
                    username: user.username,
                    email: user.email,
                    id: user._id
                })
            }else{
                this.success('用户名或密码错误','');
            }
        }catch(error){
            this.error('用户名或密码错误','');
        }
    }
    async sigout(){
        let { ctx } = this;
        ctx.session.user = null;
        this.success('退出成功','');
    }
}

module.exports = UsersController;