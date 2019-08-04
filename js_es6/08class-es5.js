
// 类的调用检擦，1参数是类的实例 2参数构造函数
function _classCallCheck(instance, Constructor) { 
  // 如果这个实例不是这个构造函数的实例的化，就报错了，Cannot call a class as a function不能把一个类当作普通函数来调用
  if (!_instanceof(instance, Constructor)) { 
    throw new TypeError("Cannot call a class as a function"); 
  } 
}

function _defineProperties(target, props) {
  // target目标 props是属性对象数组
  for (var i = 0; i < props.length; i++) {
    // 取出每个属性描述器 
    var descriptor = props[i];
    // 可枚举 == for in 能循环处理
    descriptor.enumerable = descriptor.enumerable || false;
    // 可配置  可以通过delete 删除此属性
    descriptor.configurable = true; 
    // 可修改
    if ("value" in descriptor) descriptor.writable = true; 
    // 正在的向parent原型上增加属性
    Object.defineProperty(target, descriptor.key, descriptor); 
  }
}

// 1个参数是构造函数， 2原型上的属性 静态属性（类上的属性）
function _createClass(Constructor, protoProps, staticProps) {
  // 如果有原型属性的话
  if (protoProps) _defineProperties(Constructor.prototype, protoProps); 
  if (staticProps) _defineProperties(Constructor, staticProps); 
  return Constructor; 
}

var Parent = function () {
  function Parent(name) {
    // 为了保证这个类只能用来new去调用
    _classCallCheck(this, Parent);

    this.name = name; // 实例的私有属性
  } // 属于实例的共有属性，也就相当于原型上的属性


  _createClass(Parent, [{
    key: "getName",
    value: function getName() {
      console.log(name);
    }
  }], [{
    key: "hello",
    value: function hello() {
      console.log('哈啊哈');
    }
  }]);

  return Parent;
}();