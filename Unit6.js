//Unit 6

//Exercise 3:
var average = function(a){
	var count = 0;
	var sum = 0;
	for (number in a){
		n = a[number]/1;
		console.log(typeof n);
		if(!isNaN(n)){
			count +=1;
			sum += n;
		}
	}
	console.log(sum);
	console.log(count);
	return (sum/count);
}

var string = prompt("enter some numbers");
var array = string.split(" ");
console.log(average(array));

//Exercise 5:
var rando = function(x,y){
	var c = Math.abs(x-y);
	r = Math.random()*c;
	if (x<y){
		r = r+x;
	}else{
		r = r+y;
	}
	return r;
}

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


