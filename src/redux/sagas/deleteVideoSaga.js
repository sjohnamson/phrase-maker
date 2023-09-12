import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteClipSaga(action) {
    try {
        console.log('in delete clip saga', action.payload)
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

function* deleteVideoSaga() {
    yield takeLatest('DELETE_CLIP', deleteClipSaga);
}

export default deleteVideoSaga