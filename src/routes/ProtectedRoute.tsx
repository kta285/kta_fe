import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user_id = sessionStorage.getItem("user_id"); // 로컬스토리지에서 토큰을 확인
  return user_id ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
