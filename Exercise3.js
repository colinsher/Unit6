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

