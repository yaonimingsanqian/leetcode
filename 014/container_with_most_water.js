
function maxArea(arr) {
    var l = 0, r = arr.length - 1;
    var max = 0, h = 0;
    while (l < r) {
        h = Math.min(arr[l], arr[r]);
        max = Math.max(max, (r - l) * h);
        while (arr[l] <= h && l < r) ++l;
        while (arr[r] <= h && l < r) --r;
    }
    return max;
}

function container_with_most_water(arr){
	var foward = 0;
	var back = arr.length-1;
	var max_area = 0;
	var foward_height = 0;
	var back_height = 0;
	var dirction = 0;
	while(true){
		var foward_element = arr[foward];
		var back_element = arr[back];
		if(dirction == 0){
			if(foward_element < foward_height){
			   foward = foward+1;
			   continue;
			}
		}else{
			if(back_element < back_height){
			   back = back -1;

			   continue;
			}
		}
		 //console.log(foward+","+back);
		if(back <= foward){
			return max_area;
		}
		var width = back - foward;
		var height = Math.min(foward_element,back_element);
		var area = width*height;

		if(area > max_area){
			max_area = area;
			foward_height = foward_element;
			back_height = back_element;
			if(foward_element > back_element){
			   back = back-1;
			   dirction = 1;
			}else{
			   foward = foward+1;
			   dirction = 0;
			}
		}else{
		    if(dirction == 0){
		       foward = foward+1;
		    }else{
		       back = back-1;
		    }
		}
	}
}
var arr = [7,8,6,2,5,2,6,7,7];
console.log(maxArea(arr));