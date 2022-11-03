function checkprime(num){
let counter=0;
for(i=1;i<=num;i++){
if(num%i==0){
	counter++;
	}
  }
if(counter==2){
return true;
}
return false;
}
let ans = checkprime(7);
if(ans==true){
console.log("Prime")
}else{
console.log("Not a Prime")
}