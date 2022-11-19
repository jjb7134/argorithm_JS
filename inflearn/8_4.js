//==============부분함수 출력==========

function solution(n) {
    let answer=[];
    let ch=Array.from({length:n+1}, ()=>0); //원하는 수까지 배열을 생성해줘야되서 n+1
    
    function dfs(l){ //1부터
      if(l===n+1){ //4
        let tmp=''; //부분집합들 담는 공간 
        for(i=1;i<=n;i++){
          if(ch[i]===1) tmp+=(i+' '); //체크배열 원소가1 이면 포함
        }
        if(tmp.length>0) answer.push(tmp.trim()); //trim은 양쪽 공백문자를 제거
      }else{
        ch[l]=1; //포함할 원소
        dfs(l+1);
        ch[l]=0; //포함안할 원소
        dfs(l+1);
      }
    }
    dfs(1);
    return answer;
  }
  console.log(solution(3));