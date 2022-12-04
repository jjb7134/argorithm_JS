function solution(s) {
    let arr=s.split(' ');
    let map=arr.map(Number);
    let min=Math.min(...map);
    let max=Math.max(...map);
    // console.log(min, max)
    
    return `${min} ${max}`;
}
solution("1 2 3 4")