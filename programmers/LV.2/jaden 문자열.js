function solution(s) {
    let answer='';
    let arr=s.split(' ');
    // arr[0].toUpperCase();
    // console.log(arr)

    for(let i=0; i<arr.length; i++){
        let a=arr[i].toLowerCase().charAt(0).toUpperCase();
        console.log(a)
    }
    
    // return answer;
}
solution("3people unFollowed me");