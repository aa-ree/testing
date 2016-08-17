function intervals(stack, merge){
  var max = merge[1], min = merge[0];

  //finding relation number
  for(var i=0; i<stack.length; i++){
    var overlap = stack[i][1] > merge[0] && stack[i][0] < merge[1];
    if(overlap){
        max = Math.max(stack[i][1], max);
        min = Math.min(stack[i][0], min);
    }
  }

  //compare with origin num
  for(var j=0; j<stack.length; j++){
      var comp = [min, max];
      if(stack[j][0] == min){
        stack.splice(j,1,comp);
      }
      if(stack[j][0] > min && stack[j][1] <= max){
        stack.splice(j--,1);
      }
  }
  return stack;
}

console.log("Given intervals [1,3],[6,9], insert and merge [2,5] in as:");
console.log(intervals([[1,3],[6,9]],[2,5]));
console.log("Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as:");
console.log(intervals([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9]));