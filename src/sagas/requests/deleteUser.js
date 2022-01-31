import axios from "axios";

async function postUser(id) {
  try {
    const response = await axios.delete(`http://localhost:8000/users/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export default postUser;
