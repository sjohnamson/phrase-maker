import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clips from './clips.reducer';
import updateClip from './edit.reducer';
import currentClip from './clip.reducer';
import phrases from './phrase.reducer';
import processPhrase from './clip-to-phrase.reducer';
import clipsFilter from './clips-filter.reducer';
import hasMore from './has-more.reducer';

// rootReducer is the primary reducer for our entire project
// This is imported in index.js as rootSaga'

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clips,
  updateClip,
  currentClip,
  phrases,
  processPhrase,
  clipsFilter,
  hasMore,
});

export default rootReducer;
