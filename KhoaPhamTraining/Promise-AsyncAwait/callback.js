// let square = (a, b, h) => (a + b) * h / 2;

// Callback Hell: Callback lồng nhau liên tục
let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Khong phai la gia tri number'));
        }
        return callback(undefined, a + b);
    }, 1000);
}

let multiply = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Khong phai la gia tri number'));
        }
        return callback(undefined, a * b);
    }, 1000);
}

let divide = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Khong phai la gia tri number'));
        }
        if (b == 0) return callback(new Error('Chia cho 0'));
        return callback(undefined, a / b);
    }, 1000);
}

let square = (a, b, h, callback) => {
    add(a, b, (err, res) => {
        if (err) return callback(err);
        multiply(res, h, (err, res) => {
            if (err) return callback(err);
            divide(res, 2, (err, res) => {
                if (err) return callback(err);
                callback(undefined, res);
            });
        });
    });
}

square(2, 3, '4', (err, res) => {
    if (err) return console.log(err + '');
    return console.log(res);
});