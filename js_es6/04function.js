/*
 * 函数
*/

// 默认参数 1.必填项不填报错,2.如果有些参数没有给传参的话,可以有默认值
function ajax(url = new Error('url不能为空'),method="GET",dataType='json'){
	console.log(url);
	console.log(method);
	console.log(dataType);
	if(typeof url == 'undefined') throw Error('url不能为空');
}

// babel编译出来的结果
/*
	function ajax() {
	  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Error('url不能为空');
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
	  var dataType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
	  console.log(url);
	  console.log(method);
	  console.log(dataType);
	  if (typeof url == 'undefined') throw Error('url不能为空');
	}
*/


// 剩余运算符
function sum(prefix,...rest){
	// rest = [1,2,3,4];

	// 1.循环求和
	/*
		let result = 0;
		rest.forEach(function(item,index){
			result += item;
		})
	*/

	// reduce 计算 汇总 收敛 把一个数组中的一堆值计算出来一个值

	// eval()  计算
	return prefix + eval(rest.join('+'));
}
console.log(sum('$',1,2,3,4))




let arr4 = [1,2,3];
// 可以传一个参数,也可以穿两个参数
// 第二个参数表示初始值
// 如果没有给初始值的话,第一次执行函数的时候,val-第一个元素的 item=第二个元素, 循环少执行一次
// reduce从左往右算
arr4.reduce(function(val,item,index,origin){
	// 上一次的执行结果是下一次执行结果的初始值
	return val + item; // 返回值会成为下一次循环执行的时候的val

	// 算平局值
	let sum = val + item;
	if(index == origin.length-1){
		return sum/origin.length;
	}else{
		return sum;
	}
},0)

// reduceRight 从右往左算
arr4.reduceRight(function(val,item,index,origin){
	// 上一次的执行结果是下一次执行结果的初始值
	return val + item; // 返回值会成为下一次循环执行的时候的val
	// 算平局值
	let sum = val + item;
	if(index == 0){
		return sum/origin.length;
	}else{
		return sum;
	}
},0);



// reduce的实现原理
Array.prototype.reduce = function(reducer,initialVal){
	let result = initialVal;
	for(let i = 0;i<this.length;i++){
		initialVal = reducer(initialVal,this[i]);
	}
	return initialVal;
}



// 展开运算符 == 相当于把数组中的没个元素一次取出放在这里
let arr5 = [1,2,3];
let arr6 = [4,5,6];
//let arr7 = [].concat(arr5,arr6);
let arr7 = [...arr5,...arr6];

// 
// let max = Math.max(1,2,3);

// let max = Math.max.apply(null,arr6);
/*
	Math.max 可以实现得到数组中最大的一项
	因为Math.max 参数里面不支持Math.max([param1,param2]) 也就是数组
	但是它支持Math.max(param1,param2,param3…),所以可以根据刚才apply的那个特点来解决 var max=Math.max.apply(null,array),这样轻易的可以得到一个数组中最大的一项(apply会将一个数组装换为一个参数接一个参数的传递给方法)
	这块在调用的时候第一个参数给了一个null,这个是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个null过去
*/
let max = Math.max(...arr6);
console.log(max);


// 
let obj1 = {name:'1'};
let obj2 = {age:2};
let obj3 = {};
/*
	1.循环赋值
		for(let key in obj1){
			obj3[key] = obj1[key]
		}
		for(let key in obj2){
			obj3[key] = obj2[key]
		}
	2.Object.assign
		// 参数是target 后面的都是来源对象
		Object.assign(obj3,obj1,obj2);   // 对象合并
	3.对象
	obj3 = {...obj1,...obj2};   //es7的方法
*/



// 深拷贝和浅拷贝
let obj5 = {
	name:"哈哈哈",
	home:{
		city:'北京';
	},
	hobby:['学习','睡觉']
};



// 浅拷贝
let obj6 = {}
obj6 = Object(obj6,obj5);
obj6.home.city = "深圳";
console.log(obj6,obj5);


// 1.深拷贝1  
// let obj6 = JSON.parse(JSON.stringify(obj5));


// 方法 == 递归拷贝(简单判断,得判断各种类型的值)
function clone(origin){
	let newObject = {};
	for(let key in origin){
		if(type origin[key] == 'object'){
			newObject[key] = clone(origin[key]);
		}else{
			newObject[key] = origin[key];
		}
	}
	return newObject;
}
let obj6 = clone(obj5)


