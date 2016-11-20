//获取行间样式getStyle(obj,name)，(对象，属性名)
//运动move(obj,json,options)，
	/*   move(obj,{'right':0},{'complete':function(){}
		,{'easing':'ease-in'},'duration':500)
		})
	*/
//随机数fnm(n,m)，
//去重复.findInArr(n,arr)，
//getByClass(oParent,sClass)
//滚轮上下 addWheel(obj,fn)
//获取最小值 findMin(arr)
//绝对位置 getPos(obj)

//获取行间样式

function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name]
}//用它是因为offset会包含边框像素 盒子模型 不严谨


//运动
/*function move(obj,json,options){
	var options=options||{};
	var time = options.duration||1000;//var duration?
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
}*/
//新的move框架
function move(obj,json,options){
	options=options||{};
	options.duration=options.duration||1000;//var duration?
	options.easing = options.easing||'linear';
	
	var start = {};
	var dis = {};
	for(var name in json ){
		start[name]= parseFloat(getStyle(obj,name));
		dis[name]= json[name] - start[name];
		//ie下opacity不给默认值  运动失效
	}
	
	var count = Math.floor(options.duration/30);
			
	var n = 0 ;
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		var a = n/count ;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var a=n/count;
					var cur = start[name]+dis[name]*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
				case 'ease-in':
					var a=n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity = cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
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

//随机数

function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}


//去重
function findInArr(n,arr){
	for(var i = 0 ; i < arr.length;i++){
		if(n==arr[i]){
			return true
		}
	}
	return false
}


//getByClass
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass)
	}else{
		var aEle = oParent.getElmentsByTagName('*');
		var arr= [];
		for(var i = 0 ; i < aEle.length;i++){
			var tmp = aEle[i].className.split(' ');
			if(findInArr(sClass,tmp)){
				arr.push(aEle[i]);
			}
		}
		return arr	;
	}	
}



//滚轮判断上下

function addWheel(obj,fn){
	
	//兼容 判断浏览器
	if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener('DOMMouseScroll',show,false)
	}else{
		obj.onmousewheel = show;
	}	
	
	//show
	function show(ev){
		var bDown=true;
		var oEvent = ev||event;
		//纠正方向true，false
		if(oEvent.detail){	//火狐
			if(oEvent.detail>0){//向下是正
				bDown=true;	//true是向下
			}else{
				bDown=false;
			}
		}else{//谷歌IE
			if(oEvent.wheelDelta>0){//向上是正
				bDown=false;//false是向上
			}else{
				bDown=true;	
			}	
		}
		fn(bDown)
	}
	//show结束
	
}

//findMin(arr)
function findMin(arr){
	for(var i = 0 ; i < arr.length ; i++){
		for(var j = i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				var n = arr[i];
				arr[i]=arr[j];
				arr[j]=n;
			}
		}
	}
	return arr[0];
}

//获取绝对位置
function getPos(obj){
	var l=0;
	var t=0;
	
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		
		obj=obj.offsetParent;
	}
	
	return {left:l,top:t};
}

//随机色
function inColor(obj){
	var r = fnm(0,256);
	var g = fnm(0,256);
	var b = fnm(0,256);
	obj.style.background = 'rgb('+r+','+g+','+b+')';
}