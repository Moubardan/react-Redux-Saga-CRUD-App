import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchUsers";
import postUser from "./handlers/postUser";
import putUser from "./handlers/putUser";
import deleteUser from "./handlers/deleteUser";
export default function* rootSaga() {
  yield all([watcherUserSaga(), postUser(), putUser(), deleteUser()]);
}
