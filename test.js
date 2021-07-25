const o1={m:1}
const o2=o1
o1.m=2
console.log(o2.m)


let o3={m:1}
let o4=o3
// o3={m:2}
// console.log(o4.m,o3.m)
function fn(o4){
    // o4.m=3
    o4={m:3}
}
fn(o4)
console.log(o4.m,o3.m)