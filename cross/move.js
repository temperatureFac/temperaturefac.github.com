function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name]
}//用它是因为offset会包含边框像素 盒子模型 不严谨

function move(obj,json,options){
	var options=options||{};
	var time = options.duration||500;//var duration?
	var easing = options.easing||'linear';
	var start = {};
	var dis = {};
	for(var name in json ){
		start[name]= parseFloat(getStyle(obj,name));
		dis[name]= json[name] - start[name];
	}
	//console.log(start,dis)
	//var start = parseFloat(getStyle(obj,name));//开始位置 parse是为了删px
	//var end = 400;	//结束位置	
	//var dis = end - start;		//路程
			//总次数
	var count = Math.ceil(time/30);
			//每次走多远
	//var step = dis/count;	
	var n = 0 ;//n是事件实际走的次数
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		var a = n/count ;
		for(var name in json){
			switch(easing){
				case 'linear':
					var a=n/count;
					var cur = start[name]+dis[name]*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur = start[name]+dis[name]*(1-a*a*a);
					break;
				case 'ease-in':
					var a=n/count;
					var cur = start[name]+dis[name]*a*a*a;
					break;
			}
			
			if(name=='opacity'){
				obj.style[name] = cur;
			}else{
				obj.style[name] = cur+'px';	
			}
		}
		
		//console.log(start,dis)
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}	
	},30)
}