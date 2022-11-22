function solution(nums) {
    let map = new Map();

    for(let num of nums){
        map.set(num,1);
    }

    return map.size>=nums.length/2 ? nums.length/2 :map.size ;

}

// 입출력 예
// nums	result
// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2