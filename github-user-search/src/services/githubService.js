import axios from "axios";

export async function fetchUserData(username) {
  const response = await axios.get(
    `https://api.github.com/users/${encodeURIComponent(username)}`
  );
  return response.data;
}

/**
 * Advanced user search using GitHub Search API.
 * @param {Object} criteria - Search criteria (e.g., { location: 'Lagos', repos: '>10', language: 'JavaScript' })
 * @returns {Promise<Object>} - Search results
 */
export async function searchUsers(criteria = {}) {
  let queryParts = [];

  if (criteria.username) {
    queryParts.push(`${criteria.username} in:login`);
  }
  if (criteria.location) {
    queryParts.push(`location:${criteria.location}`);
  }
  if (criteria.repos) {
    queryParts.push(`repos:${criteria.repos}`);
  }
  if (criteria.language) {
    queryParts.push(`language:${criteria.language}`);
  }

  const query = queryParts.join(' ');
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  return response.data;
}
