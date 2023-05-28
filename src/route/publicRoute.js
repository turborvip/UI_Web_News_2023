// Admin
import AdminLayout from "../Layout/AdminLayout";
import AccountManagement from "../pages/Admin/AccountManagement";
import CategoryManagement from "../pages/Admin/CategoryManagement";
import Dashboard from "../pages/Admin/Dashboard";
import NewsManagement from "../pages/Admin/NewsManagement";
import Login from '../pages/User/Login'
import Register from '../component/SignUpForm/SignUpForm'

// User
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../pages/User/Home";
import NewsDetail from "../pages/User/NewsDetail";
import Category from "../pages/User/Category";



export const publicRoute = [
  { path: "/admin", layout: AdminLayout, component: Dashboard },
  { path: "/admin/login", component: Login, layout:null},
  { path: "/register", component: Register, layout:null},
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


];
