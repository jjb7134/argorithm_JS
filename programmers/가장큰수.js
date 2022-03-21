function solution(numbers){
    let answer=numbers.map(c => c+'').sort((a,b)=> (b+a)-(a+b)).join('');
    // 배열의 숫자들을 문자로 바꿔주고 내림차순으로 정렬해주고 문자열로 병합
    return answer;
}