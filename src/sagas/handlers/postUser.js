import { call, put, takeLatest } from "redux-saga/effects";
import postUser from "../requests/postUser";

function* handlePostUser(newData) {
  try {
    const users = yield call(postUser, newData);

    yield put({ type: "POST_USER_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "POST_USER_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("POST_USER_REQUESTED", handlePostUser);
}

export default watcherUserSaga;
