let arr =[2,1,0,3,2,6]
for(let i=0;i<arr.length-1;i++){
    for(let j=i;j<arr.length-i-1;i++){
        [arr[i],arr[j]]=[arr[j], arr[i]]
    }
}
