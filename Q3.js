function intervals(){
  var arr1 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
  var merge = [4,9];
  var max1, max2;
  for(var i=0; i<arr1.length; i++){
    //if(arr1[i][0] < merge[0] && arr1[i][1] > merge[0]){
      //console.log('merge: '+merge[0]);
    //}
    if(arr1[i][1] > merge[0] && arr1[i][0] < merge[1]){
      if(arr1[i][0] > merge[0] && arr1[i][1] < merge[1]){
        var index = arr1.indexOf(arr1[i]);
        arr1.splice(index,1);
      }
      if(arr1[i][0] < merge[1] && arr1[i][1] > merge[1]){
        max1 = arr1[i][1];
        var index = arr1.indexOf(arr1[i]);
        arr1.splice(index,1);
      }
      if(arr1[i][1] < merge[1] && arr1[i][1] > merge[0] ){
      max2 = merge[1];
      arr1[i][1] = Math.max(max1,max2);
    }
    }
    
  }
 
  console.log(arr1);
}