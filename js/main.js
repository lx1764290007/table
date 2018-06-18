$(function(){
//初始化数组
 var arr = new Array(16);
 var barr = new Array(16);
 //随机生成4个不相等的索引值与正整数
 var a = document.getElementsByTagName('td');
  for(j=0;j<16;j++){
        barr[j]=j
		}
		for(i=0;i<4;i++){
          do{ 
             var randomValue = Math.floor(Math.random()*a.length); 
			       var number = Math.floor(Math.random()*150)-50;        //概率出现负数
	         a[randomValue].firstChild.nodeValue = number;
          }while(barr[randomValue]==null){ 
             barr[randomValue]=null; 
           } 
		 }
        for(k=0;k<a.length;k++){
		//初始化单元格，若存在有效值则此单元格不可编辑
          if(a[k].firstChild.nodeValue==undefined||a[k].firstChild.nodeValue==" "||a[k].firstChild.nodeValue==null){
              arr[k] = null;
              a[k].setAttribute("contentEditable","true")       
            }else{
              arr[k] = parseInt((a[k].firstChild.nodeValue),10);
            }
        }
   //为每个单元格添加"id"属性并赋值,表格内容是通过改变节点而改变的，监听每个单元格节点文本值改变事件
   for(i=0;i<$('.main td').length;i++){
     $('.main td').eq(i).attr('id','a'+i).on('DOMCharacterDataModified',function(){
	//截取目标id字符串最后一位或者两位字符并且转化数据类型为number
	        var str = $(this).attr('id');
              if(str.length==2){
	            num = parseInt(str.substr(str.length-1,1),10);
            }
            else if(str.length==3){
                num = parseInt(str.substr(str.length-2,2),10);
            }else {
              return false;
            };
			//更新数组的值
	         arr[num] = parseInt($(this).text(),10);
			                //简化书写
		                    var firstRow = arr[0]+arr[1]+arr[2];
                  var secondRow = arr[4]+arr[5]+arr[6];
                                  var thirdRow = arr[8]+arr[9]+arr[10];
                            var forthRow = arr[12]+arr[13]+arr[14];
         var firstLi = arr[0]+arr[4]+arr[8];
                var secondLi = arr[1]+arr[5]+arr[9];
   var thirdLi = arr[2]+arr[6]+arr[10];
          var forthLi = arr[3]+arr[7]+arr[11];
							
	//最终判断单元格行对应单元格的关系，附带对应的样式
 if(arr[0]!==null&&arr[1]!==null&&arr[2]!==null&&arr[3]!==null){
     firstRow==arr[3]? $('#a0,#a1,#a2,#a3').css('borderColor','green').css('color','green'):$('#a0,#a1,#a2,#a3').css('borderColor','red').css('color','rad');
                      }; 
 if(arr[4]!==null&&arr[5]!==null&&arr[6]!==null&&arr[7]!==null){
	 secondRow==arr[7]? $('#a4,#a5,#a6,#a7').css('borderColor','green').css('color','green'):$('#a4,#a5,#a6,#a7').css('borderColor','red').css('color','red');
					  };	 
 if(arr[8]!==null&&arr[9]!==null&&arr[10]!==null&&arr[11]!==null){
	  thirdRow==arr[11]? $('#a8,#a9,#a10,#a11').css('borderColor','green').css('color','green'):$('#a8,#a9,#a10,#a11').css('borderColor','red').css('color','red');
					  };
 if(arr[12]!==null&&arr[13]!==null&&arr[14]!==null&&arr[15]!==null){
	 forthRow==arr[15]? $('#a12,#a13,#a14,#a15').css('borderColor','green').css('color','green'):$('#a12,#a13,#a14,#a15').css('borderColor','red').css('color','red');
					  };
		//列与单元格的关系及对应的样式
 if(arr[0]!==null&&arr[4]!==null&&arr[8]!==null&&arr[12]!==null){
     firstLi==arr[12]? $('#a0,#a4,#a8,#a12').css('borderColor','green').css('color','green'):$('#a0,#a4,#a8,#a12').css('borderColor','red').css('color','rad');
                      } 
 if(arr[1]!==null&&arr[5]!==null&&arr[9]!==null&&arr[13]!==null){
	 secondLi==arr[13]? $('#a1,#a5,#a9,#a13').css('borderColor','green').css('color','green'):$('#a1,#a5,#a9,#a13').css('borderColor','red').css('color','red')
					  }	 
 if(arr[2]!==null&&arr[6]!==null&&arr[10]!==null&&arr[14]!==null){
	 thirdLi==arr[14]? $('#a2,#a6,#a10,#a14').css('borderColor','green').css('color','green'):$('#a2,#a6,#a10,#a14').css('borderColor','red').css('color','red')
					  }   
 if(arr[3]!==null&&arr[7]!==null&&arr[11]!==null&&arr[15]!==null){
	  forthLi==arr[15]? $('#a3,#a7,#a11,#a15').css('borderColor','green').css('color','green'):$('#a3,#a7,#a11,#a15').css('borderColor','red').css('color','red')
			 }
	   })
	}
  $('button.go').click(function(){
     $('.rule').slideUp();

})
})

