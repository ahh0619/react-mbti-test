import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const isAuthenticated = !!user; // 사용자 데이터가 존재하면 인증됨

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  // 인증 여부에 따라 Outlet 또는 로그인 페이지로 리다이렉트
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
