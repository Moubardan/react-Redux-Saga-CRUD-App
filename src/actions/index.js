export const getUsers = () => {
  return {
    type: "GET_USERS_REQUESTED",
  };
};

export const postUser = (newData) => {
  return {
    type: "POST_USER_REQUESTED",
    payload: newData,
  };
};

export const putUser = (id, newData) => {
  return {
    type: "PUT_USER_REQUESTED",
    payload: { id, newData },
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER_REQUESTED",
    payload: id,
  };
};
