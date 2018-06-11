/**
题目：快速排序算法
思路：两个哨兵，i,j,j从右边找不基数小的，i从左边找比基数大的，然后交换两个目标元素的位置，指导i=j,然后交换i和基数的位置，递归处理。
**/
function quick_sort(arr,from,to){
	var i = from; //哨兵i
	var j = to; //哨兵j
	var key = arr[from]; //标准值
	if(from >= to){ //如果数组只有一个元素
	   return;
	}
	while(i < j){
		while(arr[j] > key && i < j){ //从右边向左找第一个比key小的数，找到或者两个哨兵相碰，跳出循环
			j--;
		}
		while(arr[i] <= key && i < j){  //从左边向右找第一个比key大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证key右边的元素都是大于等于key的
			i++;
		}
		/**
		  代码执行道这里，1、两个循环到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(key是当前数组最小值)
		**/
		if(i < j){ //交换两个元素的位置
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	arr[from] = arr[i] //
	arr[i] = key;
    quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}

var arr = [3,5,4,-5,1,0,2,-1,-1];
console.log(arr);
quick_sort(arr,0,arr.length-1);
console.log(arr);