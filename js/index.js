// giai quyet bai toan tinh tong hai so su dung ham
// nhiem vu: tinh tong 2 so
// ten ham: total
// xac dinh dau vao: 2 tham so a,b
// xac dinh dau ra: tra ve tong cua 2 so truyen vao

function total(a, b) {
    // khoi lenh thuc thi cua ham
    let sum = a + b;
    console.log(`tong cua 2 so ${a} va ${b} la ${sum}`);
}
total(3, 5);

// nhiem vu: tinh tong tu a den b
// ten ham : sumNumbers
// dau vao: 2 tham so a,b
// dau ra: tong cac so nam trong khoang a,b
function sumNumbers(a, b) {
    sum = 0;
    for (let i = a; i <= b; i++) { sum += i }
    console.log("tong cua tu a den b la" + sum);
}
sumNumbers(1, 2);

// cach khai bao ham tong quat
// function tenHam(a, b, c) {
//     // phan than cua ham
//     // tra ve gia tri
//     console.log(a);
//     return;
// }
// pham vi cua bien
// var
// let va const
// pass by value
// ham increment de tan gia tri cua tham so n len 1 don vi
function increment(n) {
    n++;
    console.log("n inside the method is " + n);
}
function main() {
    var x = 1;
    console.log("Before the call, x is " + x);
    increment(x);
    console.log("After the call, x is " + x);
}
main();

// vidu khac cua pass by value
let m = 1; 
// khai bao bien m = 1;
// dunh nghia 1 ham nhan vao 1 tham so co ten la  va tang a them 2 don vi

function changeM(m) {
    m = m + 2;
}
// goi ham va truyen vao gia rti cua bien m
changeM(m);
console.log(m);


function changeArr0(arr) {
    arr [0]++;
}
let arr1 = [1, 2, 3, 4];
changeArr0(arr1);
console.log(arr1);