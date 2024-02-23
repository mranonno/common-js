for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside',i);

print5();
const print5 = function () {
    console.log('inside',5)
}