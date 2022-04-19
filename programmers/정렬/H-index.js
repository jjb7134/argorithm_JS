function solution(citations) {
    let answer = 0;
    let n=citations.length; //길어지는걸 방지
    citations.sort((a,b)=>b-a); //내림차순으로 정렬

    for(let i=0;i<n;i++){
        if(i < citations[i]) answer++;
    }

    return answer;
}