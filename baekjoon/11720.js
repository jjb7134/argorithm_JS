function solution(arr) {
    let num = arr.toString().split('');
    let sum = 0;

    for (x of num) {
        sum += parseInt(x);
    }

    return sum;
}
let arr = 10987654321;
console.log(solution(arr));