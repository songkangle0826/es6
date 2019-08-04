// js会先执行栈里面的东西，然后再去执行其他的
function read(){
	console.log(1)
	setTimeout(function(){
		console.log(2)
		setTimeout(function(){
			console.log(4)
		},2)
	},2)
	setTimeout(function(){
		console.log(5)
	},2)
	console.log(3)
}

read();			// 1 3 2


// 事件是什么时候加入队列的？   ===异步成功之后放进来的




function read(filename){
	cb(filename)
}






function next(){
	console.log(111);
	setTimeout(function(){
		conmsole.log(222)
	},1)
	//nextTick 是把这个回调函数放在当前执行栈的尾部
	process.nextTick(function(){
		consoole.log(333);
		process.nextTick(function(){
			consoole.log(444);
			process.nextTick(function(){
				consoole.log(555);
			})
		})	
	})
	console.log(666);
}

next();		// 111  666  333  444  555