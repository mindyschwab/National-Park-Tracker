/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const cors = require('cors')

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const tipsCtrl = require('./controllers/tips');

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Middleware (app.use)
--------------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))

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

// // This tells our app to look at the `controllers/tips.js` file 
// // to handle all routes that begin with `localhost:3000/tips`
app.use('/api/tips', tipsCtrl)

// other route
app.get('*', (req, res) => {
    res.send("This is the other route");
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});