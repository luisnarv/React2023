import { useEffect } from "react";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuntheticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuntheticated) navigate("/");
  }, [isAuntheticated, navigate]);
  return isAuntheticated && children;
}
