/*
 * var
 * 1.可以重复声明
 * 2.不支持定义常量  var PI
 * 3.不支持块级作用域 if(true){ var a = 10}	
*/

// Uncaught SyntaxError: Identifier 'a' has already been declared
	// 变量a已经声明过了,不能重复声明;
let a = 10;
let a = 20;

const PI = 3.14;
PI = 3.16;
// 视图给一个常量赋值,这是错误的
// VM490:1 Uncaught TypeError: Assignment to constant variable.

if(true){
	let b = 10;
}
// Uncaught ReferenceError: b is not defined
console.log(b);

// es6以前,JS只有两个作用域,一个全局,一个函数级
;(function(){

})();

let a = 20;
{
	// a is not defined
	// let没有欲解释
	console.log(a);
	let a = 10;
}

// let 作用域(原理)== 还是用原来函数的作用域
for(var i = 0;i<3;i++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		})
	})(i)
}
for(let i = 0;i<3;i++){
	setTimeout(function(){
		console.log(i);
	})
}



// const
const PI = 3.14;
console.log(PI);
// 虽然说常量不能再引用别的对象,但是他的值如果是一个引用类型的话,引用对象的属性还是可以修改的;
const user = {
	PI : 3.14
}
user.PI = '3.15';