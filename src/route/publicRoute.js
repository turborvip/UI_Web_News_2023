// Admin
import AdminLayout from "../Layout/AdminLayout";
import AccountManagement from "../pages/Admin/AccountManagement";
import CategoryManagement from "../pages/Admin/CategoryManagement";
import Dashboard from "../pages/Admin/Dashboard";
import NewsManagement from "../pages/Admin/NewsManagement";

// User
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../pages/Home";


export const publicRoute = [
  { path: "/admin", layout: AdminLayout, component: Dashboard },
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
  {
    path: "/home",
    layout: DefaultLayout,
    component: Home,
  },
];
