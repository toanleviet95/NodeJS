let fs = require('fs');
// let read = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if (err) return reject(new Error(err));
//             return resolve(data);
//         })
//     });
// }

// read('./input.txt').then(res => console.log(res), err => console.log(err + ''));

// Dùng Promise liên tiếp nhau để giải quyết callback hell
// Promise có 2 status là 'pending' và 'resolved'
let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Phai la kieu number'));
            return resolve(a + b);
        }, 1000);
    })
}

// Ví dụ (a + b) + c 
//add(2, 3).then(res => add(res, 4)).then(res => console.log(res)).catch(err => console.log(err + ''));

// Phương thức resolve
// let aResolve = Promise.resolve(add(2, 3));
// aResolve.then(res => console.log(res));

// Phương thức reject
// let aReject = Promise.reject('Loi da xay ra');
// aReject.catch(err => console.log(err));

// Phương thức all => Trả về toàn bộ kết quả của những promise
// Promise.all([add(2, 3), add(3, 4)]).then(res => console.log(res)).catch(err => console.log(err + ''));

// Phương thức race => Trả về kết quả của promise nào xong đầu tiên
// Promise.race([add(3, 4), add(1, 2)]).then(res => console.log(res)).catch(err => console.log(err + ''));