import axios from "axios";

async function fetchGetUsers() {
  try {
    const response = await axios.get("http://localhost:8000/users");
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export default fetchGetUsers;
