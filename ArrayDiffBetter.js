// 6 kyu
// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts 
// one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping 
// their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

/** NEW SOLUTION **/
let arrayDiff = (a, b) => a.filter(e => !b.includes(e));


/********* OLD SOLUTION **********/
//** Don't need the if statement we can just return !b.includes(e) **/
//** for each iteration in .filter() **/
// function arrayDiff(a, b) {
//     let result = a.filter( (e) => {
//         if(!b.includes(e)) {
//             return e;
//         }
//     });
//     return result;
// }