window.onload=function(){
	//屏幕宽高
	/*window.onresize=function box(){
		var oBox=document.getElementById('box');
		var oCw = document.documentElement.clientWidth;	
		var oCh = document.documentElement.clientHeight;
		oBox.style.width=oCw - 5+'px';
		oBox.style.height=oCh - 5 +'px';	
	};
	box();*/
	//开始先给一个body的height
	(function bodyH(){
		var oBody=document.body;
		var oCh = document.documentElement.clientHeight;
		oBody.style.height=oCh  +'px';
	})();
	//滚轮变化body height
	(window.onresize=function bodyH(){
		var oBody=document.body;
		var oCh = document.documentElement.clientHeight;
		oBody.style.height=oCh  +'px';
	})();
		
	
	//title 开头动画
	(function(){
		var oTit = document.getElementById('title');
		var oBox = document.getElementById('back');
		/*oTit.style.textShadow='1px 1px 1px #fff';
		oTit.style.color='#fff';*/
		
		//后来改的 4个边框以及box出现效果
		var timerb0=setTimeout(function(){
			var oBorD=document.getElementById('borDer');
			var aBorD=oBorD.children;
			oBorD.style.display='block';
			
			clearTimeout(timerb0)
		},500);
		//四个线消失
		var timerb1=setTimeout(function(){
			var oBorD=document.getElementById('borDer');
			var aBorD=oBorD.children;
			oBorD.style.transition='0.5s all ease';
			oBorD.style.opacity='0';
			clearTimeout(timerb1)
		},1500);
		//oBox出来
		var timerb2=setTimeout(function(){
			var oBorD=document.getElementById('borDer');
			//var aBorD=oBorD.children;
			oBox.style.opacity='1';
			oBorD.style.display='none';
			clearTimeout(timerb2)
		},2000);
		
		
		//让更大尺寸的阴影出来
		var timer2 = setTimeout(function(){
			oTit.style.textShadow='5px 8px 8px #fff';
			oTit.style. WebkitBoxReflect='below 0px -webkit-linear-gradient(rgba(0,0,0,0) 40%,rgba(0,255,0,0.4))';
			oTit.style.color='#fff';
			/*oBox.style.opacity=1;*/
			clearTimeout(timer2)
		},2000);
		//阴影恢复
		var timer3 = setTimeout(function(){
			oTit.style.textShadow='1px 1px 5px #fff';
			oTit.style. WebkitBoxReflect='below 0px -webkit-linear-gradient(rgba(0,0,0,0) 40%,rgba(0,255,0,0.4))';
			oTit.style.color='#fff';
			/*oBox.style.opacity=1;*/
			clearTimeout(timer3)
		},2500);
		

	})();
	//个人网站
	(function(){
		var oBox=document.getElementById('box_button');
		var aTxt=oBox.children;
		var timer1 = setTimeout(function(){
			aTxt[0].style.opacity=1;
			aTxt[0].style.top='0px';
			clearTimeout(timer1)	;
		},2000)
		var timer2 = setTimeout(function(){
			aTxt[1].style.opacity=1;
			aTxt[1].style.top='0px';
			clearTimeout(timer2)	;
		},2200)
		var timer3 = setTimeout(function(){
			aTxt[2].style.opacity=1;
			aTxt[2].style.top='0px';
			clearTimeout(timer3)	;
		},2400)
		var timer4 = setTimeout(function(){
			aTxt[3].style.opacity=1;
			aTxt[3].style.top='0px';
			clearTimeout(timer4)	;
		},2600)
		
		//英文
		var oPerW = document.getElementById('perW');
		var oTheND = document.getElementById('theND');
		
		var timer5 = setTimeout(function(){
			oPerW.style.opacity=1;
			oPerW.style.textShadow='1px 1px 5px #fff';
			oPerW.style.marginTop = '-30px';
			clearTimeout(timer5)	;
		},3500)
		var timer6 = setTimeout(function(){
			oTheND.style.height='30px';
			oTheND.style.opacity=1;
			oTheND.style.marginTop = '30px';
			oTheND.style.textShadow='1px 1px 5px #fff';
			clearTimeout(timer6)	;
		},4000)
		
		
	})();
	(function(){
		//左侧出来
		var timer66=setTimeout(function(){
			var oA = document.getElementById('left_button');
			var oB = document.getElementById('left_bod');
			var aA=oA.children;
			oB.style.opacity = '1';	
			aA[0].style.opacity = '1';	
			aA[0].style.left = '-45px';	
		},2500);
		var timer67=setTimeout(function(){
			var oA = document.getElementById('left_button');
			var aA=oA.children;
			aA[1].style.opacity = '1';	
			aA[1].style.left = '-45px';	
		},3000);
		var timer68=setTimeout(function(){
			var oA = document.getElementById('left_button');
			var aA=oA.children;
			aA[2].style.opacity = '1';	
			aA[2].style.left = '-45px';	
		},3500);	
	})();
	
	//首页图片切换
	function goBg(){
		//图片
		var oImgX = document.getElementById('imgX');
		var aImgX = oImgX.getElementsByTagName('img')[0];
		var iNow=0;
		
		oImgX.style.display='block';
		aImgX.src = 'images/image2/bg/bg'+5+'.jpg';
		var timer_bg1=setInterval(function(){
			aImgX.src = 'images/image2/bg/bg'+iNow%6+'.jpg';
			iNow++;	
			aImgX.style.animationPlayState='running';
		},5000);
			
	}
	goBg();
	//个人网站四个字跳动
	function goTxt(){
		var oTxt = document.getElementById('box_button');	
		var aTxt = oTxt.children;
		setInterval(function(){
			for(var i=0;i<aTxt.length;i++){
					
				aTxt[i].style.transformStyle='preserve-3d'; 
				aTxt[i].style.perspective='800px'; 
				aTxt[i].style.animation='txt_0 10s linear infinite '+i*2.1+'s';
				aTxt[i].style.animationPlayState='running';
			}
		},5000)
	};
	goTxt();
	
	//左侧事件
	function goLeft(){
		var ol_bt_box = document.getElementById('left_button');
		var aBtn = 	ol_bt_box.children;
		var ol_sw_box = document.getElementById('left_bod');
		var aSw = ol_sw_box.children;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				aSw[this.index].style.background='#FFF61A';
				aSw[this.index].style.transform='scale(6,150)';	
			};
			aBtn[i].onmouseout=function(){
				aSw[this.index].style.background='#fff';
				aSw[this.index].style.transform='scale(1,1)';	
			};
			aBtn[i].onclick=function(){
				var oImgX = document.getElementById('imgX');
				var oB1 = document.getElementById('box_button');
				var oB2 = document.getElementById('perW');
				var oB3 = document.getElementById('theND');
				
				var oLbg = document.getElementById('left_bga');
				var aLbg = oLbg.getElementsByTagName('img');
				var oLc = document.getElementById('left_close');
				oImgX.style.display = 'none';
				oB1.style.display = 'none';
				oB2.style.display = 'none';
				oB3.style.display = 'none';
				oLbg.style.display='block';
				//先清空一下  解决了覆盖的问题
				for(var j=0;j<aLbg.length;j++){
					aLbg[j].style.display='none';
				}
				
				aLbg[this.index].style.display='block';
				
				aLbg[this.index].style.animationPlayState='running';
				
				//关闭按钮
				oLc.style.display='block';
				oLc.style.animationPlayState='running';
				oLc.onclick=function(){
					oLc.style.display='none';
					oImgX.style.display = 'block';
					oB1.style.display = 'block';
					oB2.style.display = 'block';
					oB3.style.display = 'block';
					oLbg.style.display='none';	
				};
				
			};
			
		}
	};
	goLeft();
	//爆炸
	/*(function(){
		
		function rnd(n,m){
			return Math.floor(Math.random()*(m-n)+n);
		}
		var oBox=document.querySelector('#box_button');
	
		var R=4,
			C=4;
		for(var r=0; r<R; r++){
			for(var c=0; c<C; c++){
				var oS=document.createElement('span');
				oS.style.width=oBox.offsetWidth/C+'px';
				oS.style.height=oBox.offsetHeight/R+'px';
				oBox.appendChild(oS);
				oS.style.top=r*oBox.offsetHeight/R+'px';
				oS.style.left=c*oBox.offsetWidth/C+'px';
				oS.style.background='red';
			}
		}
		
		var aS=oBox.getElementsByTagName('span');
		oBox.onclick=function (){
			for(var i=0; i<aS.length; i++){
				var x=aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
				var y=aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;
				aS[i].style.transform='translateZ(400px) translate('+x+'px,'+y+'px) rotateX('+rnd(0,361)+'deg) rotateY('+rnd(0,361)+'deg)';
				aS[i].style.transition='1s all ease';
				aS[i].style.opacity=0;
			}
		};

	})();*/
		
};
