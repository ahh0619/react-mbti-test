import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // 로컬 스토리지에서 사용자 데이터 가져오기
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user; // 사용자 데이터가 존재하면 인증됨

  // 인증 여부에 따라 Outlet 또는 로그인 페이지로 리다이렉트
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
