import { Container } from "reactstrap";
import HeaderAdmin from "./components/Header";

import SideBar from "./components/SideBar";
import Dashboard from "./page/Dashboard";
import AccountManagement from "./page/AccountManagement";
import "./Admin.scss";
import NewsManagement from "./page/NewsManagement";

function Admin() {
  return (
    <Container fluid className="admin__container">
      <SideBar />
      <div className="admin__content">
        <HeaderAdmin />
        <div className="admin__content-pages">
          {/* <Dashboard /> */}
          <AccountManagement />
          {/* <NewsManagement /> */}
        </div>
      </div>
    </Container>
  );
}

export default Admin;
