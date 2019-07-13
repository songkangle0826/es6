/*
 * 结构 分解一个对象的结构(对象和数组的结构)
*/ 

/*
	数组结构
	let arr = [1,2,3];
	// let a = arr[0];
	// let b = arr[1];
	// let c = arr[2];
	// 结构的时候,等号的两倍结构类似,右边还必须是一个真实的值
	let [a,b,c] = arr;
	console.log(a,b,c);


	let arr2 = [{name:'zfpx',age:9},[1,2],3];
	// let [{name,age},[d,e],f] = arr2;
	let [json,arr3,f] = arr2;
	// console.log(name,age,d,e,f);
	console.log(json,arr3,f);
*/

/*
	// 对象结构
	let obj1 = {
		name : 'zfpx',
		age : 9
	};
	let {name:myname,age:myage} = obj1;
	console.log(myname,myname)
*/

// 默认结构,如果能去除值就用取出来的值,如果取不出来就用默认
let obj2 = {name:'123',age:9};
let {name,age=8} = obj2;
console.log(name,age);

// 省略赋值
let arr4 = [1,2,3];
let [,,f] = arr4;
console.log(f);






