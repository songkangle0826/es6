"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { 
  //如果父类不是函数，并且父类不等于null
  if (typeof superClass !== "function" && superClass !== null) { 
    throw new TypeError("Super expression must either be null or a function"); 
  } 

  subClass.prototype = new superClass;
  // 让子类的prototype 等于父类的一个实例，另外还要覆盖constructor，让constructor执行subClass，否则constructor会指向superClass
  // 给子类的构造函数重写原型prototype
  subClass.prototype = Object.create(superClass && superClass.prototype, { 
    // 重写constructor
    constructor: { 
      value: subClass, 
      writable: true,
      configurable: true 
    } 
  }); 
  // subClass.__proto__ = superClass;
  // 让子类的__proto__等于父类，这一步是为了让子类继承父类的静态属性


  if (superClass) _setPrototypeOf(subClass, superClass); 
}

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parent = function () {
  function Parent(name) {
    _classCallCheck(this, Parent);

    this.name = name; // 实例的私有属性
  } // 静态属性相当于给自己（parent）增加一个属性


  _createClass(Parent, [{
    key: "getName",
    // 属于实例的共有属性，也就相当于原型上的属性
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

var Child = function (_Parent) {
  // 让子类继承父类
  _inherits(Child, _Parent);

  function Child(name, age) {
    var _this;
    // 进行类调用检查
    _classCallCheck(this, Child);

    //  _getPrototypeOf(Child).call(this, name) 获取子类的__proto__
    
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
    _this.age = age;
    return _this;
  }

  _createClass(Child, [{
    key: "getAge",
    value: function getAge() {
      console.log(this.age);
    }
  }]);

  return Child;
}(Parent);