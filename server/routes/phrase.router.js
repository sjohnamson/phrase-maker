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

// posts new phrases into cloudinary and the database 
router.post("/", rejectUnauthenticated, async (req, res) => {
// assign variables to phrase and user info from post
    const phraseTitle = req.body.title; 
    const phraseDescription = req.body.description;
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
// select user's current project
const sqlCurrentProject = `
SELECT current_project
WHERE id = $1
`
        const sqlAddPhrase = `
        INSERT INTO phrase ("public_id", "title", "description") 
        VALUES ($1, $2, $3);`
        await connection.query(sqlAddPhrase, [phraseID, phraseTitle, phraseDescription]);

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