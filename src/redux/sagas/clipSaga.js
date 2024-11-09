import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getClips(action) {
  const { page, limit } = action.payload;
  const response = yield call(axios.get, `/api/video?page=${page}&limit=${limit}`);
  console.log('in getclips saga', response)
  yield put({
    type: "SET_CLIPS",
    payload: response.data,
  });
}

function* addClipSaga(action) {
  try {
    const headers = {
      "content-type": "multipart/form-data",
    };
    const videoForm = new FormData();

    videoForm.append("video", action.payload.newFile);
    videoForm.append("title", action.payload.newTitle);
    videoForm.append("description", action.payload.newDescription);
    videoForm.append("creator", action.payload.newCreator);
    videoForm.append("beats", action.payload.newBeats);
    videoForm.append("ulb", action.payload.newULB);
    videoForm.append("aco", action.payload.newAbstract);
    videoForm.append("unison", action.payload.newUnison);
    videoForm.append("tags", [action.payload.newClipTags]);

    yield axios({
      method: "POST",
      url: "/api/video",
      headers: headers,
      data: videoForm,
    });

    yield put({
      type: "GET_CLIPS",
    });
  } catch (error) {
    console.log("Error with adding clip saga:", error);
  }
}

function* deleteClipSaga(action) {
  try {
    const clipId = action.payload.id;
    const clipPublicId = action.payload.public_id;

    yield axios({
      method: "DELETE",
      url: `/api/video/delete/${clipId}`,
      data: { public_id: clipPublicId },
    });

    yield put({
      type: "GET_CLIPS",
    });
  } catch (error) {
    console.log("Error with transforming clip saga:", error);
  }
}

function* transformClipSaga(action) {
  try {
    const clipId = action.payload.id;

    yield axios({
      method: "DELETE",
      url: `/api/video/${clipId}`,
    });

    yield put({
      type: "GET_CLIPS",
    });
  } catch (error) {
    console.log("Error with deleting clip saga:", error);
  }
}

function* clipSaga() {
  yield takeLatest("GET_CLIPS", getClips),
    yield takeLatest("ADD_CLIP", addClipSaga);
  yield takeLatest("DELETE_CLIP", deleteClipSaga);
  yield takeLatest("TRANSFORM_CLIP", transformClipSaga);
}

export default clipSaga;
