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


max_palindromic_substring("mdabbasbhjasdgjkhadhjkasdhkjasdhkajsdhkajsddddddd")//此算法随着问题规模增长时间频度会急剧增高


//马拉车算法 Mancher