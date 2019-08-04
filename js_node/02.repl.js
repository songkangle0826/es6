/*
 * 我们可以通过代码来进入repl创建repl环境
*/
let repl = require('repl');
// 上下文，就是它支持的环境,repl可以环境中拿到一些变量
let context = repl.start().context;
context.msg = 'hello';
context.hello = function(){
	console.log(context.msg);
}


// .clear 清除上下文、

.help  // 查看所有的命令


.load //
.save // 备份代码 
