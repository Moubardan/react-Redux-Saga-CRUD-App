import { call, put, takeLatest } from "redux-saga/effects";
import putUser from "../requests/putUser";

function* handlePutUser({ payload }) {
  const { id, newData } = payload;
  try {
    const users = yield call(putUser, { id, newData });

    yield put({ type: "PUT_USER_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "PUT_USER_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("PUT_USER_REQUESTED", handlePutUser);
}

export default watcherUserSaga;
