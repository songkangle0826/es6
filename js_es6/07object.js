let name = '哈哈哈';
let age = 9;
// 如果对象的属性名和变量名如果一样的话可以二合一
// let obj = {name:name,age:age};
let obj = {name,age};


let obj1 = {age:1,getFoot(){
	return '面包';
}};
let obj3 = {
	__proto__: obj1,
	getFoot(){
		// super可以调用原型链上的方法
		return "牛奶"+super.getFoot();
	}
}
console.log(obj3.getFoot)


/*
let obj2 = {age:2};
let obj3 = {};
// setPrototypeOf

// 设置obj3的原型为obj1;
// Object.setPrototypeOf(obj3,obj1); == obj3.__proto__ = obj1;
*/