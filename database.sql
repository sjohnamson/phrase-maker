
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100)
);

CREATE TABLE tag (
    id serial PRIMARY KEY,
    tag varchar(30)
);

CREATE TABLE clip (
    id serial PRIMARY KEY,
    title varchar(100),
    description varchar(1000),
    path varchar(150),
    speed integer,
    project_id integer REFERENCES project(id)
);

CREATE TABLE phrase (
    id serial PRIMARY KEY,
    title varchar(100),
    description varchar(1000),
    path varchar(150),
    project_id integer REFERENCES project(id)
);

CREATE TABLE project (
    id serial PRIMARY KEY,
    title varchar(50)
);

CREATE TABLE user_project (
    id serial PRIMARY KEY,
    user_id integer REFERENCES "user"(id),
    project_id integer REFERENCES project(id)
);

CREATE TABLE clip_phrase (
    id serial PRIMARY KEY,
    index integer,
    clip_id integer REFERENCES clip(id),
    phrase_id integer REFERENCES phrase(id),
    speed integer
);

CREATE TABLE clip_tag (
    id serial PRIMARY KEY,
    clip_id integer REFERENCES clip(id),
    tag_id integer REFERENCES tag(id)
);

