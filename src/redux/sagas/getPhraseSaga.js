import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPhrases() {
    const phrases = yield axios.get('/api/phrase')
    console.log('phrases in saga', phrases)

    yield put ({
        type: 'SET_PHRASES',
        payload: phrases.data
    })
}

function* getPhraseListSaga() {
    yield takeLatest('GET_PHRASES', getPhrases)
}

export default getPhraseListSaga