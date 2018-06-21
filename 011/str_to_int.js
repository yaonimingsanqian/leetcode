/*
题目：将可能含有正负号的字符串转换为有符号整数，同时整数的值在[-2147483648,2147483647]之间，小于-2147483648的返回-2147483648,大于2147483647返回2147483647。
Input: "-91283472332"
Output: -2147483648

注意：这里用了parseInt函数，实际上这个函数可以自己通过映射实现
*/

function convert(str,sign){
	var result = 0;
	if(str.length == 10){
	  
	   var reference = 0;
	   if(sign == '-'){
	   	   reference = "2147483648";
	   }else{
	   	   reference = "2147483647";
	   }
	   for(var i=0;i < str.length;i++){
	   	   result = result*10;
	   	   var char = parseInt(str.charAt(i));
	   	   if(char > parseInt(reference.charAt(i))){
	   	   	  if(sign == '-'){
	   	   	  	 return -2147483648;
	   	   	  }else{
	   	   	  	 return 2147483647;
	   	   	  }
	   	   }
	   	   result = result+parseInt(char);
	   }
	}else{
		for(var i=0;i < str.length;i++){
	   	   result = result*10;
	   	   var char = parseInt(str.charAt(i));
	   	   result = result+parseInt(char);
	   }

	}
	return result;
}

function str_to_int(str){
	str = str.replace(/\s+/g,"");
	if(str.charAt(0) == '-'){
	   if(str.length > 11){
	   	  return -2147483648;
	   }else{
          return convert(str.substring(1),"-")
	   }
	}else if(str.charAt(0) == "+"){
	   if(str.length > 11){
	   	  return 2147483647;
	   }else{
          return convert(str.substring(1),"+")
	   }
	}else{
	   if(str.length > 10){
	   	  return 2147483647;
	   }else{
          return convert(str,"+")
	   }
	}
}
console.log(str_to_int("2147483648"));