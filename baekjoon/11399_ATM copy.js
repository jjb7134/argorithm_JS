
        function solution(p, list) {
            let answer = 0;
            let sum = 0;

            for (let i of list.sort((a, b) => a - b)) {//[1,2,3,3,4]
                sum += i;
                answer += sum;
            }
            //답안 예시:3+(3+1)+(3+1+4)+(3+1+4+3)+(3+1+4+3+2)
            // return answer;
            console.log(answer);
        }
     
        const readline = require("readline");
        const rl = readline.createInterface({ 
            input: process.stdin, 
            output: process.stdout, 
        }); 
        
        let input = []; 
        rl.on("line", function (line) { 
            //여러줄 입력 
            input.push(line) 
        }).on("close", function () { 
            let n = parseInt(input[0]); 
            //띄어쓰기 기준으로 배열에 넣기 
            let list = input[1].split(' ').map((el) => parseInt(el)); 
            solution(n, list); process.exit(); 
        });

