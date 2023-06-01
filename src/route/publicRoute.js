// Admin
import AdminLayout from "../Layout/AdminLayout";
import AccountManagement from "../pages/Admin/AccountManagement";
import CategoryManagement from "../pages/Admin/CategoryManagement";
import Dashboard from "../pages/Admin/Dashboard";
import NewsManagement from "../pages/Admin/NewsManagement";
import Register from '../component/SignUpForm/SignUpForm'

// User
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../pages/User/Home";
import NewsDetail from "../pages/User/NewsDetail";
import Category from "../pages/User/Category";
import Login from "../component/LoginForm_User/LoginForm";



export const publicRoute = [
  { path: "/admin", layout: AdminLayout, component: Dashboard },
  { path: "/register", component: Register},
  {
    path: "/admin/accountmanagement",
    layout: AdminLayout,
    component: AccountManagement,
  },
  {
    path: "/admin/newsmanagement",
    layout: AdminLayout,
    component: NewsManagement,
  },
  {
    path: "/admin/categorymanagement",
    layout: AdminLayout,
    component: CategoryManagement,
  },
  { path: "/", component: Home },
  { path: "/news", component: NewsDetail, param:"idNews" },
  { path: "/categories", component: Category,param:"idCategory"},
  { path: "/login", component: Login},
];
