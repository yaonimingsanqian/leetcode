/**
题目：指定字符串的不含重复字符子字符串的最大长度
思路:向后遍历，当前位置 - 符合条件的字符串的起始位置差值和max比
**/

function max_substr_length(str){
	var hash = new Map();
    var max = 0;
    var pre_max_begin_pos = 0;
	for(var i=0;i<str.length;i++){
	    var c = str.charAt(i)+"";
	    var c_pos = hash.get(c);
	    
	    if(c_pos != null && c_pos >= pre_max_begin_pos){ // >=  防止出现连续的相同字符，

	       pre_max_begin_pos = c_pos+1;
	    }
	    hash.set(c,i);
	    var length = i -  pre_max_begin_pos+1;
	    if(length > max){
	       max = length;
	    }
	}
	console.log(max);
	return max;
}

max_substr_length("12321uuur");
