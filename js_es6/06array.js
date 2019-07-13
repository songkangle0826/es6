let arr1 = [24,56,88,90,5];
// filter 返回true此元素保留在新数组没返回false则删除

// filter原型连上的方法
Array.prototype.filter = function(fn){
	let newArr = [];
	for(let i = 0;i<this.length;i++){
		let flag = fn(this[i]);
			flag&&newArr.push(this[i]);
	}
	return newArr;
}

let result = arr1.filter(function(item){
	return item>=60
})
console.log(result);



let arr3 = Array(3);
console.log(arr3);
arr3.filter(1);



// map reduce reducerRight filter forEach
// some find findIndex every


// find方法
// find原型链上的方法
Array.prototype.find = function(fn){
	for(let i = 0;i<this.length;i++){
		let flag = fn(this[i]);
		if(flag){
			return this[i];
		}
	}
}
let result2 = arr1.find(function(fn){
	return item == 2;
})
console.log(result2);

// findIndex 返回索引
// findIndex原型链上的方法
Array.prototype.findIndex = function(fn){
	for(let i = 0;i<this.length;i++){
		let flag = fn(this[i]);
		if(flag){
			return i;
		}
	}
}
let result3 = arr1.findIndex(function(fn){
	return item == 2;
})
console.log(result2);

// some方法
Array.prototype.some = function(fn){
	for(let i = 0;i<this.length;i++){
		let flag = fn(this[i]);
		if(flag){
			return falg;
		}
	}
	return false;
}

// every 要求每一个元素都要符合条件
Array.prototype.every = function(fn){
	let falg = true
	for(let i = 0;i<this.length;i++){
		let flag = fn(this[i]);
		if(!flag){
			return !falg;
		}
	}
	return falg;
}


// from
function print(){
	// arguments 是一个类数组,需要转换为数组
	// [].slice.call(arguments)
	// let arr = Array.prototype.slice.call(arguments);
	// Array.prototype.forEach.call(arguments,function(item){
	// 	console.log(item);
	// })
	// 类数组转数组
	Array.from(arguments).forEach(function(item){
		console.log(item);
	})

	arguments.
	return a+b;
}
print('a','b','c')
// 希望吧一个类数组变成一个数组


let arr5 = Array(3);
console.log(arr5);

let arr6 = Array.of(3);
console.log(arr6);





