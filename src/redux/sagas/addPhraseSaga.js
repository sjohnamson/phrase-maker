import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addNewPhraseSaga(action) {
    try {

        const phraseToAdd = action.payload;

        yield axios({
            method: 'POST',
            url: '/api/phrase',
            data: phraseToAdd
        })

        yield put({
            type: 'GET_PHRASES'
        })
    }
    catch (error) {
        console.log('Error with adding phrase saga:', error);
    }
}

function* addPhraseSaga() {
    yield takeLatest('ADD_PHRASE', addNewPhraseSaga);
}

export default addPhraseSaga