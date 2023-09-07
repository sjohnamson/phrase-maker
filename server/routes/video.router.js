const express = require("express");
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary-config');
const pool = require('../modules/pool')

// const {
//   rejectUnauthenticated,
// } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
// const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');



router.get("/", (req, res) => {
  const sqlQuery = `
  SELECT clip.id, clip.title, clip.description, clip.public_id, tag.tag
  FROM clip
  JOIN clip_tag
  ON clip.id = clip_tag.clip_id
  JOIN tag
  ON clip_tag.tag_id = tag.id;`

  pool.query(sqlQuery)
    .then(result => {
      // console.log('result in video get', result)
      res.send(result.rows)
    })
    .catch(err => {
      res.sendStatus(504)
    })

  console.log('in res get!)')
});

// Posts clips from AddVideoForm into cloudinary and the database
router.post("/", cloudinaryUpload.single("video"), async (req, res) => {
  console.log('sent to cloudinary: ', req.file)
  console.log('in clip post req.body:', req.body)

  const clipInfo = [req.file.path, req.file.filename, req.body.title, req.body.description];
  const clipTags = [req.body.tags];

  const connection = await pool.connect()
  try {
    await connection.query('BEGIN');
    const sqlAddClip = `
      INSERT INTO clip ("path", "public_id", "title", "description") 
      VALUES ($1, $2, $3, $4) RETURNING id;`
    // Save the result so we can get the returned value
    const result = await connection.query(sqlAddClip, clipInfo);
    // Get the id from the result - will have 1 row with the id 
    const clipId = result.rows[0].id;
    const sqlAddTags = `
      INSERT INTO tag ("tag")
      SELECT unnest(ARRAY[$1]::TEXT[])
      RETURNING id;`
    // Save the result so we can get the returned value
    const response = await connection.query(sqlAddTags, clipTags);
    // Get the id from the result - will have 1 row with the id 
    const tagId = response.rows[0].id;
    const sqlAddIds = `
      INSERT INTO clip_tag (clip_id, tag_id)
      VALUES ($1, $2);`
    await connection.query(sqlAddIds, [clipId, tagId]);
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

router.delete("/:id", cloudinaryUpload.single("video"), async (req, res) => {
  console.log('sent to cloudinary to delete: ', req.file)
  console.log('in clip post req.params:', req.params)

  const clipId = [req.params.id];

  const connection = await pool.connect()
  try {
    await connection.query('BEGIN');
    const sqlDeleteClip = `
      DELETE FROM clip 
      WHERE id = $1 ;
      `
    // Save the result so we can get the returned value
    await connection.query(sqlDeleteClip, clipId);
    // Get the id from the result - will have 1 row with the id 
    const sqlDeleteTags = `
      DELETE FROM clip_tag 
      WHERE clip_id = $1`
    // Save the result so we can get the returned value
    await connection.query(sqlDeleteTags, clipId);
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