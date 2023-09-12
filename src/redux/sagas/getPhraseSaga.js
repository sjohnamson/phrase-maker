import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPhrases() {
    const phrases = yield axios.get('/api/phrase')

    yield put ({
        type: 'SET_PHRASES',
        payload: phrases.data
    })
}

function* getVideoSaga() {
    yield takeLatest('GET_PHRASES', getPhrases)
}

export default getVideoSaga