
function factorial(n:number):number{
    if(n===0){
        return 1;
    }
    /* else{
        let sum=1;
        for(let i=1;i<=n;i++){
            sum= sum*i;
        }
        return sum;
    } */
    return n*factorial(n-1);
}
console.log(factorial(8));