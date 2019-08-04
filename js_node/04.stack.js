// 执行上下文环境栈
// 私有闭包 this 参数 私有变量 上级作用域变量
function one(){
	console.log(1);
	let a = 'a';
	two();
	function two(){
		console.log(2);
		let b = 'b';
		three();
		function three(){
			let c = 'c';
			console.log(a,b,c);
			console.log(3)
		}
		console.log(4);
	}
	console.log(5);
}
one();  // 1 2 3 4 5