// function quick_sort(s,l,r){
// 	if (l < r)  
//     {  
//         var i = l, j = r, x = s[l];  
//         while (i < j)  
//         {  
//             while(i < j && s[j] >= x) // 从右向左找第一个小于x的数  
//                 j--;    
//             if(i < j){

//                 s[i++] = s[j];  //s[i]=s[j];i++
//                 console.log(" "+s);
//             }
//              while(i < j && s[i] < x) // 从左向右找第一个大于等于x的数  
//                 i++;    
//             if(i < j)   
//                 s[j--] = s[i];  //s[j] = s[i];j--
//                 console.log(s+"");
//         }  
//         s[i] = x;  
//         quick_sort(s, l, i - 1); // 递归调用   
//         quick_sort(s, i + 1, r);  
//     }  
// };

/**
题目：快速排序算法
思路：两个哨兵，i,j,j从右边找不基数小的，i从左边找比基数大的，然后交换两个目标元素的位置，指导i=j,然后交换i和基数的位置，递归处理。
**/
function quick_sort(arr,from,to){
	var i = from;
	var j = to;
	var key = arr[from];
	if(from >= to){
	   return;
	}
	while(i < j){
		while(arr[j] >= key && i < j){
			j--;
		}
		while(arr[i] <=key && i < j){
			i++;
		}
		if(i < j){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	arr[from] = arr[i]
	arr[i] = key;
    quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}

var arr = [3,5,4,-5,1,0,2,-1,-1];
console.log(arr);
quick_sort(arr,0,arr.length-1);
console.log(arr);