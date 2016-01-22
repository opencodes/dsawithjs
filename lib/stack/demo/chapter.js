var records = new Stack();
records.push('Rajesh');
records.push('Rakesh');
records.push('Rupesh');
console.log(records.peek());

function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while(num > 0);
	
	var newNum = "";
	while(s.length() > 0){
		newNum += s.pop();
	}
	return newNum;
}

console.log(mulBase(129, 8));


function isPalindrome(str){
	var s = new Stack();
	for(var i = 0; i < str.length; i++){
		s.push(str[i]);		
	}
	
	var newStr = "";
	while(s.length() > 0){
		newStr += s.pop();
	}	
	return (str == newStr);	
}

console.log("rajesh is palindrome : "+ isPalindrome('Rajesh'));
console.log("dalda is palindrome : "+ isPalindrome('racecar'));


