function add(a, b, c) {
    console.log([...arguments]);
    const sum = a + b + c;
    // return sum;
}
add(4, 5, 6, 2, 4);
let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);
