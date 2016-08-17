function Str(s){
	this.s = s;
}

Str.prototype.reverse = function(){
	var s = this.s,
		str = "";

		for(var i = s.length-1; i >= 0; i--){
			str += s[i];
		}
		return str;
}

var s = new Str('hello');
console.log('reverse hello: '+s.reverse());