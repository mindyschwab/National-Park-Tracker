/* 
---------------------------------------------------------------------------------------
NOTE: All routes on this page are prefixed with `localhost:3000/api/tips`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')

/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    // Check if the 'Authorization' header is present and has the token
    const token = req.headers.authorization;
    if (token) {
        try {
            // Decode the token using the secret key and add the decoded payload to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            // Return an error if the token is invalid
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Return an error if the 'Authorization' header is missing or has the wrong format
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all tips
router.get('/park/:parkId', function (req, res) {
    db.Tip.find({ parkId: req.params.parkId })
        .then(tips => res.json(tips))
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new tip document using the React form data, 
// and redirects the user to the new tip's show page
router.post('/', authMiddleware, (req, res) => {
    db.Tip.create({
        ...req.body,
        // The auth middleware validated the JWT token 
        // and added the decoded payload to the req.user object
        userId: req.user.id
    })
        .then(tip => res.json(tip))
})

// Show Route (GET/Read): Will display an individual tip document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Tip.findById(req.params.id)
        .then(tip => res.json(tip))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified tip document using the form data
router.put('/:id', authMiddleware, async (req, res) => {
    // Check if the user who sent the update request is the same user who created the tip
    const userTip = await db.Tip.findById(req.params.id)
    if (userTip.userId == req.user.id) {
        // If it is the original author, update the tip
        const newTip = await db.Tip.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(newTip)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

// Destroy Route (DELETE/Delete): This route deletes a tip document 
// using the URL parameter (which will always be the tip document's ID)
router.delete('/:id', authMiddleware, async (req, res) => {
    // Check if the user who sent the delete request is the same user who created the tip
    const userTip = await db.Tip.findById(req.params.id)
    if (userTip.userId == req.user.id) {
        const deletedTip = await db.Tip.findByIdAndRemove(req.params.id)
        res.send('You deleted tip ' + deletedTip._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
