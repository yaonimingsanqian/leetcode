
function divide_conquer(arr,from,to){
	if(to - from == 1){
	   if(arr[from] > arr[to]){
	   	  console.log("---")
	   	  return {"max":arr[from],"min":arr[to]}
	   }else{
	   	   console.log("-----")
	   	  return {"max":arr[to],"min":arr[from]}
	   }
	}else if(to - from == 0){
	    console.log("-------")
	   return {"max":arr[from],"min":arr[to]}
	}else{
	   var middle = parseInt(from+(to-from)/2);
       var result1 = divide_conquer(arr,from,middle);
       var result2 = divide_conquer(arr,middle+1,to);
       var result = {};
       if(result1["max"] > result2["max"]){
       	  result["max"] = result1["max"];
       }else{
       	  result["max"] = result2["max"];
       }

       if(result1["min"] > result2["min"]){
       	  result["min"] = result2["min"];
       }else{
       	  result["min"] = result1["min"];
       }
       return result;
	}

}
var arr = [34,5,6,7111,7,8,889,9];
console.log(divide_conquer(arr,0,arr.length-1));