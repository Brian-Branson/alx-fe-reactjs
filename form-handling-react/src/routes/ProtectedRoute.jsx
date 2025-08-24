import { Navigate, useLocation } from "react-router-dom";


const isAuthenticated = () => Boolean(localStorage.getItem("demo_authed"));

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
