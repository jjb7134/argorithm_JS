// 2가지 방식으로 풀어봄
// map 자료구조를 사용해 풀자.
function solution(participants, completions) {
    //     sort 풀이
        // let partS = participant.sort();
        // let comS = completion.sort();
    
        // for(let i=0; i<participant.length; i++){
        //         if(partS[i]!==comS[i]) return partS[i];
        //     }
        
        // map 자료구조 생성
        // map에 전체인원 담아주고
        // 완료인원만큼 반복 돌려서 
        // map 밸류랑 비교
        const map = new Map();
    
        for(let i=0; i<participants.length; i++){
            let partI=participants[i];
            let comI=completions[i];
    
            map.set(partI, (map.get(partI) || 0)+1);
            map.set(comI, (map.get(comI) || 0)-1);
        }
    
        for(let [k,v] of map){
            // console.log([k,v])
            if(v>0) return k;
        }
    } 

//     입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"



// function solution(participant, completion) {
//     // 정렬하고 비교해서 중복없는 부분부터 slice
//     let sortP = participant.sort();
//     let sortC = completion.sort();
//     let fail=[];
//     // console.log(sortP,sortC)

//     // for(let i=0; i<sortP.length; i++){ //4
//     //     for(let j=0; j<sortC.length; j++){ //3
//     //         if(sortP[j]===sortC[i]){
//     //             sortP.splice(j,1);
//     //             j--;
//     // console.log(sortP)
//     //         }
//     //     }
//     // }

//     for(let i=0;i<sortC.length;i++){
//         if(sortP[0]===sortC[0]){
//             sortP.splice(0,1);
//             sortC.splice(0,1);
//         }
//     }

//     // for(let i=1;i<sortC.length;i++){
//     //     if(sortP[i]===sortC[0]){
//     //         sortP.splice(i,1);
//     //         i--;
//     //     }
//     // }
//         for(let i=0;i<sortP.length;i++){
//             for(let j=0; j<sortC.length;j++){
//                 if(sortP[i]===sortC[j]){
//                     sortP.splice(i,1);
//                 }
//             }
//         }
//     // console.log(sortP,sortC)


//     // let result=fail.toString();
//     return sortP.toString();
// }


// //     // 반복문 한번 돌려서 p를 c랑 비교하면서 같으면 shift 다르면++ 
//         // 이건 i>=c.length면 p.slice(c.length);
// //     // ['filipa', 'josipa', 'marina', 'nikola', 'vinko'] 
// //     // ['filipa', 'josipa', 'marina', 'nikola']
//         // 이건 
// //     // ['ana', 'mislav', 'mislav', 'stanko'] 
// //     // ['ana', 'mislav', 'stanko']