let util= require('util');

let obj = {
    name: '哈哈哈',
    home: {
        city: {
            name: '北京'
        }
    }
}
console.log(obj);
console.log(util.inspect(obj,{depth:1}));

// 判断是否为undefined
util.isUndefined();