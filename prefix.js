let arr = ["1221" , "675","11111"]
let tamp , rev=1 , k
let reversedStuff = function (str) {
     let newReversed = "";
     for (let i = str.length - 1; i >= 0; i--) {
       newReversed += str[i];
     }
     return newReversed;
   };
  
function isPal(arr){
    let arr2=[]
    for(let i =0;i<arr.length;i++)
         { k = reversedStuff(arr[i])
           if(k==arr[i])
              arr2.push(k)   
        }
        return arr2
  
}
console.log(isPal(arr))

//console.log(arr)