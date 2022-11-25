// 숫자뒤집기
function a (b){
    
    let answer=[];

    return b.toString().split('').reverse();

}

// 절댓값 더하기
function solution(ab, si) {
    var result = 0;
    
    for(let i=0; i<ab.length; i++){
        if(si[i]===true) result+=ab[i];
        else if(si[i]===false) result-=ab[i];
        // console.log(result);
    }
    
    return result;
}

// 명예의 전당

function m(k, score) {
    let answer = [];
    let best=[];
    
//     명예의 전당에 점수 삽입.
//     length가 k미만일때 다 넣어주고 sort시키자
    for(let i=0;i<k;i++){
        if(best.length<k){
            best.push(score[i]);
            answer.push(Math.min(...best));
        }
    }
    best.sort((a,b) => b-a);
    answer.sort((a,b) => b-a);
    console.log(best,answer)
    console.log('------------')

    // 나머지 값 
    for(let i=k;i<score.length;i++){
        if(score[i]>=best[0]){
            best.unshift(score[i]);
            best.pop();
        }else if(score[i]<best[0] && score[i]>=best[1]){
            best[2]=best[1];
            best[1]=score[i];
        }else if(score[i]<best[1] && score[i]>best[2]){
            best[2]=score[i];
        }
        answer.push(Math.min(...best));
            console.log(best,answer)

    }
    
    
    
    return answer;
}

function wan(part, comp) {
    var answer = '';
//     let Spart=part.sort();
//     let Scomp=comp.sort();
    
//     for(let i=0; i<part.length; i++){
//         if(Spart[i] !== Scomp[i]) return Spart[i]
//     }
    
    let map = new Map();
    
    for(let i=0; i<part.length; i++){
        map.set(part[i], (i || 0) +1);
        map.set(comp[i], (i || 0) -1);
    }
    
    for(let [k,v] of map){
        console.log([k,v])
        // if()
    }
    
    return answer;
}