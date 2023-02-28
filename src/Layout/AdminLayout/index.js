import { Container } from "reactstrap";
import "./AdminLayout.scss";
import SideBar from "./components/SideBar";
import HeaderAdmin from "./components/HeaderAdmin";

function AdminLayout({ children }) {
  return (
    <Container fluid className="admin__container">
      <SideBar />
      <div className="admin__content">
        <HeaderAdmin />
        <div className="admin__content-pages">
          {/* <Dashboard /> */}
          {/* <AccountManagement /> */}
          {/* <NewsManagement /> */}
          {children}
        </div>
      </div>
    </Container>
  );
}

export default AdminLayout;
