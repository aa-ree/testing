function calcaulator(add1, add2){
	var carry, sum, action;
		carry = (add1 & add2) << 1;
		sum = add1 ^ add2;

		action = (sum & carry) ? calcaulator(sum, carry) : sum ^ carry;
		return action;
}

console.log("Given a = 1 and b = 2, return: "+calcaulator(1,2));