/*
 * 模板字符串
*/
let name='1234',age=9;
// let desc =  name+"今年"+age+"9岁了";
/*
 * 1.字符串里可以嵌套变量
 * 2.模板字符串可以换行
*/

// let desc = `${name}今年${age}岁了`;


// 原理
let desc = "${name}今年${age}岁了";
function replace(desc){
	return desc.replace(/\$\{([^}]+)\}/g,function(matched,key,value){
		// function的形参参数是根据arguments中的参数对应取出来的
		console.log(arguments,matched,key,value);
		return eval(key);
	})
}


// eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码
// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

console.log(replace(desc));
// 模板字符串


// 模板字符串可以换行
let users = [{id:1,name:'sdfg'},{id:2,name:'edcv'}];
/*
 * <ul>
 *	<li></li>
 *  <li></li>
 * </ul>
*/

// 映射,把老数组里的每一个元素映射为新数组的每一个元素
let newList = users.map(function(user,index){
	return `<li>${user.id}:${user.name}</li>`
}).join('');
let ul = (
	`
		<ul>
			${newList}
		</ul>
	`
)
console.log(ul);


let str3 = 'zfpx';
str3.startWith('z');


// startWith() 以什么开头
// endWith()   以什么结尾
// include()   包含
// repeat	   重复复制




let str = desc(`${name}今年${age}岁了`);
function desc(strings,...values){
	// console.log(strings);
	// console.log(values);
	let results = '';
	for(let i = 0;i<values.length;i++){
		results += (values[i] + strings[i])
	}
	return results;
}
console.log(str);






