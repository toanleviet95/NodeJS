const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const fs = require('fs');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "toanlv", cookie: { maxAge: 1000 * 60 * 5 } }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.render('index'));
app.route('/login')
    .get((req, res) => res.render('login'))
    .post(passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/loginOK' }));

app.get('/private', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Private page');
    } else {
        res.send('Please login !');
    }
});

app.get('/loginOK', (req, res) => res.send('Login success'));

passport.use(new localStrategy(
    (username, password, done) => {
        fs.readFile('./userDB.json', (err, data) => {
            const db = JSON.parse(data);
            const userRecord = db.find(user => user.usr == username);
            if (userRecord && userRecord.pwd == password) {
                return done(null, userRecord);
            } else {
                return done(null, false);
            }
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user.usr);
});

passport.deserializeUser((name, done) => {
    fs.readFile('./userDB.json', (err, data) => {
        const db = JSON.parse(data);
        const userRecord = db.find(user => user.usr == name);
        if (userRecord) {
            return done(null, userRecord);
        } else {
            return done(null, false);
        }
    })
});

const port = 3000;

app.listen(port, () => console.log(`Listen on port: ${port}`));