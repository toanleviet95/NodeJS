const sequelize = require('sequelize');

const db = new sequelize({
    database: 'sequelize',
    username: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    // define: {
    //     freezeTableName: true
    // }
});

db.authenticate().then(() => console.log('Connect DB success')).catch(err => console.log(err.message));

const user = db.define('user', {
    username: sequelize.STRING,
    password: sequelize.STRING
});

db.sync();

// user.create({
//     username: 'ti',
//     password: 'ti123'
// }).then(user => console.log(user.get({ plain: true })));

// user.bulkCreate([{
//         username: 'tun',
//         password: 'tun123'
//     },
//     {
//         username: 'tan',
//         password: 'tan123'
//     }
// ]).then(arrUser => arrUser.forEach(user => console.log(user.get({ plain: true }))));

// user.destroy({
//     where: {
//         id: 4
//     }
// }).then(row => console.log(row));

// user.update({
//     password: 'ti444'
// }, {
//     where: { id: 2 }
// }).then(row => console.log(row));

// user.findOne({ raw: true }).then(user => console.log(user));
// user.findAll({ raw: true }).then(arrUser => arrUser.forEach(user => console.log(user)));

user.findById(5, { raw: true }).then(user => console.log(user));