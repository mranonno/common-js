/*
1. spread operator
2. Array destructure
3. Object destructure
2. filter
3. map
4. find
5. scope 
6. 








*/
/***** 01- Spread operator *****/
const array = [2, 3, 4, 5];
const array2 = [...array];
array2.push(23);
// console.log('first',array);
// console.log('second',array2);

const object = {
    name: 'Anonno',
    age: 26,
    profession: 'student',
    blood: 'O+ (ve)'
}
const object2 = { ...object };
object2.age = 27;
// console.log(object);
// console.log(object2);



/***** 02- Array destructure & rest operator *****/
const numbers = [2, 3, 4, 5, 3, 5, 9];
const [num1, num2, num3, ...restNum] = numbers;
// console.log(num2);
// console.log(restNum);

/***** 03- Object destructure & rest operator *****/
const person = {
    name: 'anonno',
    id: 90,
    section: 'b',
    dept: 'eee'
}
const {id,section,...restProperties} = person;
// console.log(section);
console.log(restProperties);



