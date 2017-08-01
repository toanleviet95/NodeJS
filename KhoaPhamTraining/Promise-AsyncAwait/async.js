// Bất đồng bộ: Câu lệnh trước chưa chạy xong đã chạy câu lệnh thứ hai
// Chờ một hành động trong vòng 1 giây
setTimeout(() => {
    console.log('Delay');
}, 1000);

console.log('Result');