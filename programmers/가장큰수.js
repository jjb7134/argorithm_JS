function solution(numbers) {
    let answer = numbers.map(c => c + '').sort((a, b) => (b + a) - (a + b)).join('');
    // 배열의 숫자들을 문자로 바꿔주기
    // 순서대로 조합(b+a)과 역순조합(a+b)를 비교정렬 
    // 문자열로 병합

    //배열이 0이면 0 아니면 최대값을 반환
    return answer;
}