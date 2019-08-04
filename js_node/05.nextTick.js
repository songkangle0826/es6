/*
 nextTick  setImmediate 区别

 nextTick 把回调函数放到当前执行栈的底部
 setImmediate 把回调函数放在事件队列的尾部(推荐使用)
*/

function read(){
	setImmediate(function(){
		console.log(1)
		process.nextTick(function(){
			console.log(2)
			process.nextTick(function(){
				console.log(3)
				
			})
			setImmediate(function(){
				console.log(5);
			})
			setTimeout(function(){
				console.log(6);
			})
		})
	})
	process.nextTick(function(){
		console.log(0)
	})
}
read();		 // 0 1 2 3 6 5