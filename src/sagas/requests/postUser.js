import axios from "axios";

async function postUser({ payload }) {
  try {
    const response = await axios.post("http://localhost:8000/users", payload);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export default postUser;
