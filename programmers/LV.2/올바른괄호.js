function sort(s) {
    // let split=s.split('');
    // let left=0,right=0;

    // for(let i=0; i<split.length; i++){
    //     console.log(split[i])
    //     if(split[0]===')' || split[split.length-1]==='(') return false;
    //     if(split[i]==='(') left++;
    //     else if(split[i]===')') right++;
    // }
    // // console.log(left,right)

    // return left===right ? 'true' : 'false';
    let stack = 0;
    for(let i=0; i<s.length; i++){
        stack+= s[i]==='(' ? 1 : -1;
    }
    return stack===0 ? true : false;
}
sort("()()")
// let s="()()";
// console.log(s.split(''),s)