function Clock(){
	this.listener;
	// 单独的队列
	process.nextTick(()=>{
		this.listener();
	})
}

Clock.prototype.add = function(listener){
	this.listener = listener;
}

let c = new Clock();
c.add(()=>{console.log('ok')});