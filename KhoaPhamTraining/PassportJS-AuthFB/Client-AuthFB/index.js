const express = require('express');
const passport = require('passport');
const passportfbStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
// const db = require('./db.js');
const app = new express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'toanlv'
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Hello'));
app.get('/login', (req, res) => res.render('login'));
app.get('/auth/fb', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/fb/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
    successRedirect: '/'
}));

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`))

passport.use(new passportfbStrategy({
    clientID: "148123192412078",
    clientSecret: "b93c05b589999563108217da5bd9050b",
    callbackURL: "http://localhost:3000/auth/fb/callback",
    profileFields: ['email', 'gender', 'locale', 'displayName']
}, (accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    db.findOne({ id: profile._json.id }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, user);
        const newUser = new db({
            id: profile._json.id,
            name: profile._json.name,
            email: profile._json.email
        });
        newUser.save((err) => {
            return done(null, newUser)
        });
    })
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.findOne({
        id: id
    }, (err, user) => {
        done(null, user);
    })
});