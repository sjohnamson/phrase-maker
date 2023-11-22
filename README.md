![Phrase Maker](./src/images/PMLogoNoSq.png)

Phrase Maker is an app that allows users to upload and organize collections of short video clips into group projects. They can then place those clips into timelines to create longer video sequences. The app is aimed at choreographers and dancers using it to share and create movement material for dance creation processes, but could also be used by other groups who would like to share small video libraries.

## Screenshots

![Screenshot1](/src/images/PM%20Screen1.png )

![Screenshot2](/src/images/PM%20Screen2.png)

  <div style="display:flex; justify-content:space-between;">
      <img src="/src/images/PM%20Screen1.png" style="width:52%;" alt= Screenshot1>
      <img src="/src/images/PM%20Screen2.png" style="width:46%" alt= Screenshot2>
  </div>

## Installation
1. Create a database named `movement_phraser`,
2. The queries in the `database.sql` file are set up to create all the necessary tables needed to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. In another terminal run `npm run client` 
6. The `npm run client` command will open up a new browser tab for you!

## Features

- Create and Join projects
- Upload video clips to project libraries
- Watch clips and create and edit notes
- Combine video clips together to unique video sequences


## Tech Stack
**Javascript**

**Client:** React, Redux, Material UI

**Server:** Node, Express

**DataBase:** Postgres

**Media Management:** Cloudinary

## Lessons Learned

This app was made in a one week scope followed by a two week sprint as a part of the Prime Digital Academy program. 

This was my first attempt to ccreate an app from the ground up. I learned an immense amount about managing the full scope of a project. In particular this was my first foray into working with video and storing data on the cloud.

## Acknowledgements

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 


## Authors
Sam Johnson 
- [@sjohnamson](https://www.github.com/sjohnamson)