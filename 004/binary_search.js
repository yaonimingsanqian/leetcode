/**
题目：二分查找
思路：
**/

function binary_search(arr,target,from,to){ //递归
	//console.log(parseInt((to-from)/2));
	var middle = parseInt((to-from)/2)+from;
	if(target > arr[middle]){ //目标在右边
	   return binary_search(arr,target,middle+1,arr.length-1);
	}else if(target == arr[middle]){
	   return  middle;
	}else{
	  return binary_search(arr,target,0,middle-1);
	}
}

function binary_search_while(arr,target,from,to){
	
	while(true){
		var middle = parseInt((to-from)/2)+from;
		if(target > arr[middle]){ //目标在右边
		   from = middle+1;
		   to = arr.length-1;
		}else if(target == arr[middle]){
		   return  middle;
		}else{
		  from = 0;
		  to = middle-1;
		}
	}
}

console.log(binary_search_while([1,3,5,8,9,22],22,0,5));