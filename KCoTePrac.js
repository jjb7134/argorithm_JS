// let arr=["AN","CF"];

// let narr=arr[0].split('');
// console.log(narr);

//각 문자를 반복돌면서 획득한 점수를 선언해주자
//최대값을 출력해주장
//두 유형점수가 같으면 사전빠른순을 출력
function solution(survey, choices) {
    let answer = '';
    let R,T,C,F,J,M,A,N=0;
    let result=[]; //유형중 최대값 담아주는 공간

    for(i=0;i<survey.length;i++){
        let tmp=survey[i].split('');
        if(choices[i]===5) tmp[1]=1;
        console.log(survey[i]);
    }

    // if() survey[0]
    return answer;
}
let survey=["AN", "CF", "MJ", "RT", "NA"];
let choices=[5, 3, 2, 7, 5];


function solution(survey, choices) {
    let answer = '';
    let R=0,T=0,C=0,F=0,J=0,M=0,A=0,N=0;
    let score=[3,2,1,0,1,2,3]; //점수매기는 방법
    let result=[]; //유형중 최대값 담아주는 공간

    for(i=0;i<survey.length;i++){
      
        // let tmp=(survey[i].join(''));
        // console.log(tmp);
      console.log("중간",survey[i].split('')[0]);
      
      //배열안에 한글자를 어떻게 출력할까?
      if(choices[i]===1) survey[i].split('')[0]=score[i];
      if(choices[i]===2) survey[i].split('')[0]=score[i];
      if(choices[i]===3) survey[i].split('')[0]=score[i];
      if(choices[i]===4) survey[i].split('')[0],survey[i].split('')[1]=score[i];
      if(choices[i]===5) survey[i].split('')[1]=score[i];
      if(choices[i]===6) survey[i].split('')[1]=score[i];
      if(choices[i]===7) survey[i].split('')[1]=score[i];
    }
  // console.log(R,T,C,F,J,M,A,N);

    return answer;
}
let survey=["AN", "CF", "MJ", "RT", "NA"];
let choices=[5, 3, 2, 7, 5];
console.log("정답",solution(survey,choices));