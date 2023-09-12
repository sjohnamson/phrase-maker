const express = require("express");
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary-config');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// posts new projects into the database and adds project and user ids to the user_project database
router.post("/", rejectUnauthenticated, cloudinaryUpload.single("video"), async (req, res) => {
    console.log('sent to cloudinary: ', req.file)
    console.log('in phase post req.body:', req.body)

    const phraseInfo = [ req.body.title, req.body.description];

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const sqlAddPhrase = `
        INSERT INTO phrase ("public_id", "title", "description") 
        VALUES ($1, $2, $3);`
        await connection.query(sqlAddPhrase, phraseInfo);

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