import { Container } from "reactstrap";

import "./Header.css";
import { logout } from "../../../../ApiService";
import { useNavigate } from "react-router";
import Search from "antd/es/transfer/search";
import { Avatar } from "antd";

function HeaderAdmin() {
  // const navigate = useNavigate();

  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleLogout = () => {
    logout().then((res) => {
      // navigate("../login");
    });
  };
  return (
    <Container fluid>
      <div className="headeradmin__inner">
        <div className="headeradmin__search">
          <Search placeholder="Enter" enterButton />
        </div>
        <div className="headeradmin__action">
          <div className="headeradmin__avatar" style={{display:"flex", alignItems:'center'}}>
              <Avatar src={`${userLocal?.avatar}`} alt="avatar" />
          </div>
          <div className="btn_logout-admin" onClick={handleLogout}>
            <img
              src="https://img.icons8.com/ios-glyphs/28/000000/logout-rounded--v1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeaderAdmin;
