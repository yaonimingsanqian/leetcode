/**
冒泡排序，数字临近的两个元素交互位置
**/
function bubble_sort(arr){
	var length = arr.length;
	for(var j=0;j<length-1;j++){
		for(var i=0;i < length-1-j;++i){ //第一次循环，倒数第一位是最大的，第二次循环结束，倒数第二位是第二大的，以此类推
			var left_element = arr[i];
			var right_element = arr[i+1];
			if(left_element > right_element){
				arr[i] = right_element;
				arr[i+1] = left_element;
			}
		}
	}
	console.log(arr);
}

bubble_sort([5,89,9,1,8,0,3]);