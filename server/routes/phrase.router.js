const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// retrieves phrase public_ids to display in PhraseCards
router.get("/", (req, res) => {
    const sqlQuery = `
        SELECT phrase.id, phrase.title, phrase.description, phrase.public_id
        FROM phrase
        ;`
  
    pool.query(sqlQuery)
      .then(result => {
        // console.log('result in video get', result)
        res.send(result.rows)
      })
      .catch(err => {
        res.sendStatus(504)
      })

  });

// posts new phrases into cloudinary and the database 
router.post("/", rejectUnauthenticated, async (req, res) => {
    // assign variables to phrase and user info from post
    const phraseTitle = req.body.newPhraseTitle;
    const phraseDescription = req.body.newPhraseDescription;
    console.log('title and desc', req.body)
    const userID = req.user.id

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        // send phrase URL to cloudinary
        const result = await cloudinary.uploader.upload(req.body.phraseURL, {
            resource_type: 'video',
        })
        // set phraseID with result from cloudinary
        const phraseID = result.public_id;
        // select user's current project title
        const sqlCurrentProject = `
            SELECT current_project
            FROM "user"
            WHERE id = $1
            ;`
        const reply = await connection.query(sqlCurrentProject, [userID])
        const currentTitle = reply.rows[0].current_project;
        console.log('currentTitle', currentTitle)
        // get project id using title
        const sqlCurrentID = `
            SELECT id
            FROM project
            WHERE title = $1
            ;`
        const response = await connection.query(sqlCurrentID, [currentTitle])
        const currentID = response.rows[0].id;
        console.log('currentID', currentID)
        // insert new phrase
        const sqlAddPhrase = `
        INSERT INTO phrase ("public_id", "title", "description", "project_id") 
        VALUES ($1, $2, $3, $4);`
        await connection.query(sqlAddPhrase, [phraseID, phraseTitle, phraseDescription, currentID]);

        await connection.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log(`Transaction Error - Rolling back new account`, error);
        res.sendStatus(500);
    } finally {
        connection.release()

    }
});



module.exports = router;