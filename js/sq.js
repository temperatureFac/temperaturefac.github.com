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
				
				var oLs = document.getElementById('left_show');
				var aLs = oLs.children;
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
				//刚写的3.27 先清了一下
				oLc.style.display='block';
				for(var k=0;k<3;k++){
					aLs[k].style.display='none';
				}
				oLs.style.display = 'block';
				aLs[this.index].style.display = 'block';
				//第一个按钮里面的
				var oLt1_bd1 = document.getElementById('ltb_mid');
				oLt1_bd1.style.animationPlayState='running';
				//两半
				var oLmid = document.getElementById('lm');
				var oLml = document.getElementById('lm_left');
				var aLml = oLml.children;
				var oLmr = document.getElementById('lm_right');
				var aLmr = oLmr.children;
				
				var aLml1 = aLml[0].children;
				var aLml2 = aLml[1].children;
				
				var aLmr1 = aLmr[0].children;
				var aLmr2 = aLmr[1].children;
				aLml1[0].style.display = 'block';
				aLml2[0].style.display = 'block';
				
				aLmr1[0].style.display = 'block';
				aLmr2[0].style.display = 'block';
				
				oLmid.style.display = 'block';
				/*var aLml_img = oLml.children;
				var aLmr_img = oLmr.children;
				aLml_img[0].style.display = 'block';
				aLmr_img[0].style.display = 'block';*/
				//两半点击事件
				//点击后面准备
				var oLcrM = document.getElementById('lcrM');
				//内容
				//var aLcrM = oLcrM.getElementsByClassName('nl');
			    /*var aLcrM = oLcrM.children;*/
				var aLcrM = oLcrM.getElementsByTagName('h4');
				//alert(aLcrM.length);
				for(var i=0;i<aLcrM.length;i++){
					aLcrM[i].index=i;
					//次数的奇偶来判断是12图换背景
					var itime = 0;
					//想避免重复
					var iNow = 0;
					aLcrM[i].onclick = function(){
						//计数为了多次旋转
						itime += 1;
						/*for(var j=0;j<aLml2.length;j++){
							aLml2[j].style.display='none';
							aLmr2[j].style.display='none';
						}*/
						//下面是为了让+1=0 不能超过4个图
						if(this.index==3){
							this.index=-1;
						}
						
						//下面是点标题动作
						//alert(this.index);
						if(this.index==0){
							oLht1.style.animationPlayState='running';
							oLht1.style.height = '260px';
							oLht2.style.marginTop = '0px';
							
							
							oLht3.style.marginTop = '35px';
							oLht4.style.marginTop = '35px';
							
							var timerLht = setTimeout(function(){
								
								oLht2.style.height = '22px';
								oLht3.style.height = '22px';
								oLht4.style.height = '22px';
								clearTimeout(timerLht)	;	
							},300);
						}else if(this.index==1){
							oLht2.style.animationPlayState='running';
							oLht2.style.height = '195px';
							
							oLht3.style.marginTop = '0px';
							oLht2.style.marginTop = '35px';
							oLht4.style.marginTop = '35px';
							
							var timerLht = setTimeout(function(){
								
								oLht1.style.height = '70px';
								oLht3.style.height = '22px';
								oLht4.style.height = '22px';
								clearTimeout(timerLht)	;	
							},300);
						}else if(this.index==2){
							oLht3.style.animationPlayState='running';
							oLht3.style.height = '142px';
							
							oLht4.style.marginTop = '0px';
							oLht3.style.marginTop = '35px';
							oLht2.style.marginTop = '35px';
							
							var timerLht = setTimeout(function(){
								
								oLht1.style.height = '70px';
								oLht2.style.height = '22px';
								oLht4.style.height = '22px';
								clearTimeout(timerLht)	;	
							},300);
						}else{
							oLht4.style.animationPlayState='running';
							oLht4.style.height = '260px';
							
							oLht3.style.marginTop = '35px';
							oLht2.style.marginTop = '35px';
							oLht4.style.marginTop = '35px';
							
							var timerLht = setTimeout(function(){
								
								oLht1.style.height = '70px';
								oLht2.style.height = '22px';
								oLht3.style.height = '22px';
								clearTimeout(timerLht)	;	
							},300);
						}
						
						
						//判断是第一次进入  奇偶  来让 被隐藏的变化图
						
						
						if(itime%2==1){
							//alert(itime);
							//alert(this.index);
							
							for(var j=0;j<aLml2.length;j++){
								aLml2[j].style.display='none';
								aLmr2[j].style.display='none';
							}
							
							aLml2[this.index+1].style.display = 'block';
							aLmr2[this.index+1].style.display = 'block';
							aLml2[this.index+1].style.transform='rotateZ(180deg)';
							aLmr2[this.index+1].style.transform='rotateZ(180deg)';
						}else{
							//alert(itime);
							//alert('可能出错的');
							
							for(var j=0;j<aLml2.length;j++){
								aLml1[j].style.display='none';
								aLmr1[j].style.display='none';
							}
							aLml2[this.index].style.display = 'block';
							aLmr2[this.index].style.display = 'block';
							aLml1[this.index+1].style.display = 'block';
							aLmr1[this.index+1].style.display = 'block';
						}
						
						/*aLml[0]transform:rotateZ(180deg)*/
						/*aLml[0].style.animationPlayState='running';
						aLml[1].style.animationPlayState='running';
						aLmr[0].style.animationPlayState='running';
						aLmr[1].style.animationPlayState='running';*/
						/*下面是想重复就不换图了*/
						/*alert(this.index);
						alert(iNow);
						if(this.index!=iNow){
							aLml[0].style.transform='rotateZ('+itime*180+'deg)';
							aLml[1].style.transform='rotateZ('+itime*180+'deg)';
							aLmr[0].style.transform='rotateZ('+itime*180+'deg)';
							aLmr[1].style.transform='rotateZ('+itime*180+'deg)';
						}else{
							return false;
						}*/
							//alert('刚进来的时候'+iNow);
						if(this.index==iNow){
							//alert('重复啦');
							return false;
						}
						
						
						
						aLml[0].style.transform='rotateZ('+itime*180+'deg)';
						aLml[1].style.transform='rotateZ('+itime*180+'deg)';
						aLmr[0].style.transform='rotateZ('+itime*180+'deg)';
						aLmr[1].style.transform='rotateZ('+itime*180+'deg)';
						
						/*if(this.index!=-1){
							this.index=iNow;
						}else{
							iNow=3;
						}*/
						
						iNow=this.index;
						//alert('记录本次的值'+iNow);
						
						if(itime==4){
							itime==0
						}
						
						
						
					};	
				}
				
				//内容的点击事件
				var oLhd1 = document.getElementById('lcr_hd1');
				var oLhd2 = document.getElementById('lcr_hd2');
				var oLhd3 = document.getElementById('lcr_hd3');
				var oLhd4 = document.getElementById('lcr_hd4');
				var oLht1 = document.getElementById('lcr_m1');
				var oLht2 = document.getElementById('lcr_m2');
				var oLht3 = document.getElementById('lcr_m3');
				var oLht4 = document.getElementById('lcr_m4');
				//横岗
				var oTbd1 = document.getElementById('tbd1');
				var oTbd2 = document.getElementById('tbd2');
				var oTbd3 = document.getElementById('tbd3');
				var oTbd4 = document.getElementById('tbd4');
				
				var timerbd1 = setTimeout(function(){
					oTbd1.style.animationPlayState='running';
					oTbd1.style.width = '45px';
					clearTimeout(timerbd1)	;		
				},100);
				var timerbd2 = setTimeout(function(){
					oTbd2.style.animationPlayState='running';
					oTbd2.style.width = '45px';
					clearTimeout(timerbd2)	;		
				},600);
				var timerbd3 = setTimeout(function(){
					oTbd3.style.animationPlayState='running';
					oTbd3.style.width = '45px';
					clearTimeout(timerbd3)	;		
				},1100);
				var timerbd4 = setTimeout(function(){
					oTbd4.style.animationPlayState='running';
					oTbd4.style.width = '45px';
					clearTimeout(timerbd4)	;		
				},1600);
				//文字
				var timerHd1 = setTimeout(function(){
					oLhd1.style.animationPlayState='running';
					oLhd1.style.left = '60px';
					oLhd1.style.opacity = '1';
					clearTimeout(timerHd1)	;		
				},400);
				
				var timerHd2 = setTimeout(function(){
					oLhd2.style.animationPlayState='running';
					oLhd2.style.left = '60px';
					oLhd2.style.opacity = '1';
					clearTimeout(timerHd1)	;		
				},900);
				
				var timerHd3 = setTimeout(function(){
					oLhd3.style.animationPlayState='running';
					oLhd3.style.left = '60px';
					oLhd3.style.opacity = '1';
					clearTimeout(timerHd1)	;		
				},1400);
				
				
				
				var timerHd4 = setTimeout(function(){
					oLhd4.style.animationPlayState='running';
					oLhd4.style.left = '60px';
					oLhd4.style.opacity = '1';
					clearTimeout(timerHd1)	;		
				},1900);
				
				//第一个自动
				var timerbd11 = setTimeout(function(){
					oLht1.style.animationPlayState='running';
					oLht1.style.height = '260px';
				},3000)
				
				
				/*oLhd1.onclick = function(){
					oLht1.style.animationPlayState='running';
					oLht1.style.height = '260px';
					oLht2.style.marginTop = '0px';
					
					
					oLht3.style.marginTop = '35px';
					oLht4.style.marginTop = '35px';
					
					var timerLht = setTimeout(function(){
						
						oLht2.style.height = '22px';
						oLht3.style.height = '22px';
						oLht4.style.height = '22px';
						clearTimeout(timerLht)	;	
					},300);
				};
				oLhd2.onclick = function(){
					oLht2.style.animationPlayState='running';
					oLht2.style.height = '195px';
					
					oLht3.style.marginTop = '0px';
					oLht2.style.marginTop = '35px';
					oLht4.style.marginTop = '35px';
					
					var timerLht = setTimeout(function(){
						
						oLht1.style.height = '70px';
						oLht3.style.height = '22px';
						oLht4.style.height = '22px';
						clearTimeout(timerLht)	;	
					},300);
				};
				oLhd3.onclick = function(){
					oLht3.style.animationPlayState='running';
					oLht3.style.height = '142px';
					
					oLht4.style.marginTop = '0px';
					oLht3.style.marginTop = '35px';
					oLht2.style.marginTop = '35px';
					
					var timerLht = setTimeout(function(){
						
						oLht1.style.height = '70px';
						oLht2.style.height = '22px';
						oLht4.style.height = '22px';
						clearTimeout(timerLht)	;	
					},300);
				};
				oLhd4.onclick = function(){
					oLht4.style.animationPlayState='running';
					oLht4.style.height = '260px';
					
					oLht3.style.marginTop = '35px';
					oLht2.style.marginTop = '35px';
					oLht4.style.marginTop = '35px';
					
					var timerLht = setTimeout(function(){
						
						oLht1.style.height = '70px';
						oLht2.style.height = '22px';
						oLht3.style.height = '22px';
						clearTimeout(timerLht)	;	
					},300);
				};*/
				
				
				//关闭按钮
				oLc.style.animationPlayState='running';
				oLc.onclick=function(){
					oLmid.style.display='none';
					oLs.style.display='none';
					oLc.style.display='none';
					oImgX.style.display = 'block';
					oB1.style.display = 'block';
					oB2.style.display = 'block';
					oB3.style.display = 'block';
					oLbg.style.display='none';	
					
				};
				
				//作品点击的事件
				(function(){
					var oMs1 = document.getElementById('lcr_m1');
					var aMs1 = oMs1.getElementsByTagName('p');	
					var oMs2 = document.getElementById('lcr_m2');
					var aMs2 = oMs2.getElementsByTagName('p');	
					var oMs3 = document.getElementById('lcr_m3');
					var aMs3 = oMs3.getElementsByTagName('p');	
					var oMs4 = document.getElementById('lcr_m4');
					var aMs4 = oMs4.getElementsByTagName('p');
					//aMs1234是第几个里的第几个按钮
					var oSt = document.getElementById('show_time');
					//oSt是舞台
					var oSt2 = document.getElementById('st_2');
					var aSt2 = oSt2.children;
					var oSt3 = document.getElementById('st_3');
					var aSt3 = oSt3.children;
					var oSt4 = document.getElementById('st_4');
					var aSt4 = oSt4.children;
					//aSt2 是第几个作品
					
					//下面是第二组作品
					for(var i=0;i<aMs2.length;i++){
						aMs2[i].index=i;
						aMs2[i].onclick = function(){
							//舞台出来
							oSt.style.display = 'block';
							//相应作品出来
							oSt2.style.display = 'block';
							aSt2[this.index].style.display = 'block';
							oSt2.style.animationPlayState='running';
							oSt2.style.opacity='1';
						
							
							//让其他层级降低自己升高。
							aSt2[i].style.zIndex = '100';
							aSt2[this.index].style.zIndex = '101';
							//关闭按钮层级
							//oSc.style.zIndex = '102';
							
							//因为定时器里面拿不到this.index 所以用iNow存一下来判断是点了哪个
							var iNow = this.index;
							//判断是哪个
							switch(iNow){
								case 0:
									var timer11 = setTimeout(function(){
										show1_3d();
										clearTimeout(timer11);
									},1000)
									
									break;
								case 1:
									show1_cross();
									break;
								case 2:
									show1_3();
									break;
								case 3:
									show1_4();
									break;
								case 4:
									show1_5();
									break;
								case 5:
									
									show1_6();
									break;
							}
							//判断结束
							
							
							//展示栏关闭按钮
								//var oStime = document.getElementById('show_time');
								var oSc = document.getElementById('show_close');
								
								oSc.onmouseover = function(){
									oSc.style.animationPlayState='running';
								};
									
								oSc.onclick = function(){
									//oStime.style.animationPlayState='running';
									oSt.style.animationPlayState='running';
									//下面是测试
								oSt2.style.animationPlayState='paused';
							    oSt2.style.opacity='0';
								//测试完毕
									
									var timer12 = setTimeout(function(){
										//oStime.style.display = 'none';
										oSt.style.display = 'none';
										oSt2.style.display = 'none';
										oSt.style.animationPlayState='paused';
										for(var j=0;j<aMs2.length;j++){
											
											aSt2[j].style.display='none';
										}
										clearTimeout(timer12);
									},500);
									
								};
						};
					}
					
					//第二组结束
					
					//下面是第三组作品 爆炸 翻书 分块 透明度
					for(var i=0;i<aMs3.length;i++){
						aMs3[i].index=i;
						aMs3[i].onclick = function(){
							//舞台出来
							oSt.style.display = 'block';
							//oSt.style.opacity = '1';
							//相应作品出来
							aSt3[this.index].style.display = 'block';
							oSt3.style.display = 'block';
							
							oSt3.style.animationPlayState='running';
							oSt3.style.opacity='1';
							//让其他层级降低自己升高。
							aSt2[i].style.zIndex = '100';
							aSt2[this.index].style.zIndex = '101';
							
							//因为定时器里面拿不到this.index 所以用iNow存一下来判断是点了哪个
							var iNow = this.index;
							//判断是哪个
							switch(iNow){
								case 0:
									/*var timer = setTimeout(function(){
										
										clearTimeout(timer);
									},1000)*/
									show2_1();
									break;
								case 1:
									show2_2();
									break;
								case 2:
									show2_3();
									break;
								case 3:
									show2_4();
									break;
								case 4:
									break;
								case 5:
									
									break;
							}
							//判断结束
							
							
							//展示栏关闭按钮
								//var oStime = document.getElementById('show_time');
								var oSc = document.getElementById('show_close');
								
								//关闭按钮层级
								//oSc.style.zIndex = '102';
								
								oSc.onmouseover = function(){
									oSc.style.animationPlayState='running';
								};
									
								oSc.onclick = function(){
									oSt.style.animationPlayState='running';
								//下面测试
								oSt3.style.animationPlayState='paused';
							    oSt3.style.opacity='0';
								//测试完毕
									var timer = setTimeout(function(){
										oSt.style.display = 'none';
										oSt3.style.display = 'none';
										oSt.style.animationPlayState='paused';
										for(var j=0;j<aMs3.length;j++){
											
											aSt3[j].style.display='none';
										}
										clearTimeout(timer);
									},500);
									
								};
						};
					}
					//第三组结束
					
				})();
					
				//下面是小展示分别的js
				
			};
			
		}
	};
	goLeft();
	
	
	//下面是预览图出现的控制
	(function(){
		var oLm1 = document.getElementById('lcr_m1');
		var aLm1 = oLm1.getElementsByTagName('li');
		var oLm2 = document.getElementById('lcr_m2');
		var aLm2 = oLm2.getElementsByTagName('li');
		var oLm3 = document.getElementById('lcr_m3');
		var aLm3 = oLm3.getElementsByTagName('li');
		var oLm4 = document.getElementById('lcr_m4');
		var aLm4 = oLm4.getElementsByTagName('li');
		
		var oM1 = document.getElementById('lcl_1');
		var oM2 = document.getElementById('lcl_2');
		var oM3 = document.getElementById('lcl_3');
		var oM4 = document.getElementById('lcl_4');
		
		var oP1 = document.getElementById('lcl1_show');
		var aP1 = oP1.children;
		var oP2 = document.getElementById('lcl2_show');
		var aP2 = oP2.children;
		var oP3 = document.getElementById('lcl3_show');
		var aP3 = oP3.children;
		var oP4 = document.getElementById('lcl4_show');
		var aP4 = oP4.children;
		//第一组预览图
		for(var i = 0 ; i < aLm1.length ; i++){
			aLm1[i].index = i ;
			aLm1[i].onmouseover = function(){
				//alert(this.index);
				oM1.style.display = 'block';
				oP1.style.display = 'block';
				aP1[this.index].style.display = 'block';
			};	
			
			aLm1[i].onmouseout = function(){
				oM1.style.display = 'none';
				oP1.style.display = 'none';
				aP1[this.index].style.display = 'none';
			};
		}
		
		//第二组预览图
		for(var i = 0 ; i < aLm2.length ; i++){
			aLm2[i].index = i ;
			aLm2[i].onmouseover = function(){
				//alert(this.index);
				oM2.style.display = 'block';
				oP2.style.display = 'block';
				aP2[this.index].style.display = 'block';
			};	
			
			aLm2[i].onmouseout = function(){
				oM2.style.display = 'none';
				oP2.style.display = 'none';
				aP2[this.index].style.display = 'none';
			};
		}
		//第三组预览图
		for(var i = 0 ; i < aLm1.length ; i++){
			aLm3[i].index = i ;
			aLm3[i].onmouseover = function(){
				//alert(this.index);
				oM3.style.display = 'block';
				oP3.style.display = 'block';
				aP3[this.index].style.display = 'block';
			};	
			
			aLm3[i].onmouseout = function(){
				oM3.style.display = 'none';
				oP3.style.display = 'none';
				aP3[this.index].style.display = 'none';
			};
		}
	})();
	
	//3.27开始写的左侧事件

	//3d展示
				function show1_3d(){
					var oUl=document.getElementById('a3d_ul');
					var aLi=oUl.children;
					var x=0;
					var y=0;
					var iSpeedX=0;
					var iSpeedY=0;
					var oldX=0;
					var oldY=0;
					for(var i=0;i<aLi.length; i++){
						aLi[i].style.transition='1s ease all '+(11-i)*100+'ms';
						aLi[i].style.transform='rotateY('+360*i/11+'deg) translateZ(350px)';
					}
					
					oUl.onmousedown=function(ev){
						var disX=ev.clientX-x;
						var disY=ev.clientY-y;
						
						document.onmousemove=function(ev){
							x=ev.clientX-disX;
							y=ev.clientY-disY;
							
							oUl.style.transform='perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
							
							iSpeedX=ev.pageX-oldX;
							iSpeedY=ev.pageY-oldY;
							
							oldX=ev.pageX;
							oldY=ev.pageY;
						};
						document.onmouseup=function(){
							document.onmousemove=null;
							document.onmouseup=null;
							
							oUl.timer=setInterval(function (){
								iSpeedX*=0.95;
								iSpeedY*=0.95;
								
								x+=iSpeedX;
								y+=iSpeedY;
								
								oUl.style.transform='perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
								
								if(Math.abs(iSpeedX)<1)iSpeedX==0;
								if(Math.abs(iSpeedY)<1)iSpeedY==0;
								
								if(iSpeedX==0&&iSpeedY==0){
									clearInterval(oUl.timer);
								}
							},16);	
						};
						return false;
					};
						
					
				};
				//show1_3d();
				//3d展示结束
				
				//穿墙开始
				function show1_cross(){
					function getDir(obj,ev){
						var x = obj.getBoundingClientRect().left+obj.offsetWidth/2-ev.clientX;
						var y = obj.getBoundingClientRect().top+obj.offsetHeight/2-ev.clientY;
						return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
					};
					function change(obj){
						var aS = obj.children[0];
						obj.onmouseenter = function(ev){
							var oEvent = ev||event;
							var dir = getDir(obj,oEvent);
							switch(dir){
								case 0://右边
									aS.style.left = '100px';
									aS.style.top = '0px';
									break;
								case 1://上边
									aS.style.left = '0px';
									aS.style.top = '100px';
									break;
								case 2://左边
									aS.style.left = '-100px';
									aS.style.top = '0px';
									break;
								case 3://上边
									aS.style.left = '0px';
									aS.style.top = '-100px';
									break;
							}	
							move(aS,{left:0,top:0});
						};	
						obj.onmouseleave = function(ev){
							var oEvent = ev||event;
							var dir = getDir(obj,oEvent);
							switch(dir){
								case 0:
									move(aS,{left:100,top:0});
									break;	
								case 1:
									move(aS,{left:0,top:100});
									break;	
								case 2:
									move(aS,{left:-100,top:0});
									break;	
								case 3:
									move(aS,{left:0,top:-100});
									break;	
							}	
						};
					};
					function goCross(){
						var oBox = document.getElementById('st22_box');
						var aDiv = oBox.children;
						var aSpan = oBox.getElementsByTagName('span');
						for(var i = 0 ; i<aSpan.length;i++){
							aSpan[i].style.opacity = '0.7'
							inColor(aSpan[i]);
						}	
						var H = 100;
						var W = 100;
						//布局div图片
						//第一行
						for(var i = 0 ; i < 6 ; i++){
							aDiv[i].style.backgroundImage = 'url(image1/little/222/tu.jpg)';
							aDiv[i].style.backgroundPosition = '-'+i*W+'px -'+0+'px';
						}
						//第2行
						for(var i = 6 ; i < 12 ; i++){
							aDiv[i].style.backgroundImage = 'url(image1/little/222/tu.jpg)';
							aDiv[i].style.backgroundPosition = '-'+i%6*W+'px -'+110+'px';
						}
						//第3行
						for(var i = 12 ; i < 18 ; i++){
							aDiv[i].style.backgroundImage = 'url(image1/little/222/tu.jpg)';
							aDiv[i].style.backgroundPosition = '-'+i%6*W+'px -'+210+'px';
						}
						//第4行
						for(var i = 18 ; i < 24 ; i++){
							aDiv[i].style.backgroundImage = 'url(image1/little/222/tu.jpg)';
							aDiv[i].style.backgroundPosition = '-'+i%6*W+'px -'+310+'px';
						}
						//布局div图片完毕
					
						for(var i = 0 ; i < aDiv.length ;i++){
							change(aDiv[i])
						}
					};
					goCross();	
				}
				//穿墙结束
				
				//第三个作品 个性图片展示
			function show1_3(){
				var util = {
					getStyle:function(obj,name){
						return (obj.currentStyle || getComputedStyle(obj,false))[name];
					},
					animate:function(obj,json){
						clearInterval(obj.timer);
						var count = Math.floor(700 / 30);
						var start = {};
						var dis = {};
						for(var name in json){
							if(name=='opacity'){
								start[name] = Math.round(parseFloat(util.getStyle(obj,name))*100);
							}else{
								start[name] = parseInt(util.getStyle(obj,name));
							}
							dis[name] = json[name] - start[name];
						}
						
						var n = 0;
						obj.timer = setInterval(function(){
							n++;
							for(var name in json){
								var a = 1 - n / count;
								var cur = start[name] + dis[name] * (1 - a * a * a);
								if(name == 'opacity'){
									obj.style.opacity = cur / 100;
									obj.style.filter = 'alpha(opacity:' + cur + ')';
								}else{
									obj.style[name]	= cur + 'px';
								}
							}
							if(n==count){
								clearInterval(obj.timer);	
							}
						},30);
					}
				};
				function goS3(){
					(function(){
						var n = 196;
						var oBox = document.getElementById('st23_box');
						var aDiv = oBox.getElementsByTagName('div');
						
						var timer = null;
						
						var aPos=[];
						for(var i=0; i < aDiv.length; i++){
							aPos[i] = {left : aDiv[i].offsetLeft, top : aDiv[i].offsetTop};
							aDiv[i].style.left = aPos[i].left + 'px';
							aDiv[i].style.top = aPos[i].top + 'px';
							aDiv[i].style.width = n + 'px';
							aDiv[i].style.height = n + 'px';
						}
						for(var i = 0; i < aDiv.length; i++){
							aDiv[i].style.position = 'absolute';
							aDiv[i].style.margin = 0;
							aDiv[i].index = i;
						}
						for(var i = 0; i < aDiv.length; i++){
							aDiv[i].onmouseover = function(){
								clearInterval(timer);
								onMove(this);
							};	
							aDiv[i].onmouseout = function(){
								timer = setInterval(function(){
									var num = Math.floor(Math.random()* aDiv.length);
									onMove(aDiv[num]);
								},2000);
							};	
						}
						timer = setInterval(function(){
							var num = Math.floor(Math.random()* aDiv.length);
							onMove(aDiv[num]);
						},2000);
						onMove(aDiv[4]);
						function onMove(obj){
							for(var j = 0; j < aDiv.length; j++){
								if(Math.floor(aDiv[j].index / 3) == Math.floor(obj.index / 3) && aDiv[j].index % 3 != obj.index % 3){//ͬ�в�ͬ��
									var x = 0;
									if(obj.index % 3 == 0){
										x = 3 - aDiv[j].index % 3;//0 2 1
									}else if(obj.index % 3 == 1){//0 -1 1
										x = aDiv[j].index % 3 / 2;
									}else{//0 -1 -2
										x = - aDiv[j].index % 3 ;
									}
									util.animate(aDiv[j],{
										width : n / 2,
										height : n * 2,
										left : aPos[j].left + n / 2 * x,
										top : aPos[j].top - n / 2 * Math.floor(aDiv[j].index / 3)
									});
										
								}else if(Math.floor(aDiv[j].index / 3) != Math.floor(obj.index / 3) && aDiv[j].index % 3 == obj.index % 3){
									var y = 0;
									if(Math.floor(obj.index / 3) == 0){//0 2 1
										y = 3 - Math.floor(aDiv[j].index / 3);
									}else if(Math.floor(obj.index / 3) == 1){//0 -1 1
										y = Math.floor(aDiv[j].index / 3) / 2;
									}else{//0 -1 -2
										y = - Math.floor(aDiv[j].index / 3);
									}
									util.animate(aDiv[j],{
										width : n * 2,
										height : n / 2,
										left : aPos[j].left - n / 2 * (aDiv[j].index % 3),
										top : aPos[j].top + n / 2 * y
									});
								}else if(aDiv[j] == obj){
									util.animate(aDiv[j],{
										width : n * 2,
										height : n * 2,
										left : aPos[j].left - n / 2 * (aDiv[j].index % 3),
										top : aPos[j].top - n / 2 * Math.floor(aDiv[j].index / 3)
									});
								}else{
									var x = 0;
									if(obj.index % 3 == 0){
										x = 3 - aDiv[j].index % 3;//0 2 1
									}else if(obj.index % 3 == 1){//0 -1 1
										x = aDiv[j].index % 3 / 2;
									}else{//0 -1 -2
										x = - aDiv[j].index % 3 ;
									}
									var y = 0;
									if(Math.floor(obj.index / 3) == 0){
										y = 3 - Math.floor(aDiv[j].index / 3);//0 2 1
									}else if(Math.floor(obj.index / 3) == 1){//0 -1 1
										y = Math.floor(aDiv[j].index / 3) / 2;
									}else{//0 -1 -2
										y = - Math.floor(aDiv[j].index / 3);
									}
									util.animate(aDiv[j],{
										width : n / 2,
										height : n / 2,
										left : aPos[j].left + n / 2 * x,
										top : aPos[j].top + n / 2 * y
									});
								}
							}	
									
						}
					})();
				};
				goS3();
			};	
				//第三个作品 个性图片展示结束
				
				//第四个作品 3d骰子
				function show1_4(){
					var oBox = document.querySelector('#st24_box');
					
					oBox.onmousedown=function(ev){
						var disX = ev.pageX;
						var disY = ev.pageY;
						document.onmousemove=function(ev){
							var x=ev.pageX-disX;	
							var y=ev.pageY-disY;
							oBox.style.transform='perspective(800px) rotateX('+-y+'deg) rotateY('+x+'deg)';	
						};
						document.onmouseup=function(){
							document.onmousemove=document.onmouseup=null;	
						}
						return false;
					};	
				};

				//3d筛子结束
				
				//手风琴
				function show1_5(){
					var oBox = document.getElementById('st25_box');
					var aShow = oBox.children;
					var W = oBox.offsetWidth;
					var w = 35;
					//布局
					for(var i = 1 ; i < aShow.length ; i++){
						aShow[i].style.left = W - (aShow.length - i)*w+'px';
					}	
					//布局完毕
					for(var i = 0 ; i < aShow.length ;i++){
						aShow[i].index = i;
						aShow[i].onmouseover = function(){
							for(var j = 0 ; j<aShow.length;j++){
								if(j<=this.index){//j指的是你操作的块的左边和自己的东西
									//加速移入
									//move(aShow[j],{'left':w*j},{'easing':'ease-in'})
									move(aShow[j],{'left':w*j},{duration:1500})
								}else{//鼠标操作的右边移出
									//move(aShow[j],{'left':W-(aShow.length-j)*w},{'easing':'ease-out'})
									move(aShow[j],{'left':W-(aShow.length-j)*w},{duration:1000})	
								}
							}
						};
						
					}
				}
				//手风琴结束
				
				//圆
				function d2a(n){//角度转弧度 n*π/180
					return n*Math.PI/180;
				};
				function show1_6(){
					var oBox = document.getElementById('st26_box');
					var R = oBox.offsetWidth/2;
					var N = 9 ;
					for(var i = 0 ; i < N ; i++){//执行了9次
						var oS = document.createElement('span');
						oBox.appendChild(oS);
					}
					var aS = oBox.children;
					var bOK = true;
					oBox.onclick = function(){
						if(bOK){
							for(var i = 0 ; i<aS.length;i++){
								startMove(aS[i],i*360/N);
								inColor(aS[i]);//随机色
							}
						}else{
							for(var i = 0 ; i<aS.length;i++){
								startMove(aS[i],0)
							}
						}	
						bOK = !bOK;//执行一次之后下次走另一边
					};	
					function startMove(obj,iTarget){
						var start = obj.a||0;//如果有.a 就取.a 和上面bOK对应
						var dis = iTarget - start;
						//下面是定时器走几次
						var count = Math.floor(1000/16);
						clearInterval(obj.timer);
						var n = 0;
						obj.timer = setInterval(function(){
							n++;
							var b = 1-n/count;	
							//减速
							var cur = start+dis*(1-Math.pow(b,3));//cur是走了的角度
							//存一个obj.a
							obj.a = cur;
							var x = R+Math.sin(d2a(cur))*R;
							var y = R-Math.cos(d2a(cur))*R;
							
							obj.style.left = x + 'px';
							obj.style.top = y + 'px';
							//到终点了
							if(n==count){
								  clearInterval(obj.timer);
							  }
						  },16)
					};
				};
				//圆结束
				
				//上面第二组作品结束
				
				//下面是第三组作品  
				
				//爆炸
				function show2_1(){
					var oBox=document.getElementById('st31_box');
					
					var R=4,
						C=7;
					for(var r=0; r<R; r++){
						for(var c=0; c<C; c++){
							var oS=document.createElement('span');
							oS.style.width=oBox.offsetWidth/C+'px';
							oS.style.height=oBox.offsetHeight/R+'px';
							oBox.appendChild(oS);
							oS.style.top=r*oBox.offsetHeight/R+'px';
							oS.style.left=c*oBox.offsetWidth/C+'px';
							oS.style.backgroundPosition='-'+c*oBox.offsetWidth/C+'px -'+r*oBox.offsetHeight/R+'px';
						}
					}
					var iNow=0;
					var bOk=false;
					
					var aS=oBox.children;
					oBox.onclick=function (){
						if(bOk)return;
						bOk=true;
						iNow++;
						//../image1/little/3gub/'+iNow%3+'.jpg
						//url(../image1/little/3gub/'+iNow%3+'.jpg)
						//url(../image1/little/3gub/0.jpg)
						oBox.style.backgroundImage='url(image1/little/3gub/'+iNow%3+'.jpg)';
						for(var i=0; i<aS.length; i++){
							var x=aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
							var y=aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;
							aS[i].style.transform='translateZ(400px) translate('+x+'px,'+y+'px) rotateX('+rnd(0,361)+'deg) rotateY('+rnd(0,361)+'deg)';
							aS[i].style.transition='1s all ease';
							aS[i].style.opacity=0;
						}
						
						aS[aS.length-1].addEventListener('transitionend',function (){
							for(var i=0; i<aS.length; i++){
								aS[i].style.transition='none';
								aS[i].style.transform='translateZ(0px) translate(0px,0px) rotateX(0deg) rotateY(0deg)';
								aS[i].style.opacity=1;
								
								aS[i].style.backgroundImage='url(image1/little/3gub/'+iNow%3+'.jpg)';
							}
							bOk=false;
							/*bOk=true;
							iNow++;
							oBox.style.backgroundImage='url(../img/'+iNow%3+'.jpg)';
							for(var i=0; i<aS.length; i++){
								var x=aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
								var y=aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;
								aS[i].style.transform='translateZ(400px) translate('+x+'px,'+y+'px) rotateX('+rnd(0,361)+'deg) rotateY('+rnd(0,361)+'deg)';
								aS[i].style.transition='1s all ease';
								aS[i].style.opacity=0;
							}
							
							aS[aS.length-1].addEventListener('transitionend',function (){
								for(var i=0; i<aS.length; i++){
									aS[i].style.transition='none';
									aS[i].style.transform='translateZ(0px) translate(0px,0px) rotateX(0deg) rotateY(0deg)';
									aS[i].style.opacity=1;
									
									aS[i].style.backgroundImage='url(../img/'+iNow%3+'.jpg)';
								}
								bOk=false;*/
						});
						
					};
				};
				//爆炸结束
				
				//翻书
				function show2_2(){
					var oBox=document.querySelector('#st32_box');
					var oPage=document.querySelector('#st32_box .page');
					var oFront=document.querySelector('#st32_box .afront');
					var oBack=document.querySelector('#st32_box .aback');
					var oPage2=document.querySelector('#st32_box .page2');
					var iNow=0;
					var bOk=false;
					
					oBox.onclick=function (){
						if(bOk)return;
						bOk=true;
						iNow++;
						oPage.style.transition='1s all ease';
						oPage.style.transform='perspective(800px) rotateY(-180deg)';
						oPage.addEventListener('transitionend',function (){
							oPage.style.transition='none';
							oPage.style.transform='perspective(800px) rotateY(0deg)';
							
							//换图
							oBox.style.backgroundImage='url(image1/little/3gub/'+iNow%3+'.jpg)';
							oFront.style.backgroundImage='url(image1/little/3gub/'+iNow%3+'.jpg)';
							oBack.style.backgroundImage='url(image1/little/3gub/'+(iNow+1)%3+'.jpg)';
							oPage2.style.backgroundImage='url(image1/little/3gub/'+(iNow+1)%3+'.jpg)';
							bOk=false;
						},false);
					};
				};
				//翻书结束
				
				//分块开始
				function show2_3(){
					var oBox=document.querySelector('#st33_box');
					
					var R=4;
					var C=7;
					
					for(var r=0; r<R; r++){
						for(var c=0; c<C; c++){
							var oS=document.createElement('span');
							
							var oW=oBox.offsetWidth/C;
							var oH=oBox.offsetHeight/R;
							
							oS.style.width=oW+'px';
							oS.style.height=oH+'px';
							
							oS.style.left=oW*c+'px';
							oS.style.top=oH*r+'px';
							
							oS.innerHTML='<i class="bfront"></i><i class="bback"></i>';
							oBox.appendChild(oS);
							
							var f=oS.children[0];
							var b=oS.children[1];
							
							f.style.backgroundPosition='-'+oW*c+'px -'+oH*r+'px';
							b.style.backgroundPosition='-'+oW*c+'px -'+oH*r+'px';
							
							oS.row=r;
							oS.col=c;
						}
					}
					
					var iNow=0;
					var aS=oBox.children;
					var bOk=false;
					oBox.onclick=function (){
						if(bOk)return;
						bOk=true;
						iNow++;
						for(var i=0; i<aS.length; i++){
							aS[i].style.transition='1s all ease '+(aS[i].row+aS[i].col)*150+'ms';
							aS[i].style.transform='perspective(800px) rotateY(180deg)';
						}
						aS[aS.length-1].addEventListener('transitionend',function (){
							//运动完毕
							for(var i=0; i<aS.length; i++){
								aS[i].style.transition='none';
								aS[i].style.transform='perspective(800px) rotateY(0deg)';
								
								aS[i].children[0].style.backgroundImage='url(image1/little/3gub/'+iNow%3+'.jpg)';
								aS[i].children[1].style.backgroundImage='url(image1/little/3gub/'+(iNow+1)%3+'.jpg)';
							}	
							bOk=false;
						});
					};
				};
				//分块结束
				
				//透明度
			function show2_4(){
				/*document.addEventListener('DOMContentLoaded',function(){*/
					var oUl=document.querySelector('#st34_box ul');
					var aLi=oUl.children;
					var oPrev=document.querySelector('#st34_box .aprev');
					var oNext=document.querySelector('#st34_box .anext');
					//alert(oPrev);
					var iNow=0;
					//prev next
					function show()
					{
						for(var i=0;i<aLi.length;i++)
						{
							aLi[i].style.opacity=0;
							aLi[i].style.WebkitTransition='1s all ease';
						}
						aLi[iNow].style.opacity=1;
					}
					show();
					for(var i=0;i<aLi.length;i++)
					{
						oNext.onclick=function()
						{
							iNow++;
							if(iNow==aLi.length)iNow=0;
							show();
							if(iNow+2>aLi.length)
							{	//如果马上超出去了  就让他走第一个图
							//url(image1/little/3gub/
								oNext.style.background='url(image1/little/666/sm_0'+1+'.jpg) no-repeat center';
							}
							else
							{	//如果没超 就走下一张图 因为图片是1开头 所以+2
								oNext.style.background='url(image1/little/666/sm_0'+(iNow+2)+'.jpg) no-repeat center';
							}
						};
						oPrev.onclick=function()
						{
							iNow--;
							if(iNow<0)iNow=aLi.length-1;
							show();
							if(iNow==0)
							{
								oPrev.style.background='url(image1/little/666/sm_0'+aLi.length+'.jpg) no-repeat center';
							}
							else if(iNow==1)
							{
								oPrev.style.background='url(image1/little/666/sm_0'+1+'.jpg) no-repeat center';
							}
							else
							{
								oPrev.style.background='url(image1/little/666/sm_0'+iNow+'.jpg) no-repeat center';
							}
						};
					}
					
					oNext.onmouseover=function()
					{
						oNext.style.WebkitTransition='0.5s all ease';
						oNext.className="anext active";
						oNext.style.background='url(image1/little/666/sm_0'+(iNow+2)+'.jpg) no-repeat center';
					};
					oNext.onmouseout=function()
					{
						oNext.className="anext";
						oNext.style.background='url(image1/little/666/next.png) no-repeat center #999';
					};
					oPrev.onmouseover=function()
					{
						oPrev.style.WebkitTransition='0.5s all ease';
						oPrev.className="aprev active";
						if(iNow==0)
						{
							oPrev.style.background='url(image1/little/666/sm_0'+aLi.length+'.jpg) no-repeat center';
						}
						else if(iNow==1)
						{
							oPrev.style.background='url(image1/little/666/sm_0'+1+'.jpg) no-repeat center';
						}
						else
						{
							oPrev.style.background='url(image1/little/666/sm_0'+iNow+'.jpg) no-repeat center';
						}
					};
					oPrev.onmouseout=function()
					{
						oPrev.className="aprev";
						oPrev.style.background='url(image1/little/666/prev.png) no-repeat center #999';
					};
				
				/*},false);*/
			};
				//透明度结束
				
	
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

