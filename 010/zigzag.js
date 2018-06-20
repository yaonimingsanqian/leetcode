/*
 n = 4的情况
 j+6- 2i;

 0      6     0           

 1   5  7   1

 2 4    8 0    

 3      9       
*/
function convert_pos(row,pos,n){
	if(row == 0 || row == n-1){
	   return row+pos*(2*n-2);
	}else{
	   if(pos == 0){
	   	  return row;
	   }
	   if(pos%2 != 0){
         return ((2*n-2)-row)+parseInt((pos/2))*(2*n-2);
	   }else{
	   	 return row+(pos/2)*(2*n-2);
	   }
	}
	
}

function zigzag(s,n){
	var result = "";
	for(var i=0;i < n;++i){
		var pos = 0;
		while(true){
			var new_pos = convert_pos(i,pos,n);
			if(new_pos < s.length){
			   pos++;
			   result = result+s.charAt(new_pos);
			}else{
			   break;
			}
		}
		result = result+"\r\n";
	}
	console.log(result);
}

zigzag("0123456789010",4);