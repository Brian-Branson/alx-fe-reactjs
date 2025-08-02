export async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
  if (!response.ok) {
    throw new Error(`GitHub user not found: ${username}`);
  }
  const data = await response.json();
  return data;
}