function isPrime(number){
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            return false
        }

    }
    return true
}

async function  print(){
    for(let i=0;i<=100;i++){
       if(isPrime(i)){
           console.log(i)
       }
    }
}
print()