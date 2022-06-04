import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      // navigate("/entry/login");
    }
  }, [user]);

  return <>{children}</>;
};

export default ProtectedRoute;
