import { useState } from 'react';

const fetchUserData = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error();
  return await res.json();
};

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
    if (onSearch) onSearch(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-7">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-1/2 max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && !loading && !error && (
        <div className="flex items-center gap-4 mt-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-lg font-bold">{user.name || user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
