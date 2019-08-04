/*
 * node中非常重要的模块events
 * 在node里面,node是基于事件事件驱动,事件驱动就是基于EventEmitter
*/ 

let EventEmitter = require('./events');

let util = require('util');
// console.log(util);


// 这是一个类
function Bell(){
    // 继承私有属性
    console.log(this)
    EventEmitter.call(this);
}
// 子类继承父类 = 进行原型继承的
// Object.setPrototypeOf(ctor.prototype, superCtor.prototype)  // 子类的原型指向了父类的原型
// ctor.prototype__proto__ = superCtor.prototype;
// 继承共有属性
util.inherits(Bell,EventEmitter);

let bell = new Bell();
// 监听事件

//
function studentInClassroom(roomNumber,things){
    console.log(`学生带着${things}要进${roomNumber}教室了`)
}
function teacherInClassroom(roomNumber,things){
    console.log(`老师带着${things}要进${roomNumber}教室了`)
}
function masterInClassroom(roomNumber,things){
    console.log(`校长带着${things}要进${roomNumber}教室了`)
}
bell.addListener('响',studentInClassroom);
bell.on('响',teacherInClassroom);
bell.on('响',masterInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);
// bell.on('响',teacherInClassroom);



//第一个参数是事件类型,第二个参数和以后的参数会传递给监听函数
bell.emit('响','301','书');
console.log("=========")
bell.emit('响','301','书');





// 0 没有限制
bell.setMaxListemers(8);

console.log(bell.listeners('响'));

/*
*  addListener(event,listener)    对指定事件绑定事件处理函数
*  on(enent,listener)             对指定事件绑定时间处理函数
*  once(event,listener)           对指定事件指定只执行一次的时间处理函数
*  removeListener(event,listener) 对指定事件接触事件处理函数
*  setMaxListener(n)              指定时间处理函数的最大数量,n为整数值,达标最大的可指定事件粗粒函数的值
*  listeners(event)               获取指定事件的所有事件处理函数
*  emit(event,[arg1],[arg2],[..]) 手懂触发指定事件
* */





