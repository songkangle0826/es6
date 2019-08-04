
// 把标准输出流输入到文件中
console.log(1);  //
console.info(1);

// 错误输出  
// 把错误输出2 重定性到标准输出1中
// node xxx.js 1>a.log 2>&1
console.warn(2);
console.error(2);

// 用来统计两段代码之间执行时间的
console.time('cost');
for(let i = 0;i<100000;i++){

}
console.timeEnd('cost');  //输出时间差

// 高手进阶的非常重要标志就是写代码会有完善的测试，包括单元测试，集成测试， 持续测试 
// TDD 测试驱动开发 
// BDD 行为驱动开发


// 断言
// 如果表达式结果为真的话就什么不发生
// 如果表达式结果为假的话就会报错 nagios 监控服务器的


function sum(a,b){
	return a+b+1;
}
// console.assert(sum(1,2)==5,'报错了');



let a = {
	name: 'hahaha',
	home: {
		name: '北京'
	}
}

// 可以列出对象的结构
console.dir(global);


// 跟踪当前代码的调用栈
console.trace();