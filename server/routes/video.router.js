const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const cloudinaryUpload = require("../modules/cloudinary-config");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", async (req, res) => {
  const userCurrent = req.user.current_project;

  const connection = await pool.connect();

  try {
    await connection.query("BEGIN");

    const sqlProjectTitle = `
      SELECT project_id 
      FROM "user" 
      JOIN "user_project" 
      ON "user".id = "user_project"."user_id"
      JOIN project
      ON "user_project".project_id = project.id
      WHERE project.title = $1
      ;`;
    const reply = await connection.query(sqlProjectTitle, [userCurrent]);
    const projectID = reply.rows[0].project_id;
    const sqlQuery = `
      SELECT clip.id, clip.title, clip.description, clip.creator, clip.abstractconcreteobject, clip.upperlowerboth, clip.unison, clip.beats, clip.public_id, tag.tag
      FROM clip
      JOIN clip_tag
      ON clip.id = clip_tag.clip_id
      JOIN tag
      ON clip_tag.tag_id = tag.id
      WHERE project_id = $1
      ;`;
    // Save the result so we can get the returned value
    const result = await connection.query(sqlQuery, [projectID]);
    await connection.query("COMMIT");
    res.send(result.rows);
  } catch (error) {
    await connection.query("ROLLBACK");
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

// Posts clips from AddVideoForm into cloudinary and the database
router.post(
  "/",
  rejectUnauthenticated,
  cloudinaryUpload.single("video"),
  async (req, res) => {
    const clipInfo = [
      req.file.path,
      req.file.filename,
      req.body.title,
      req.body.description,
      req.body.creator,
      req.body.beats,
      req.body.ulb,
      req.body.aco,
      req.body.unison,
    ];
    const currentProject = req.user.current_project;
    const clipTags = [req.body.tags];
    console.log('in post', clipInfo)

    const connection = await pool.connect();
    try {
      await connection.query("BEGIN");

      const sqlProjectId = `
      SELECT project_id 
      FROM project 
      JOIN "user_project" 
      ON project.id = "user_project".project_id
      WHERE project.title = $1
      ;`;
      const reply = await connection.query(sqlProjectId, [currentProject]);
      const currentID = reply.rows[0].project_id;
      const sqlAddClip = `
      INSERT INTO clip ("path", "public_id", "title", "description", "creator", "beats", "upperlowerboth", "abstractconcreteobject", "unison", "project_id") 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
      ;`;
      // Save the result so we can get the returned value
      const result = await connection.query(sqlAddClip, [
        clipInfo[0],
        clipInfo[1],
        clipInfo[2],
        clipInfo[3],
        clipInfo[4],
        clipInfo[5],
        clipInfo[6],
        clipInfo[7],
        clipInfo[8],
        currentID,
      ]);
      // Get the id from the result - will have 1 row with the id
      const clipId = result.rows[0].id;
      const sqlAddTags = `
      INSERT INTO tag ("tag")
      SELECT unnest(ARRAY[$1]::TEXT[])
      RETURNING id
      ;`;
      // Save the result so we can get the returned value
      const response = await connection.query(sqlAddTags, clipTags);
      // Get the id from the result - will have 1 row with the id
      const tagId = response.rows[0].id;
      const sqlAddIds = `
      INSERT INTO clip_tag (clip_id, tag_id)
      VALUES ($1, $2)
      ;`;
      await connection.query(sqlAddIds, [clipId, tagId]);
      await connection.query("COMMIT");
      res.sendStatus(200);
    } catch (error) {
      await connection.query("ROLLBACK");
      console.log(`Transaction Error - Rolling back new account`, error);
      res.sendStatus(500);
    } finally {
      connection.release();
    }
  }
);

router.delete(
  "/delete/:id",
  rejectUnauthenticated,
  async (req, res) => {
    const clipId = [parseInt(req.params.id, 10)];
    const { public_id: cloudinaryPublicId } = req.body;
    console.log("in delete:", clipId, cloudinaryPublicId);
    const connection = await pool.connect();
    try {
      if (cloudinaryPublicId) {
        await cloudinary.uploader.destroy(cloudinaryPublicId);
      }

      await connection.query("BEGIN");

      const sqlDeleteTags = `
      DELETE FROM clip_tag 
      WHERE clip_id = $1
      ;`;
      await connection.query(sqlDeleteTags, clipId);

      const sqlDeleteClip = `
      DELETE FROM clip 
      WHERE id = $1 
      ;`;
      await connection.query(sqlDeleteClip, clipId);

      await connection.query("COMMIT");
      res.sendStatus(200);
    } catch (error) {
      await connection.query("ROLLBACK");
      console.log(`Transaction Error - Rolling back new account`, error);
      res.sendStatus(500);
    } finally {
      connection.release();
    }
  }
);

// PUT route to make changes to title, descripotion and tags of clip
router.put("/:id", rejectUnauthenticated, async (req, res) => {
  const clipInfo = [
    req.params.id,
    req.body.title,
    req.body.description,
    req.body.creator,
    req.body.abstractconcreteobject,
    req.body.upperlowerboth,
    req.body.unison,
    req.body.beats,
  ];
  console.log("clip in put", clipInfo);

  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const sqlUpdate = `
      UPDATE clip
      SET 
      title = $2, 
      description = $3, 
      creator = $4, 
      abstractconcreteobject = $5, 
      upperlowerboth = $6, 
      unison = $7, 
      beats = $8
      WHERE id = $1
      ;`;
    await connection.query(sqlUpdate, clipInfo);
    // const sqlDeleteTags = `
    //   DELETE FROM clip_tag
    //   WHERE clip_id = $1
    //   `
    // // Save the result so we can get the returned value
    // await connection.query(sqlDeleteTags, clipId);
    await connection.query("COMMIT");
    res.sendStatus(200);
  } catch (error) {
    await connection.query("ROLLBACK");
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

module.exports = router;
