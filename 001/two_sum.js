
/**
 题目：指定一个整型数组和一个指定整型值，找到这个数组中和为指定值的元素的下标。
 思路：用指定值和元素做差的d1存在map中，在数组中找d1
**/

function two_sum(numbers,tatget){
	var right_sets = new Map();
	for(var i=0;i<numbers.length;++i){
		if(right_sets.get(numbers[i]) != null){
		   return [right_sets.get(numbers[i]),i];
		}
		right_sets.set(tatget-numbers[i],i);//前面是key，后面是value
	}
}

console.log(two_sum([11,3,4,55,-11,2],0));