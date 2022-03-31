console.log("test.js");

let a = 1;
function f1() {
    return function () {
        return a++;
    }
}

export const q = new f1();
console.log(q());
console.log(q());
a = -1;
console.log(q());
console.log(q());

// class myclass {
//     a = 1;
//     constructor() {
//         this.b = 1;
//         return {
//             aa : this.a,
//             qqq : function() {
//                 return this.aa++;
//             },
//             reset : function() {
//                 this.aa = -1;
//             }
//         }
//     }
//
// }
//
// export const w = new myclass();
// //w.a = 2;
// //w.b = 2;
// console.log(w.qqq());
// console.log(w.qqq());
// w.reset();
// console.log(w.qqq());
// console.log(w.qqq());




