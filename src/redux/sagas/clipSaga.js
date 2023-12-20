import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getClips() {
    const clips = yield axios.get('/api/video')

    yield put ({
        type: 'SET_CLIPS',
        payload: clips.data
    })
}

function* addClipSaga(action) {
    try {
        const headers = {
            'content-type': 'multipart/form-data'
        }
        const videoForm = new FormData();

        videoForm.append('video', action.payload.newClipFile);
        videoForm.append('title', action.payload.newClipTitle);
        videoForm.append('description', action.payload.newClipDescription);
        videoForm.append('tags', [action.payload.newClipTags])

    
        yield axios({
            method: 'POST',
            url: '/api/video', 
            headers: headers,
            data: videoForm
        })

        yield put({
            type: 'GET_CLIPS'
        })
    }
    catch (error) {
        console.log('Error with adding clip saga:', error);
    }
}

function* deleteClipSaga(action) {
    try {
        const clipId = action.payload.id;

        yield axios({
            method: 'UPDATE',
            url: `/api/video/${clipId}`,
        })

        yield put({
            type: 'GET_CLIPS'
        })
    }
    catch (error) {
        console.log('Error with transforming clip saga:', error);
    }
}

function* transformClipSaga(action) {
    try {
        const clipId = action.payload.id;

        yield axios({
            method: 'DELETE',
            url: `/api/video/${clipId}`,
        })

        yield put({
            type: 'GET_CLIPS'
        })
    }
    catch (error) {
        console.log('Error with deleting clip saga:', error);
    }
}



function* clipSaga() {
    yield takeLatest('GET_CLIPS', getClips),
    yield takeLatest('ADD_CLIP', addClipSaga);
    yield takeLatest('DELETE_CLIP', deleteClipSaga);
    yield takeLatest('TRANSFORM_CLIP', transformClipSaga);
}

export default clipSaga