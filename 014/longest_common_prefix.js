function longest_common_prefix(str_array,pointer){

	var target = str_array[0];
	if(pointer >= target.length){
	   return target;
	}
    for (var i = 1; i < str_array.length; i++) {
    	var str = str_array[i]
    	if(pointer >= str.length){
    	   return str.substring(0,pointer);
    	}else{
    	   var target_char = target.charAt(pointer);
    	   var current_char = str.charAt(pointer);
    	   if(target_char != current_char){
    	   	  return target.substring(0,pointer);
    	   }
    	}	
    }
    return longest_common_prefix(str_array,pointer+1);
}

var str_array = ["dog","dacecar","car"]
console.log(longest_common_prefix(str_array,0));