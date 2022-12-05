function sum(a,b) {
    let result=0;
    a.sort((a,b) => a-b);
    b.sort((a,b) => b-a);
    // console.log(a,b)

    for (let i = 0; i < a.length; i++) {
        result+=(a[i]*b[i]);
    }
        
    
    return result;
}
sum([1, 4, 2],	[5, 4, 4])
// sum([1, 4, 2],	[10,1,7])