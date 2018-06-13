/**
题目：求指定字符串的最长回文子字符串的长度，并且算法可以承担1000个字符串的长度的计算。题目链接：https://leetcode.com/problems/longest-palindromic-substring/

**/
//时间复杂度为O(n^2),mdabbasb
var st = 0,end = 0,max = 0;
function find_palindromic(arr,from,to){
	while(from >=0 && to < arr.length && arr.charAt(from) == arr.charAt(to)){
		--from;
		++to;
	}
	if(end - st < to - from - 2){ // while 循环跳出后，from在边界左侧一位，to在边界右侧1位，所以这里-2
	   st = from+1;
	   end = to-1;
	}

}
function max_palindromic_substring(arr){
	for(var i=0;i < arr.length;i++){
		find_palindromic(arr,i,i); //奇数
		find_palindromic(arr,i,i+1); //偶数
	}
	console.log(end-st+1);
}


//max_palindromic_substring("mdabbasbhjasdgjkhadhjkasdhkjasdhkajsdhkajsddddddd")//此算法随着问题规模增长时间频度会急剧增高


//马拉车算法 Mancher

function regular_str(s){
	var res="#";
    for(var i=0;i<s.length;++i)
    {
        res+=s[i];
        res+="#";
    }
    return res;
}
function mancher(str){
	str = regular_str(str);
	var R = 0,mi = 0,max_length = 0;
	var p = [];
	for(var i=0;i < str.length;i++){
		p[i] = Math.min(i<R?Math.min(p[2*mi-i],R-i):1);
		/**
		  Math.min(p[2*mi-i],R-i)仔细解释下
		  这里为什么选两者中小的呢？
		  当p[2*mi-i]较小时，说明以i点处字符为中心的回文在(R,L)区间内，直接附值即可。
		  当p[2*mi-i]较大时，说明，以i点处字符为中心的回文至少在区间[R,L]内，所以先附值(R-i),然后再一一做对称匹配。

		**/
		while(str.charAt([i+p[i]]) == str.charAt(i-p[i])){ //做对称匹配
		  p[i] = p[i]+1;
		}
		if(R < p[i]+i-1){ //中心+半径-重复位置
		   R = p[i]+i-1;
		   mi = i;
		}
		if(max_length < p[i]){	
		   max_length = p[i];
		}
	}
	return max_length-1;
}
console.log(mancher("mdabbasbhjasdgjkhadhjkasdhaaaaaaaaaaaakjasdhkajsdhkajsddddddd"));