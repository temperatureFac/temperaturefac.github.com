function jsonToStr(json){
	var arr = [];
	json.t = Math.random();
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	var str = arr.join('&');
	return str;
}

/*
	{
		url:xx.txt,
		data : {
			a:1,
			b:2
		},
		type : 'POST',
		success : function(){},
		error : function(){}
	}
*/

function ajax(json){
	var timer = null;
	// 1、搞一个ajax
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if(!json.url){
		alert('没有url,不符合要求');
		return;
	}
	json.data = json.data || {};
	json.type = json.type || 'GET';
	json.time = json.time || 1000;

	switch(json.type.toUpperCase()){
		case 'GET':
			oAjax.open('GET',json.url+'?'+jsonToStr(json.data),true);
			oAjax.send();
			break;
		case 'POST':
			oAjax.open('POST',json.url,true);
			oAjax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			oAjax.send(jsonToStr(json.data));
			break;
	}

	json.fnLoading && json.fnLoading();

	// 接收数据
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState == 4){
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status == 304){
				json.success && json.success(oAjax.responseText);
				clearTimeout(timer);
			}else{
				json.error && json.error(oAjax.status);
				clearTimeout(timer);
			}
		}
	}

	timer = setTimeout(function(){
		alert('网络请求超时');
		json.complete && json.complete()
		oAjax.onreadystatechange = null;
	},json.time)
}