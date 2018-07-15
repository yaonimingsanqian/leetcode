//Given array nums = [-1, 0, 1, 2, -1, -4],

function three_sum(nums){
	var result = [];
	
	for(var k=0;k < nums.length;k++){
		if(nums[k] > 0){
	       break
	    }
		if(k > 0 && (nums[k] == nums[k-1])){
		   continue;
		}
		var target = 0 - nums[k];
		var i = k+1;
		var j = nums.length - 1;

		while(i < j){
			//console.log(nums[i]+","+nums[j]+","+target)
			if(nums[i]+nums[j] == target){
			   var item = [nums[k],nums[j],nums[i]];
			   result.push(item);
			   while(i < j && (nums[i] == nums[i+1])){
			   	 i++
			   }
			   while(i < j && (nums[j-1] == nums[j])){
			     j--			 
			   }
			   i++;
			   j--;
			}else if(nums[i]+nums[j] < target){
				i++;
			}else{
				j--;
			}
		}	
	}
	console.log(result)
	return result;
}
//[-1, 0, 1, 2, -1, -4]
three_sum([-9, -8, -7, -6, -5, -4])