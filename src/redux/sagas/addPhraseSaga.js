import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addNewPhraseSaga(action) {
    try {
        // const headers = {
        //     'content-type': 'multipart/form-data'
        // }
        console.log('in add phrase saga', action.payload)
        // const phraseData = new FormData();

        // phraseData.append('phrase', action.payload.concatenatedPhrase);
        // phraseData.append('title', action.payload.newPhraseTitle);
        // phraseData.append('description', action.payload.newPhraseDescription);

    const phraseToAdd = action.payload;

        yield axios({
            method: 'POST',
            url: '/api/phrase', 
            // headers: headers,
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