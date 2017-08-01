let fs = require('fs');

// Read file bất đồng bộ
fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) { return console.log(err); }
    console.log(data);
});

// Read file đồng bộ
let data = fs.readFileSync('./input.txt', 'utf8');
console.log('Dong bo: ' + data);

console.log('Ket thuc');