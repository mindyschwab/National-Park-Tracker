/* 
---------------------------------------------------------------------------------------
NOTE: All routes on this page are prefixed with `localhost:3000/api/tips`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all tips
router.get('/park/:parkId', function (req, res) {
    db.Tip.find({ nationalParkId: req.params.nationalParkId })
        .then(tips => res.json(tips))
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new tip document using the React form data, 
// and redirects the user to the new tip's show page
router.post('/', (req, res) => {
    db.Tip.create(req.body)
        .then(tip => res.json(tip))
})

// Show Route (GET/Read): Will display an individual tip document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Tip.findById(req.params.id)
        .then(tip => res.json(tip))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified tip document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Tip.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(tip => res.json(tip))
})

// Destroy Route (DELETE/Delete): This route deletes a tip document 
// using the URL parameter (which will always be the tip document's ID)
router.delete('/:id', (req, res) => {
    db.Tip.findByIdAndRemove(req.params.id)
        .then(() => res.send('You deleted tip ' + req.params.id))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
