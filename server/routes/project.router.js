const express = require("express");
const router = express.Router();
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// posts new projects into the database and adds project and user ids to the user_project database
router.post("/", rejectUnauthenticated, async (req, res) => {
    console.log('in project post req.body:', req.body.title)
    console.log('in project post req.user:', req.user.id)

    const newProject = req.body.title;
    const userId = req.user.id;

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const sqlAddProject = `
            INSERT INTO project ("title") 
            VALUES ($1) RETURNING id;
            `
        // Save the result so we can get the returned value
        const result = await connection.query(sqlAddProject, [newProject]);
        // Get the id from the result - will have 1 row with the id 
        const projectId = result.rows[0].id;
        // create new row in user_project connecting user to project
        const sqlProjectUser = `
            INSERT INTO user_project ("user_id", "project_id")
            VALUES ($1, $2)
            `
        await connection.query(sqlProjectUser, [userId, projectId]);

        const sqlCurrentProject = `
            UPDATE "user" 
            SET current_project = $2
            WHERE id = $1
            `
        await connection.query(sqlCurrentProject, [userId, newProject]);
        // Get the id from the result - will have 1 row with the id 
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

//   PUT route to add an existing project to a user
router.put("/:project", rejectUnauthenticated, async (req, res) => {

    const joinProject = req.params.project;
    const userId = req.user.id;

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const sqlJoinProject = `
            INSERT INTO user_project (user_id, project_id)
            SELECT $1, id   
            FROM project 
            WHERE title = $2;
        `
        await connection.query(sqlJoinProject, [userId, joinProject]);

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