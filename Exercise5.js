//Unit 6

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


