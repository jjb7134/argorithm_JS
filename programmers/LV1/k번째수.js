function solution(arr, com){
    // arr.slice(com[0][0]-1, com[0][1]).sort((a,b) => 
    //     a-b);
    let result=[];
    
    for(let i=0; i<com.length; i++){
        result.push(arr.slice(com[i][0]-1, com[i][1]).sort((a,b) => a-b)[com[i][2]-1]);
    }
    
    return result;
}

// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]