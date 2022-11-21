function solution(participant, completion) {
    // 정렬하고 비교해서 중복없는 부분부터 slice
    let sortP = participant.sort();
    let sortC = completion.sort();
    let fail=[];
    // console.log(sortP,sortC)

    // for(let i=0; i<sortP.length; i++){ //4
    //     for(let j=0; j<sortC.length; j++){ //3
    //         if(sortP[j]===sortC[i]){
    //             sortP.splice(j,1);
    //             j--;
    // console.log(sortP)
    //         }
    //     }
    // }

    for(let i=0;i<sortC.length;i++){
        if(sortP[0]===sortC[0]){
            sortP.splice(0,1);
            sortC.splice(0,1);
        }
    }

    // for(let i=1;i<sortC.length;i++){
    //     if(sortP[i]===sortC[0]){
    //         sortP.splice(i,1);
    //         i--;
    //     }
    // }
        for(let i=0;i<sortP.length;i++){
            for(let j=0; j<sortC.length;j++){
                if(sortP[i]===sortC[j]){
                    sortP.splice(i,1);
                }
            }
        }
    // console.log(sortP,sortC)


    // let result=fail.toString();
    return sortP.toString();
}


//     // 반복문 한번 돌려서 p를 c랑 비교하면서 같으면 shift 다르면++ 
        // 이건 i>=c.length면 p.slice(c.length);
//     // ['filipa', 'josipa', 'marina', 'nikola', 'vinko'] 
//     // ['filipa', 'josipa', 'marina', 'nikola']
        // 이건 
//     // ['ana', 'mislav', 'mislav', 'stanko'] 
//     // ['ana', 'mislav', 'stanko']