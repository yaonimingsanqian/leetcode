
/*
题目：判断一个整数是不是回文，也就是正着读和倒着读相等
*/

function reverse(num){
	var result = 0;
	while(num >= 1){
		var bit = num%10;
		result = result*10;
		result = result + bit;
		num = parseInt(num/10);
	}
	console.log(result);
	return result;
}


function palindrome_number(num){
	if(num < 0){
	    console.log("不是回文");
	   return false;
	}else{
	   if(num == reverse(num)){
	   	  console.log("是回文");
	   	  return true;
	   }else{
	   	  console.log("不是回文");
	   	  return false;
	   }
	}
}

palindrome_number(1212121212);