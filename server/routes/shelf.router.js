const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {

  console.log(`req.user is --->`, req.user)
  const queryText = `
  
    SELECT * FROM "item"; 
  `;
  // Can you enter this realm?
  if (req.isAuthenticated) {
    // Ready for a dive?
    pool
      .query(queryText)
      .then(results => {
        res.send(results.rows)
      })
      .catch(
        error => {
          console.log(`Hey Capt, we got an... ${error}`)
        })
  } else {
    // FORBIDDEN SIR!
    res.sendStatus(403)
  }
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

  // queryText is a SQL statement to
  // insert a new item in the items table
  const queryText = `
  INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3);
  `;

  console.log('User id adding item is',req.user.id);
  // pool query only runs if user is authenticated (logged in)
  if (req.isAuthenticated) {
    pool
      .query(queryText, [req.body.description, req.body.image_url, req.user.id]) // send posted item along with user_id
      .then(results => {
        res.sendStatus(201);
      }) // end .then
      .catch(err => {
        console.error(`Error in item post: ${err}`);
        res.sendStatus(500);
      })
  } else {
    // Forbidden
    res.sendStatus(403);
  }
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
