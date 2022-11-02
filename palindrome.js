let string="naman";
function reverse(string){
	let bag="";
for(i=0;i<string.length-1;i++){
bag+=string[i]
}
return bag;
}
let reversed=reverse(string);
if(string==reversed){
console.log("Not a palindrome");
}else{
console.log("palindrome");
}

