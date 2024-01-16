const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const videoRouter = require('./routes/video.router');
const projectRouter = require('./routes/project.router')
const phraseRouter = require('./routes/phrase.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://phrase-maker.onrender.com');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
//  });

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/video', videoRouter);
app.use('/api/project', projectRouter)
app.use('/api/phrase', phraseRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
