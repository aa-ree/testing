function square(num) {
    for(var i=num; i>=0; i--){
     if(i*i-num == 0){
       console.log(true);
       return true;
       break;
     }
   }
   console.log(false);
   return false;
}

square(16);
square(14);