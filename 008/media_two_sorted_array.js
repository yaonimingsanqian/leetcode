
function find_key_in_two_sorted_arr(arr_one,one_begin,arr_two,two_beign,k){ //key表示第几个数，不是下标
	if(one_begin >= arr_one.length) return arr_two[two_beig+k -1]; //如果array_one已经用完了，那么剩下的元素都由arr_two提供，那第k个元素就是arr_two[two_beig+k -1]
	if(two_beign >= arr_two.length) return arr_one[one_begin+k - 1];
	if(k == 1){ //如果还差最后一个元素
	   if(arr_one[one_begin] >  arr_two[two_beign]){ //取小的
	   	  return arr_one[two_beign];
	   }else{
	   	  return arr_two[one_begin];
	   }
	}

	var p1 = one_begin+parseInt(k/2) -1; //如果求第key个元素，那么假设arr_one提供k/2个元素,arr_two提供k/2个元素
	var p2 = two_beign+parseInt(k/2) - 1;
	if(arr_one[p1] < arr_two[p2]){ //如果arr_one[p1] < arr_two[p2],说明如果arr_one的前k/2个元素都比arr_two的元素小，这相当于新数组的前k/2个元素就确定了，arr_one的指针向前移动k/2，arr_two不变
	   return find_key_in_two_sorted_arr(arr_one,one_begin+parseInt(k/2),arr_two,two_beign,k - parseInt(k/2));//k - parseInt(k/2) 表示已经找到了k/2个元素
	}else{
	   return find_key_in_two_sorted_arr(arr_one,one_begin,arr_two,two_beign+parseInt(k/2),k - parseInt(k/2));
	}

}

var a1 = [1,3,5,7,9,11];
var a2 = [2,4,6,8,10,12];

function wrap(nums1,nums2){
    var len = nums1.length + nums2.length;
    if (len % 2 == 0) {
        return (find_key_in_two_sorted_arr(nums1, 0, nums2, 0, len / 2) + find_key_in_two_sorted_arr(nums1, 0, nums2, 0, len / 2 + 1)) / 2.0;
    }
    return find_key_in_two_sorted_arr(nums1, 0, nums2, 0, (len + 1) / 2);
}

console.log(wrap(a1,a2));