function roman_to_integer(roman){
	var result = 0;
	var map = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
	for(var i = roman.length-1; i >= 0; i--){
		var roman_num = roman.charAt(i);
		var val = map[roman_num];
		if(i < roman.length-1){
		   var before = roman.charAt(i+1);
		   if(roman_num == "I"){
		   	  if(before == "V" || before == "X"){
		   	  	 val = 0-val;
		   	  }
		   }else if(roman_num == "X"){
		   	  if(before == "L" || before == "C"){
		   	  	  val = 0-val;
		   	  }
		   }else if(roman_num == "C"){
		   	  if(before == "D" || before == "M"){
		   	  	  val = 0-val;
		   	  }
		   }
		}
	    result = result+val;
	}
	return result;
}

console.log(roman_to_integer("MMMCMXCIX"));