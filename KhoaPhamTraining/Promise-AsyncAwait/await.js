let addPr = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Phai la kieu number'));
            return resolve(a + b);
        }, 1000);
    })
}

// Ví dụ (a + b) + c
// let add = async() => {
//     try {
//         let res = await addPr(3, 4); // await chỉ sử dụng trong async function => chờ cho đến khi promise này trả về
//         let res1 = await addPr(res, 5);
//         console.log(res1);
//     } catch (e) {
//         console.log(e + '');
//     }
// }

// add();

// Ví dụ (a + b) + c có callback function để tái sử dụng handle kết quả trả về
// let add = async(a, b, c, callback) => {
//     try {
//         let temp = await addPr(a, b); // await chỉ sử dụng trong async function => chờ cho đến khi promise này trả về
//         let res = await addPr(temp, c);
//         callback(undefined, res);
//     } catch (e) {
//         callback(e);
//     }
// }

// add(2, 3, 5, (err, res) => {
//     if (err) return console.log(err + '');
//     console.log(res);
// })

// Ví dụ (a + b) + c sử dụng promise để tái sử dụng handle kết quả trả về
let add = async(a, b, c) => {
    try {
        let temp = await addPr(a, b); // await chỉ sử dụng trong async function => chờ cho đến khi promise này trả về
        let res = await addPr(temp, c);
        return Promise.resolve(res);
    } catch (e) {
        return Promise.reject(e);
    }
}

add(2, 3, 5).then(res => console.log(res)).catch(err => console.log(err + ''));