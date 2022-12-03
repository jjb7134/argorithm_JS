// 틀린 풀이
function solution(queue1, queue2) {
    let count = 0;
    let totalArr = [...queue1,...queue2];
    let sum1 = queue1.reduce((a,b)=>a+b,0);
    let sum2 = queue2.reduce((a,b)=>a+b,0);
    let rev = (sum1+sum2)/2;

    // 투포인터로 하면 각 포인터가 한바퀴씩 도니까 최대 경우의 수는
    // queue1.length * 4 이다.
    let start=0;
    let end=queue1.length;
    let maxCnt = totalArr.length*2;

    while(count <= maxCnt){
        if(rev===totalArr.slice(start,end)) return 0;
        
        sum1 = sum1 > rev 
            ? sum1 - totalArr[start++ % totalArr.length] 
            : sum1 + totalArr[end++ % totalArr.length];
    }
    
    
    // for(let i=0; i<queue1.length; i++){
    //     if(queue1.reduce((a,b)=>a+b,0) !== queue2.reduce((a,b)=>a+b,0)){
    //         queue1.push(queue2[0]);
    //         queue2.push(queue1[0]);
    //         queue1.shift();
    //         queue2.shift();
    //         count++;
    //         // console.log(queue1,queue2,count,queue1.reduce((a,b)=>a+b,0),queue2.reduce((a,b)=>a+b,0))
    //     }else return count;
    // }


    return -1;
}

// 정답
// function solution(queue1, queue2) {
//     let totalArr = [...queue1, ...queue2];
//     let maxCount = totalArr.length*2;
//     let start = 0;
//     let end = queue1.length;
    
//     const sum = (arr)=>arr.reduce((a,b)=>a+b);
//     let totalNum = sum(totalArr.slice(start, end));
//     let goalNum = sum(totalArr)/2;
//     let count = 0;
    
//     while(count <= MaxCount){
//         if(totalNum < goalNum){
//             totalNum += totalArr[end];
//             end++;
//         }else if(totalNum > goalNum){
//             totalNum -= totalArr[start];
//             start++;
//         }else if(totalNum === goalNum){
//             return count; 
//         }
//         count++;
//     }
    
//     return -1;
// }