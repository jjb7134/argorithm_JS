/* 3.6(일) 프로그래머스 lv.1 신고결과받기를 JS로 푸는중 
너무 어렵고 알고리즘문제 풀이를 어떤식으로 접근해야할지 도무지 
모르겠어서 구글링하였다....ㅎ 다른사람들 풀이를 먼저 참고하고
내가 직접 구현해보려한다ㅠ..
이 글도 블로그에 올려야하지만 그것마저도 공부해야해서 배보다 배꼽이 더
큰 상황이라 급한데로 기록한다
웹사이트를 만들면 재밋게빡치는데 이건 그냥 빡친다...ㅎ
이게 뭔지.. 
훗날 이런찐따같은 시절이 있었네 하면서 웃어넘길 날이 올까ㅠ
 */

// 출처:https://velog.io/@dnjsdud2257/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A0%EA%B3%A0-%EA%B2%B0%EA%B3%BC-%EB%B0%9B%EA%B8%B0-JavaScript

function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const report_list = {} //
    
    
    id_list.map((user)=>{
        report_list[user] = [] //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){ //이용정지 유저
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}