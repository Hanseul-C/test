import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
// import DashboardEcommerce from "../pages/DashboardEcommerce";
//pages
import Starter from "../pages/Pages/Starter/Starter";
import Maintenance from "../pages/Pages/Maintenance/Maintenance";
import ComingSoon from "../pages/Pages/ComingSoon/ComingSoon";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";
// organization
import Organization from "../pages/Pages/ROLE_ADMIN/Organization/Organization";
import Dashboard from "../pages/Pages/ORG_ADMIN/DashboardPage/dashboard";
import Schedule from "../pages/Pages/ORG_ADMIN/Schedule/Schedule";
import Calendar from "../pages/Pages/ORG_ADMIN/Calendar/Calendar";
import Finaltempl from "../pages/Pages/ORG_ADMIN/Finaltempl/Finaltempl";
import Finaldocs from "../pages/Pages/ORG_ADMIN/Finaldocs/finaldocs";

const authProtectedRoutes = [
  { path: "/index", component: <Dashboard /> },

  //Pages
  { path: "/pages-starter", component: <Starter /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },

  // ROLE_ADMIN
  { path: "/organization", component: <Organization /> }, // 조직관리

  // ORG_ADMIN & ORG_USER
  { path: "/dashboard", component: <Dashboard /> }, // 대시보드
  { path: "/schedule", component: <Schedule /> }, // 스케줄 관리
  { path: "/calendar", component: <Calendar /> }, // 일정 관리
  { path: "/finaltempl", component: <Finaltempl /> }, // 최종확인서 템플릿 관리
  { path: "/finaldocs", component: <Finaldocs /> }, // 최종확인서 관리
  // 큐시트 템플릿 관리
  // 큐시트 관리
  // 문서 관리
  // 커뮤니티
  // 고객 관리
  // 직원 관리 (ORG_USER는 제외)
  // 마이페이지

  // ROLE_USER
  // 대시보드
  // 큐시트
  // 문서관리
  // 커뮤니티
  // 마이페이지
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  // 큐시트 추가
  // 커뮤니티 추가

  //AuthenticationInner pages
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-coming-soon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
