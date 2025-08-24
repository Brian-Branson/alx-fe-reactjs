import { Link, Outlet, useLocation } from "react-router-dom";

export default function Profile() {
  const loc = useLocation();
  return (
    <>
      <h1>Profile</h1>
      <nav style={{ display: "flex", gap: 8 }}>
        <Link to="details" state={{ from: loc.pathname }}>Details</Link>
        <Link to="settings" state={{ from: loc.pathname }}>Settings</Link>
      </nav>
      <div style={{ marginTop: 12, padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
        <Outlet />
      </div>
    </>
  );
}
