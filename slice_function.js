const list = [1,2,3,100,500,600,7,8,9,10];
const index = 4;
console.log("before :" +   list);

const increment = (list,index) =>{   
   return [
      ...list.slice(0,index),
      list[index] + 1 , 
      ...list.slice(index+1)
     ]
 }
console.log("After : " + increment(list,4))
 
//  result
//  "before :1,2,3,100,500,600,7,8,9,10"
// "After : 1,2,3,100,501,600,7,8,9,10"
