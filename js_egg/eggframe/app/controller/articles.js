'use strict';
const BaseController = require('./base.js');

class ArticlesController extends BaseController{
    // 查询
    async index(){
        let { ctx } = this;
    
        // let {pageNum=1,pageSize=5,keyword=''} = ctx.query;
        // pageNum = isNaN(pageNum)? 1: parseInt(pageNum);
        // pageSize = isNaN(pageSize)? 1: parseInt(pageSize);
        // let query = {};
        // if(keyword){
        //     query['$or'] = [{title:new RegExp(keyword)},{content:new RegExp(keyword)}];
        // }
        try{
            await this.getPager({modName:'Article',fields:['title','content'],populateFields:['category','user','comments.user']});
            // let items = await ctx.model.Article.find(query).skip((pageNum-1)*pageSize).limit(pageSize);
            //this.success('',{items});
        }catch(error){
            this.error(error,'');
        }
    }
    // 增加文章
    async create(){
        let { ctx } = this;
        let article = ctx.request.body;
        article.user = this.user;
        article.category = ctx.request.body.category;
        try{
            article = await  ctx.model.Article.create(article);
            this.success('文章发表成功','');
        }catch(error){
            this.error(error,'');
        }
    }
    async update(){
        let { ctx } = this;
        let id = ctx.params.id;
        let article = ctx.request.body;
        
        try{
            article = await ctx.model.Article.findByIdAndUpdate(id,article);
            this.success('更新文章成功',{ article })
        }catch(error){
            this.error(error,'');
        }
    }
    async destroy(){
        let { ctx } = this;
        let id = ctx.params.id;
        try{
            // let result = await ctx.model.Article.findByIdAndRemove(id);
    
    
            let { ids = [] } = ctx.request.body;
            ids.push(id);
    
            await ctx.model.Article.remove({_id:{ $in: ids }});
            
            this.success('删除成功')
        }catch(error){
            this.error(error,'');
        }
    }
    // 添加pv
    async addPv(){
        let { ctx } = this;
        let id = ctx.params.id;
        try{
            await ctx.model.Article.findByIdAndUpdate(id,{ $inc: { pv: 1} });  //$int+1
            this.success("修改pv成功",'');
        }catch(error){
            console.log(error)
            this.error(error,'');
        }
    }
    async addComment(){
        let { ctx } = this;
        let id = ctx.params.id;
        let comment = ctx.request.body;
        comment.user = this.user;
        try{
            await ctx.model.Article.findByIdAndUpdate(id,{$push:{comments:comment}});
            this.success("评论成功",'');
        }catch(error){
            this.error(error,'');
        }
    }
    async deleteComment(){
        let { ctx } = this;
        let { article_id,comment_id } = ctx.request.body;
        try{
            await ctx.model.Article.findByIdAndUpdate(article_id,{$pull:{comments: {_id: comment_id} }});
            this.success("删除评论成功",'');
        }catch(error){
            this.error(error,'');
        }
    }
    
    
}

module.exports = ArticlesController;