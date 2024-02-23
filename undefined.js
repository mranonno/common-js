/***** 8 way to get undefined *****/

// 1. variable that is not initialize
// 2. function with no return
// 3. parameter not will be passed
// 4. when don't return has something at return right side
// 5. when called property are missing on object
// 6. when called array index is out of array range
// 7. deleting an element inside an array
// 8. directly set a value as a undefined
let first;
// console.log(first);
function second(a,b) {
    const sum = a + b;
}
const result = second();
// console.log(result);

function third(a, b, c, d) {
    const sum = a + b + c + d;
    console.log(a,b,c,d);
    
}
// third(1,2);
function fourth(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
// console.log(fourth(3,-5))
const fifth = { name: 'ad', id: 2 }
// console.log(fifth.age);
const sixth = [2, 4, 7, 8, 3, 2];
// console.log(sixth[3],sixth[10]);
const seventh = [2, 4, 7, 8, 3, 2];
delete seventh[2];
// console.log(seventh[2]);
const eight = undefined;
// console.log(eight);

// when any value has none the we will set as a null
const object = { name: 'sf', model: null };
// console.log(typeof object.model);







