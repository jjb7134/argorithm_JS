function solution(answers) {
    var answer = [];
    let n=answers.length;
    let ac=0,bc=0,cc=0; //각 학생 맞은수를 저장하자
    let a=[1,2,3,4,5,1,2,3,4,5];
    let b=
        [2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5];
    let c=[3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5]; //학생들 정답
    
    for(i=0;i<n;i++){ //정답만큼 반복해주면서 학생들과 비교하기
        if(answers[i]===a[i]) ac++;
        if(answers[i]===b[i]) bc++;
        if(answers[i]===c[i]) cc++;
    }
    let max=Math.max(ac,bc,cc);
  if(max===ac) answer.push(1);
  if(max===bc) answer.push(2);
  if(max===cc) answer.push(3);
 
    return answer.sort((a,b)=>a-b);
}
let answers=[1,2,3,4,5];
console.log(solution(answers));

// ===========================================//

function solution(answers) {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let a1c = answers.filter((e,i)=> e === a1[i%a1.length]).length;
    let a2c = answers.filter((e,i)=> e === a2[i%a2.length]).length;
    let a3c = answers.filter((e,i)=> e === a3[i%a3.length]).length;
    let max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}