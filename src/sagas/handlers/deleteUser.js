import { call, put, takeLatest } from "redux-saga/effects";
import deleteUser from "../requests/deleteUser";

function* handlePostUser({ payload }) {
  try {
    const users = yield call(deleteUser, payload);

    yield put({ type: "DELETE_USER_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "DELETE_USER_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("DELETE_USER_REQUESTED", handlePostUser);
}

export default watcherUserSaga;
