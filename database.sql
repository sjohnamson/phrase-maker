-- create a postgres database named:
-- movement_phraser

CREATE TABLE "user" (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100),
    current_project varchar(100) 
);

CREATE TABLE project (
    id serial PRIMARY KEY,
    title varchar(50) UNIQUE
);

CREATE TABLE tag (
    id serial PRIMARY KEY,
    tag text 
);

CREATE TABLE clip (
    id serial PRIMARY KEY,
    title varchar(100),
    public_id varchar(100),
    description varchar(1000),
    creator varchar(50),
    upperlowerboth varchar(50),
    abstractconcreteobject varchar(50),
    unison boolean,
    beats integer,
    path varchar(150),
    project_id integer REFERENCES project(id),
    speed integer
);

CREATE TABLE phrase (
    id serial PRIMARY KEY,
    title varchar(100),
    public_id varchar(100),
    description varchar(1000),
    project_id integer REFERENCES project(id)
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

