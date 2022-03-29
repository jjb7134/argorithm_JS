function solution(n,lost,reserve) {
    let answer=n-lost.length;
    let reallost=[];
    
    for(i=0; i<lost.length;i++){ //여벌있는애들중 도둑맞은 애 걸러주기
      if(reserve.includes(lost[i])){
        reserve = reserve.filter(e => e !== lost[i]);
        answer++;
      }else {
        reallost.push(lost[i]);
      }
    }
    //reallost 테스트 해보고 10번 풀어보자
    for(i=0; i<lost.length;i++){
      if(reserve.includes(lost[i]-1)){ // 자기보다 오른쪽일때
        reserve = reserve.filter(e => e !== lost[i]-1);
        answer++;
      }else if(reserve.includes(lost[i]+1)){ //자기보다 왼쪽일때
        reserve = reserve.filter(e => e !== lost[i]+1);
        answer++;
      } 
    }
    return answer; 
  }
  console.log(solution(3,[3],[1]));