//Unit 6

//Exercise 7:
var zeroes = function(a){
	var count = 0;
	for(var i = 0;i<a.length;i++){
		if(a[i]===0){
			count++;
		}
	}
	return count;
}
console.log(zeroes([1,false,"",0]));



