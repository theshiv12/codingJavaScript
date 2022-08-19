let a = ["shivam " , "jay" ,"aja " , "ram1" ,"ganu","ram2 " , "ram3"]

let obj = {}
for(let i =0;i<a.length;i++)
{
   obj[a[i][0]] = a.filter((e, i1 , a)=>e[0]===a[i][0])
}
console.log(obj)