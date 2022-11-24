function solution(arr){
    let one=[1,2,3,4,5],
        two=[2,1,2,3,2],
        three=[3,3,1,1,2],
        result=[];

    for(let i=0; i<arr.length; i++){
        let onecoll,twocoll,thrcoll=0;

        if(one[i]===arr[i]) onecoll++;
        if(two[i]===arr[i]) twocoll++;
        if(three[i]===arr[i]) thrcoll++;
    }
    return result.push(Math.max(onecoll,twocoll,thrcoll)).sort((a,b)=>a-b);
}