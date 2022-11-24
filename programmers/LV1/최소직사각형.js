// function solution(sizes) {
//     let reduce = sizes.reduce((a,c) => [...a, ...c]);
//     reduce.sort((a,b) => a-b);

//     return reduce[reduce.length-1]*reduce[sizes.length-1];
// }

// 눕힌걸 생각해 가로가 긴면 세로가 짧은면으로 통일시켜주자
function solution(sizes){
    let w=[],h=[];

    for(let i=0; i<sizes.length; i++){
        let max=Math.max((sizes[i][0]),(sizes[i][1]));
        let min=Math.min((sizes[i][0]),(sizes[i][1]));

        w.push(max);
        h.push(min);
    }

    return Math.max(...w) * Math.max(...h);
}