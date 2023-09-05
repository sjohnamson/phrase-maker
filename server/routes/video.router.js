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
  const sqlQuery = `SELECT * FROM clip`

  pool.query(sqlQuery)
  .then(result => {
    console.log('result in video get', result)
    res.send(result.rows)
  })
  .catch(err => {
    res.sendStatus(504)
  })
 
  console.log('in res get!)')
});

router.post("/", cloudinaryUpload.single("video"), async (req, res) => {
  console.log('sent to cloudinary: ', req.file)

  const clipPath = [req.file.path];
  const sqlQuery = `INSERT into clip ("path") VALUES ($1);`

  pool.query(sqlQuery, clipPath)
    .then(result => {
      console.log('added clip to database');
    })
    .catch(err => {
      res.sendStatus(504)
    })
  return res.json({ video: req.file.path });


});


module.exports = router;