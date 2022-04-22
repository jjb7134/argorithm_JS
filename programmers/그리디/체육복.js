function solution(n, lost, reserve) {
    let answer = 0;
    let tmp = new Array(n).fill(1);//체육복수저장공간

    //없는친구 1씩 빼주기
    for (let i = 0; i < lost.length; i++) { tmp[lost[i] - 1]--; }
    //있는친구 1씩 더해주기
    for (let i = 0; i < reserve.length; i++) { tmp[reserve[i] - 1]++; }
    //수업들을수있는학생 구하기
    for (let i = 0; i < n; i++) {
        if (tmp[i] === 0 && tmp[i + 1] === 2 ||
            tmp[i] === 2 && tmp[i + 1] === 0) {
            tmp[i] = 1;
            tmp[i + 1] = 1;
        }
    }
    //수업들을수있는 학생수만큼 answer에 넣어주기
    for (let x of tmp) {
        if (x >= 1) answer++;
    }

    return answer;
}
let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));