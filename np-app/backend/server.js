/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const cors = require('cors')
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const tipsCtrl = require('./controllers/tips');
const usersCtrl = require('./controllers/users');

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

// // ---------------------------------------------------------------
// const sessionConfig = {
//     secret: 'thisshouldbeabettersecret!',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// }

/* Middleware (app.use)
--------------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))
// app.use(session(sessionConfig))
// app.use(passport.session());
// app.use(passport.initialize());
// // allows for persistent login sessions
// app.use(passport.session());
// // use local strategy for authentication which is built into passport
// passport.use(new LocalStrategy(User.authenticate()));
// // serialize (store) and deserialize (unstore) user to keep authentication state across requests
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


/* Mount routes
--------------------------------------------------------------- */
// When a GET request is sent to `/seed`, the tips collection is seeded
app.get('/api/seed', function (req, res) {
    // Remove any existing tips
    db.Tip.deleteMany({})
        .then(removedTips => {
            console.log(`Removed ${removedTips.length} tips from the database`)

            // Seed the tips collection with the seed data
            db.Tip.insertMany(db.seedTips)
                .then(addedTips => {
                    console.log(`Added ${addedTips.length} tips to the database`)
                    res.json(addedTips)
                })
        })
});

// // This tells our app to look at the controllers files
// // to handle all routes that begin with `localhost:3000/tips` or `localhost:3000/api/users`
app.use('/api/tips', tipsCtrl)
app.use('/api/users', usersCtrl)



// other route
app.get('*', (req, res) => {
    res.send("This is the other route");
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});