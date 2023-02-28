import AdminLayout from "../Layout/AdminLayout";
import AccountManagement from "../pages/AccountManagement";
import CategoryManagement from "../pages/CategoryManagement";
import Dashboard from "../pages/Dashboard";
import NewsManagement from "../pages/NewsManagement";

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
];
