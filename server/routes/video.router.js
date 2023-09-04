const express = require("express");
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary-config');

// const {
//   rejectUnauthenticated,
// } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
// const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');



router.get("/", (req, res) => {
  res.send('in get!!')
  console.log('in res get!)')
});

router.post("/", cloudinaryUpload.single("video"), async (req, res) => {
    console.log('upload', cloudinaryUpload)
  return res.json({ video: req.file.path });
});

module.exports = router;