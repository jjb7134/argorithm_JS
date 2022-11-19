
        // function solution(v) {
        //     let answer;

        //     function dfs(v) {
        //         if (v > 7) return; //7까지만 돌자
        //         else {
        //             console.log(v); //작성위치에 따라 선,중,후순위 결정
        //             dfs(v * 2); //왼쪽 노드
        //             dfs(v * 2 + 1); //오른 노드
        //         }
        //     }
        //     dfs(v);

        //     return answer;
        // }
        solution(1);
        // function solution(v){
        //     let answer;

        //     function dfs(v){
        //         if(v>7) return;
        //         else{
        //             console.log(v) //전위순회 출력 위치
        //             dfs(v*2); //좌측노드
        //                             //중위순회 출력 위치
        //             dfs(v*2+1); //우측노드
        //                             //후위순회 출력위치
        //         }

        //     }

        //     dfs(v);
        //     return answer;
        // }
        function solution(v){
            let answer;

            function dfs(v){
                if(v>7) return;
                else{
                    dfs(v*2);
                    dfs(v*2+1);
                    console.log(v);
                } 
            }

            dfs(v);
            return answer;
        }
   