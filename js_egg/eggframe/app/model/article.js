module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    let ArticleSchema = new Schema({
        title: { type:String,require:true},     // 标题
        content: { type:String,require:true},   // 正文
        user:{                                  // 用户
            type: ObjectId,
            ref: 'User'
        },
        pv: {type:Number,default:0},            // 浏览量
        category:{                              // 分类
            type: ObjectId,
            ref: 'Category'
        },
        comments:[                              // 评论
            {
                user:{
                    type: ObjectId,
                    ref: 'User'
                },
                content: String,
                creatAt: { type: Date,default:Date.now}
            }
        ],
        creatAt: { type: Date,default:Date.now} //创建时间
    });
    return mongoose.model('Article',ArticleSchema)
}