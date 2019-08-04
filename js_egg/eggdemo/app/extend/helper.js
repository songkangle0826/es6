let moment = require('moment');
moment.locale('zh-cn');


// 将moment插件自动挂载到了this.ctx.helper上了
exports.relative = function(time){
    return moment(time).fromNow();
}