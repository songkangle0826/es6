/*
 * 箭头函数
 * 1.声明函数的更简单的方法
*/

// let sum - function(a,b){
// 	return a+b;
// }

let sum = (a,b)=>{
	return a+b;
}
sum(a,b);
// 如果有且只有一个参数,可以省略小括号
// 如果只有返回主,没有的函数体代码,则可以省略{}
let double = num => num*2;


// 
let obj = {
	name : 'zfpx',
	getName(){
		// let 
		// setTimeout(function(){
		// 	console.log(this.name);  // window;
		// },1000)
		// 箭头函数没有自己的this,他会使用上层的this;
		setTimeout(()=>{
			console.log(this.name);  // window;
		},1000)

	}
}


// 箭头函数的this是定死的,指向外层的this;(定义的时候就定死了)
// 箭头函数虽然好,但不能应用所有的情况.


// js中只有两种作用域,一是全局,二是函数
let obj8 = {
	name : '哈哈哈',
	// 箭头函数中this指向上下文,这里没有函数,所以this指向了window
	getName:()=>{
		console.log(this.name);
	}
}
obj8.getName();		// undefined

let obj9 = {
	name: '9',
	gN : obj8.getName,
}
obj9.gN();	// undefined
