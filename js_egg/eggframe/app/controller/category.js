'use strict';

const BaseController = require('./base.js');

class CategoryController extends BaseController {
    async index() {
        let { ctx } = this;
        // 查询参数放在url地址栏 //categories?pageNum=1&pageSize=5&keyword=a
        
        // // http://127.0.0.1:7001/api/categories?pageNum=1&pageSize=3&keyword=晚
        // let {pageNum=1,pageSize=5,keyword} = ctx.query;
        //
        // pageNum = isNaN(pageNum)? 1: parseInt(pageNum);
        // pageSize = isNaN(pageSize)? 1: parseInt(pageSize);
        // let query = {}
        // if(keyword){
        //     query.name = new RegExp(keyword);
        // }
        
        try{
            // skip 跳过条数
            // let items = await ctx.model.Category.find(query).skip((pageNum-1)*pageSize).limit(pageSize);
            // this.success('保存分类成功',{ items,pageNum,pageSize });
    
            await this.getPager({modName:'Category',fields: ['name'],populateFields:[]});
            
        }catch(error){
            this.error(error,'');
        }
    }
    // 增加文章分类
    async create(){
        let { ctx } = this;
        let category = ctx.request.body;
        try{
            let data = await ctx.model.Category.findOne(category)
            console.log(data)
            if (data){
                this.error("此分类已经存在")
            }else{
                data = await ctx.model.Category.create(category);
                this.success('保存分类成功','');
            }
        }catch (error){
            console.log(error)
            this.error(error,'');
        }
    }
    // 修改
    async update(){
        let { ctx } = this;
        let id = ctx.params.id;  // 路径参数
        let category = ctx.request.body; // {name:new}
        console.log(category)
        try{
            let result = await ctx.model.Category.findByIdAndUpdate(id,category);
            this.success("更新成功",'');
        }catch (error){
            this.error(error,'');
        }
    }
    async destroy(){
        let { ctx } = this;
        let id = ctx.params.id;  // 路径参数
        let { ids = [] } = ctx.request.body;
        ids.push(id);
        try{
            // let result = await ctx.model.Category.findByIdAndRemove(id);
            await ctx.model.Category.remove({_id:{ $in: ids }});
            this.success("删除成功",'');
        }catch (error){
            this.error(error,'');
        }
    }
    
}

module.exports = CategoryController;