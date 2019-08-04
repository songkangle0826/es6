const { Controller } = require('egg');

class BaseController extends Controller {
    success(msg,data=''){
        this.ctx.body = {
            code: 0,
            data:data,
            msg: msg
        }
    }
    error(error,data=''){
        this.ctx.body = {
            code: 1,
            data: data,
            msg: error
        }
    }
    async getPager({modName,fields=[],populateFields=[]}){
        let { ctx } = this;
        let {pageNum=1,pageSize=5,keyword=''} = ctx.query;
        pageNum = isNaN(pageNum)? 1: parseInt(pageNum);
        pageSize = isNaN(pageSize)? 1: parseInt(pageSize);
        let query = {};
        
        if(keyword && fields.length>0){
            query['$or'] = fields.map(field=>({[field]: new RegExp(keyword) }))
            //[{title:new RegExp(keywod)},{content:new RegExp(keyword)}];
        }
        let count = await ctx.model[modName].count(query);
        
        let cursor = ctx.model[modName].find(query).sort({ _id: -1 }).skip((pageNum-1)*pageSize).limit(pageSize);
        
        
        populateFields.forEach((field)=>{
            cursor = cursor.populate(field);
        })
        
        //let items = await ctx.model[modName].find(query).populate('category').populate('user').populate('comments.user').skip((pageNum-1)*pageSize).limit(pageSize);
        let items = await cursor;
            this.success('',{
            total: count,
            pageNum,
            pageSize,
            items,
            pageCount: Math.ceil(count/pageSize)
        });
    }
    get user(){
            return this.ctx.session.user
    }
}

module.exports = BaseController;
