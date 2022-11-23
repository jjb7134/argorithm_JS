function solution(arr){
    //   스택으로 문제를 해결하자
    //     반복 돌려서 중복문자 제외하고 스택에 push 해주자.
        let stack=[];
        let pointer=0;
        
        for(let i=0; i<arr.length; i++){
            if(arr[pointer]!==arr[i+1]){
                stack.push(arr[pointer]);
                pointer=i+1;
            } 
            // console.log(pointer,stack);
        }
        return stack;
    }

    // 입출력 예
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]