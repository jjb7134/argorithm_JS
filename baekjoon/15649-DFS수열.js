// const input = [4, 2];
// const N = input.shift();
// const M = input.shift();

// // 탐색 노드 배열 생성
// const visited = new Array(N);
// // 결과
// let output = [];
// // 최종 결과
// let result = '';

// function dfs(cnt) {
//     // m까지 돌면 종료조건
//   if (cnt === M) {
//     result += `${output.join(' ')}\n`;
//     return;
//   }

//     // 여기서 구해주는거야?
//   for (let i = 0; i < N; i++) {
//       // 탐색된 노드면 i++
//     if (visited[i] === true) continue;
//       // 탐색해야될 노드 true로 바꿔주기
//     visited[i] = true;
//     // 결과 배열에 추가
//     output.push(i + 1);
//     dfs(cnt + 1); // 이거 바로 호출스택쌓이고 dfs로 가네
//       // 탐색 끝났으면 삭제
//     output.pop();
//     visited[i] = false;
//   }
// }

const input = [3, 2];
const N = input.shift(); //3
const M = input.shift(); //2

// 탐색할 노드 배열
const visited = new Array(N);
// 한줄 결과
let sequence = [];
// 전체 결과
let result = "";

const DFS = (count) => {
  // 종료조건
  if (count === M) {
    result += `${sequence.join(" ")}\n`;
    return;
  }

  // 노드 탐색 반복
  for (let i = 0; i < N; i++) {
    // new Array에 기본 요소들은 false
    // 탐색완료 노드는 continue
    if (visited[i] === true) continue;
    // 현재 노드를 탐색완료로 전환
    visited[i] = true;
    // 결과에 넣어주자
    sequence.push(i + 1);
    // 재귀 호출
    DFS(count + 1);
    // 콜스택 처리되고 탐색완료 노드 지워주기
    sequence.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(result.trim());
