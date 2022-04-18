function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        //slice(0부터,0전까지 얕은복사)
        let List = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => (a - b));
        answer.push(List[commands[i][2] - 1]);
    }

    return answer;
}