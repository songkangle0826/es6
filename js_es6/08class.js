/*
 * 类
 * 以前js里类和构造函数是一体的
 * 类里面可以定义构造函数,当你创建一个类的时刻i的时候就会调用构造函数
*/

// 定义一个类
class Parent{
	constructor(name){
		this.name = name;	// 实例的私有属性
	}
	// 静态属性相当于给自己（parent）增加一个属性
	static hello(){
		console.log('哈啊哈');
	}
	// 属于实例的共有属性，也就相当于原型上的属性
	getName(){
		console.log(name);
	}
}


class Child extends Parent{
	constructor(name,age){
		// supe指的是父类的构造函数
		super(name);
		this.age = age;
	}
	getAge(){
		console.log(this.age)
	}
}


let p = new Parent('哈哈哈')
p.getName();



Object.create = function(prototype){
	// 先创建一个空的函数
	function Fn(){}
	Fn.prototype = prototype;
	// 返回这个函数的实例
	return new Fn() // __proto__
}






function Parent(){
	this.name = 123;
}
Parent.hello = 'hello';
function Child(){

}
// 重置constructor;
child.prototype.constructor = Child;
Child.prototype = new Parent();  == Object.create(Parent.prototype);
let child = new Child();
console.log(child.constructor);
console.log(child.name);


// child.__proto__.__proto = Parent.prototpye;

// 类和类的实例是不一样的。
// 如果一个属性放在原型上的话，是可能通过实例来调用的
// 但是放在类上，不能通过实例来调用，只能用类名来调用。


// __proto__  setPrototypeof  prototype有什么区别
// 继承是通过___proto__来关联的
// setPrototypeOf  其实就是给__proto__赋值
// prototype类的原型