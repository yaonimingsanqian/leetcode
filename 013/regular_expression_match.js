/*
leetcode:第10题

题目：Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.


翻译：写个正则表达式，支持'*'和'.'。'.'代表一个字符,'*'代表几个'*'前的字符。必须做到完全匹配
注意：
字符串s要么是empty要闷是小写a-z
字符串p要么是empty要闷是小写a-z和'.'和'*'。


Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".


Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

*/


function get_pre_pre(p,pos){
	while(p.charAt(pos) == '*'){
		pos = pos-1;
	}
	return p.charAt(pos);
}

function regular_expression_match(s,p){
	var p_pre_pos = -1;
	var is_march = false;
	for(var j=0;j<p.length;j++){
		 p_pre_pos = p_pre_pos+1;
		if(p[j] == '.' || p[j] == s[0]){
		   is_march = true;
		   break;
		}
	}
	if(!is_march){
	   console.log("第一位未匹配成功");
	   return false;
	}
	for(var i=1;i<s.length;i++){
		var s_char = s.charAt(i);
		var p_pre = p.charAt(p_pre_pos);
		if(i >= p.length){
		   if(p_pre == '*'){
		   	  var p_pre_pre = get_pre_pre(p,p_pre_pos-1);
		   	  if(p_pre_pre != s_char && p_pre_pre != '.'){
		   	  	 console.log("不能匹配成功");
		   	  	 return false;
		   	  }

		   }else{
		   	  console.log("不能匹配成功~");
		   	  return false;
		   }
		}else{
		   if(p_pre == '*'){
		   	  var p_pre_pre = get_pre_pre(p,p_pre_pos-1);
		   	  if(p_pre_pre != s_char && p_pre_pre != '.'){
		   	  	 if(p_pre_pos >= p.length - 1 ){
		   	  	 	console.log("不能匹配成功!");
		   	  	    return false
		   	  	 }else{
		   	  	 	var p_current = p.charAt(p_pre_pos+1)
		   	  	 	if(p_current != '.' && p_current != s_char){
		   	  	 	   console.log("不能匹配成功!!");
		   	  	 	   return false;
		   	  	 	}
		   	  	 	
		   	  	 }
		   	  }
		   	  p_pre_pos = p_pre_pos+1;

		   }else{
		   	 var p_current = p.charAt(p_pre_pos+1)
		   	 if(p_current == '*'){
		   	    if(p_pre != '.' && p_pre != s_char){
		   	       console.log("不能匹配成功!!!");
		   	       return false;
		   	    }
		   	 }else{
		   	    if(p_current != '.' && p_current != s_char){
		   	        console.log("不能匹配成功!!!!");
		   	       return false;
		   	    }
		   	 }
		   	 p_pre_pos = p_pre_pos+1;
		   }
		}
	}
	console.log("匹配成功!");
	return true;
}
regular_expression_match("mississippi","mis*is*p*.");