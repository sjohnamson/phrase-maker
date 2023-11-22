import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getClips() {
    const clips = yield axios.get('/api/video')

    yield put ({
        type: 'SET_CLIPS',
        payload: clips.data
    })
}

function* getClipsSaga() {
    yield takeLatest('GET_CLIPS', getClips)
}

export default getClipsSaga