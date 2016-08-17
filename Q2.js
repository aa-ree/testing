function square(num) {
    for(var i=num; i>=0; i--){
     if(i*i-num == 0){
       return true;
       break;
     }
   }
   return false;
}

console.log("is square 16: "+square(16));
console.log("is square 14: "+square(14));