/*
 * global全局对象
 * window里面也有全局对象，但是不能直接访问，我们在浏览器里访问global是通过window实现的
 *
 * 1.global的变量都是全局的
 * 2.所有的全局变量都是global的属性
*/ 

// console.log(global);

//  process 当前进程 
// argv 如何写一个vue-cli脚手架
// chdir cwd memoryUsage
// console.log(process);


console.log(process.cwd())   //cwd 当前工具目录

process.chdir('..');  //切换到上级目录

console.log(process.cwd());


console.log(process.memoryUsage());  //内存的使用量

// V8引擎最大使用内存量式1.7G
{  
	rss: 21549056,				// 常驻内存
  	heapTotal: 7159808,			// 堆内存总申请量
  	heapUsed: 4486384,			// 已经使用的量
  	external: 8224 				// 外部内存的使用量
}