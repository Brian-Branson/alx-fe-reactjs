import axios from "axios";

export async function fetchUserData(username) {
  const response = await axios.get(
    `https://api.github.com/users/${encodeURIComponent(username)}`
  );
  return response.data;
}
