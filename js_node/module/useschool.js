/*
 * 在node.js里通过require加载其他模块
 * 这里加载是同步的
 * 如何加载的？
 *	1.找打这个文件
 	2.读取此文件模块的内容
 	3.把它封装在一个函数里执行
*/

let school = require('./school');

debugger;
console.log(school)