let storeFalsyValue = true;

if(!storeFalsyValue){
    console.log('nothing to show')
}
else{
    console.log('You are amazing')
}


const operation = (num1, num2, add) =>{
   add = num1 + num2;
   return add;
}
const result = operation(5, 2);
console.log(result)