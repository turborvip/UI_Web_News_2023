import { Link } from "react-router-dom";
import { Container, Nav } from "reactstrap";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

function SideBar() {
  return (
    <Container fluid className="sidebar_container">
      <div className="sidebar__inner">
        <div className="sidebar__header">
          <Link to="/admin" className="admin__link">
            ADMIN
          </Link>
        </div>
        <Nav className="sidebar__action">
          <SidebarItem
            itemIcon={<i className="fa fa-home" />}
            linkTo="/admin"
            itemName="Dashboard"
          />
          <SidebarItem
            itemIcon={<i className="fa fa-male" />}
            linkTo="/admin/accountmanagement"
            itemName="AccountManagement"
          />
          <SidebarItem
            itemIcon={<i className="fa fa-qrcode" />}
            linkTo="/admin/categorymanagement"
            itemName="CategoryManagement"
          />
          <SidebarItem
            itemIcon={<i className="fa fa-newspaper-o" />}
            linkTo="/admin/newsmanagement"
            itemName="NewsManagement"
          />
        </Nav>
      </div>
    </Container>
  );
}

export default SideBar;
