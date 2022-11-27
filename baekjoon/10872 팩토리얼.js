// const fs = require('fs');
// const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// console.log()


function fac(f){
    if(f===0 || f===1) return 1;
    // if(f===1) return 1;
    // console.log(f);
    return f*fac(f-1);
}
fac(10)