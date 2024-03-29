function EventEmitter(){
    this.events = {}; // 会把所有的事件监听函数放在这个对象中保存
    //
    this._maxListeners = 10;
    
}
/*
* 给指定的事件绑定事件处理函数
* type 参数是事件类型
* listener 参数是事件监听函数
* */
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type,listener){
    if(this.events[type]){
        this.events[type].push(listener)
        
        console.log(this.events[type].length,this._maxListeners)
        
        if(this._maxListeners!=0 && this.events[type].length>=this._maxListeners){
            console.error(`MaxListeners ${ this.events[type].length } ${type}`);
        }
    }else{
        // 如果一起拿没有添加到此事件的监听函数,则赋值一个数组
        this.events[type] = [listener];
    }
}

EventEmitter.prototype.emit = function(type,...rest){
    this.events[type]&&this.events[type].forEach((listener)=>listener.apply(this,rest));
}
EventEmitter.prototype.once = function(type,listener){
    // 用完即焚
    let wrapper = (...rest) => {
        listener.apply(this,rest);      //先让原生的监听函数执行
        this.removeListener(type,wrapper);
    }
    this.on(type,wrapper)
}

EventEmitter.prototype.removeListener = function(type,listener){
    if(this.events[type]){
        this.events[type] = this.events[type].filter(l=>l!=listener)
    }
}

// 移除某个事件的所有监听函数
EventEmitter.prototype.removeAllListeners = function(type){
    delete this.events[type];
}


EventEmitter.prototype.setMaxListemers= function(n){
    this._maxListeners = n;
}


EventEmitter.prototype.listeners = function(event){
    return this.events[event];
}









module.exports = EventEmitter;