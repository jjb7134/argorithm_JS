function isPrime(n) { //소수 판별 함수
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function dfs(set, arr, fixed) {
    if (arr.length >= 1) { //요소가 적어도 1개이상일때
        for (let i = 0; i < arr.length; i++) {
            let newFixed = fixed + arr[i]; //문자열로 감싸줌
            let copyArr = [...arr];  // 그 문자열을 배열안에 담음
            copyArr.splice(i, 1) //배열로 각각 쪼개줌

            if (isPrime(parseInt(newFixed))) { //조합된 수가 소수면 담아주자
                set.add(parseInt(newFixed));
            }
            dfs(set, copyArr, newFixed);
            console.log(`보고싶은 ${dfs}`);
        }
    }
}


function solution(numbers) {
    let nums = numbers.split(''); //가독성 좋게 미리 선언해주자
    let set = new Set(); //중복된 값 제외하고 담는 메서드

    dfs(set, nums, ''); //순열함수로 수를 조합하자

    return set.size;
}