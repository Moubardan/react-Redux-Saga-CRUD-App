import { getUsers } from "./actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { loading } = useSelector((state) => state.users);
  const { error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <div>Users List</div>
      <div>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {users && users.map((user) => <h3 key={user.id}>{user.name}</h3>)}
      </div>
    </>
  );
}

export default App;
