import { useState } from 'react';

const fetchUserData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) return null;
  return await res.json();
};

const fetchUserList = async (username, location, minRepos, page = 1) => {
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  const res = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
  );
  if (!res.ok) throw new Error();
  const data = await res.json();

  // Use fetchUserData instead of inlined fetch
  const userDetails = await Promise.all(
    (data.items || []).map((item) => fetchUserData(item.url))
  );

  return {
    users: userDetails.filter(Boolean),
    totalCount: data.total_count,
    hasNextPage: data.items.length === 10,
  };
};

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const { users: userList, hasNextPage } = await fetchUserList(
        username,
        location,
        minRepos,
        1
      );
      setUsers(userList);
      setHasNextPage(hasNextPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
    if (onSearch) onSearch({ username, location, minRepos });
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(false);
    try {
      const nextPage = page + 1;
      const { users: userList, hasNextPage } = await fetchUserList(
        username,
        location,
        minRepos,
        nextPage
      );
      setUsers((prev) => [...prev, ...userList]);
      setPage(nextPage);
      setHasNextPage(hasNextPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-end gap-4 mb-7 bg-white rounded-lg shadow p-4"
        aria-label="GitHub Advanced User Search"
      >
        <div className="flex-1">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="GitHub username"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g. Lagos)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Location"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g. 10"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Minimum repositories"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">Looks like we can't find the user(s)</p>}
      {users.length > 0 && !loading && !error && (
        <div className="mt-4">
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h2 className="text-lg font-bold">{user.name || user.login}</h2>
                  <p className="text-gray-600">{user.location || 'Location not specified'}</p>
                  <p className="text-gray-600">Repos: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {hasNextPage && (
            <button
              onClick={handleLoadMore}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
