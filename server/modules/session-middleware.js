
const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

const serverSessionSecret = () => {
  if (
    !process.env.REACT_APP_SERVER_SESSION_SECRET ||
    process.env.REACT_APP_SERVER_SESSION_SECRET.length < 8 ||
    process.env.REACT_APP_SERVER_SESSION_SECRET === warnings.exampleBadSecret
  ) {
    // Warning if user doesn't have a good secret
    console.log(warnings.badSecret);
  }

  return process.env.REACT_APP_SERVER_SESSION_SECRET;
};

module.exports = cookieSession({
  secret: serverSessionSecret() || 'secret', 
  key: 'user', 
  resave: 'false',
  saveUninitialized: false,
  maxAge: 1000 * 60 * 60 * 24 * 7, // Set to 7 days - 1000ms * 60 seconds * 60 minutes * 24 hours * 7 days
  secure: false,
});
