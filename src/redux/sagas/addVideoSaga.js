import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addClipSaga(action) {
    try {
        const headers = {
            'content-type': 'multipart/form-data'
        }
        console.log('in add clip saga', action.payload.newClip)
        const videoForm = new FormData();

        videoForm.append('video', action.payload.newClip);
    
        yield axios({
            method: 'POST',
            url: '/api/video', 
            // headers: headers,
            data: {name: 'fred'}
        })

        yield put({
            type: 'GET_CLIPS'
        })
    }
    catch (error) {
        console.log('Error with adding clip saga:', error);
    }
}

function* getClips() {
    const clips = yield axios.get('/api/video')

    yield put ({
        type: 'SET_CLIPS',
        payload: clips.data
    })
}

function* addVideoSaga() {
    yield takeLatest('ADD_CLIP', addClipSaga);
    yield takeLatest('GET_CLIPS', getClips)
}

export default addVideoSaga