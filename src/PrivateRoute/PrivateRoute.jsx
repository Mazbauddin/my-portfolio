import { Navigate, useLocation } from "react-router-dom";
import useAuthHooks from "../Hooks/UseAuthHooks";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthHooks();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-between items-center text-center max-h-full">
        <span className="loading mx-auto loading-spinner loading-lg text-info"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
