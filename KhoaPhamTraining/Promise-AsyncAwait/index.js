if (true) {
    let b = 5; // Biến chỉ có ý nghĩa trong scope khác var
}

let array = [1, 2, 3, 4, 5, 6, 7];

array.forEach(function(e) {
    console.log(e);
});

array.forEach(e => console.log(e));

// Tạo mảng mới từ một mảng đã có
var array2 = array.map(function(e) {
    return e * 2;
});

console.log(array2);

let add = (a, b) => (a + b);
console.log(add(2, 3));

// Function trả về một function
let getFunction = (num) => {
    if (num < 0) return () => console.log('So am');
    return () => console.log('So duong');
}

getFunction(-5)();