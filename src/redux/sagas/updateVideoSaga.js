import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateClipSaga(action) {
    try {
        const clipUpdate = {
            clipId: action.payload.id,
            clipTitle: action.payload.newTitle,
            clipDescription: action.payload.newDescription,
            clipCreator: action.payload.newCreator,
            clipBeats: action.payload.newBeats,
            clipULB: action.payload.newULB,
            clipACO: action.payload.newAbstract,
            clipUnison: action.payload.newUnison,
            clipTags: [action.payload.newClipTags]
        }

        yield axios({
            method: 'put',
            url: `/api/video/${clipUpdate}`,
        })

        yield put({
            type: 'GET_CLIPS'
        })
    }
    catch (error) {
        console.log('Error with updating clip saga:', error);
    }
}

function* updateVideoSaga() {
    yield takeLatest('UPDATE_CLIP', updateClipSaga);
}

export default updateVideoSaga