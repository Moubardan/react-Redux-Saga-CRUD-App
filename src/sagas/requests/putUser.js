import axios from "axios";

async function putUser({ id, newData }) {
  try {
    const response = await axios.put(
      `http://localhost:8000/users/${id}`,
      newData
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export default putUser;
