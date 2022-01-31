import { deleteUser, getUsers, postUser, putUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import React, { forwardRef, useEffect } from "react";
import Edit from "@material-ui/icons/Edit";
import AddBox from "@material-ui/icons/AddBox";
import Search from "@material-ui/icons/Search";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const tableIcons = {
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};
function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  // const { loading } = useSelector((state) => state.users);
  // const { error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    {
      title: "Name",
      field: "name",
      validate: (rowData) => {
        if (!rowData.name) {
          return "Required";
        } else if (rowData.name.length < 3) {
          return "Name should be at least 3 chars";
        }
        return true;
      },
    },

    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (!rowData.email) {
          return "Required";
        } else if (
          !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(
            rowData.email
          )
        ) {
          return "Invalid email format";
        }
        return true;
      },
    },
    {
      title: "Phone",
      field: "phone",
      validate: (rowData) => {
        if (!rowData.phone) {
          return "Required";
        } else if (rowData.phone.length !== 10) {
          return "Invalid phone number, required format '06/07xxxxxxxx'";
        }
        return true;
      },
    },
    {
      title: "City",
      field: "address.city",
      validate: (rowData) => ({
        isValid: true,
        helperText: "optional",
      }),
    },
  ];

  return (
    <>
      <MaterialTable
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              dispatch(postUser(newData));
              resolve();
              setTimeout(() => {
                dispatch(getUsers());
              }, 500);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              dispatch(putUser(oldData.id, newData));
              resolve();
              setTimeout(() => {
                dispatch(getUsers());
              }, 500);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              dispatch(deleteUser(oldData.id));
              resolve();
              setTimeout(() => {
                dispatch(getUsers());
              }, 500);
            }),
        }}
        title="User List"
        data={users}
        columns={columns}
        options={{
          sorting: true,
          search: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
      />
      {/* <div>Users List</div>
      <div>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {users && users.map((user) => <h3 key={user.id}>{user.name}</h3>)}
      </div> */}
    </>
  );
}

export default Home;
