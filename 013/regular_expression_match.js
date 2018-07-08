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
字符串s要么是empty要么是小写a-z
字符串p要么是empty要么是小写a-z和'.'和'*'。


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
function myMatch(s,p,i,j){
	if(j >= p.length){ //如果p的指针已经移出结尾，看s的指针，如果s的指针也移出结尾，返回匹配成功，否则匹配失败
	   return i >= s.length;
	}
	if(j == p.length-1){ //如果p的指针指向最后一位，那直接和s的最后一位比较即可，而且这里的的最后一位不可能是*号，因为如果是*,下面的代码会把*跳过
	   return (i == s.length -1) && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.')
	}

	if(j+1 < p.length && p[j+1] != '*'){//如果j+1不是*
	  if(p[j] == s[i] || p[j] == '.'){ //并且和s能匹配上
	  	  return myMatch(s,p,i+1,j+1); //看下一位能不能匹配上
	  }
	  return false;
	}
	with(j < p.length && i < s.length && (p[j] == s[i]) || p[j] == '.'){ //如果j+1是*，并且能匹配成功
		if(myMatch(s,p,i,j+2)){ //假设*号重复它前面的字符0,1,2,3,4...次，测试成功一次即可
		   return true;
		}
		i++;
	}
	return myMatch(s,p,i,j+2); //如果j+1是*，并且不能匹配成功，跳过这个x*这两个字符
}
var ss = "mississippppi";
var pp = "a*b*mis*is*ip*i";
console.log(myMatch(ss,pp,ss.length-1,pp.length-1));
//var ss console.log(myMatch("mississippppi","mis*is*ipp*pp*i","mississippppi".length-1,"mis*is*ipp*pp*i".length-1));