import { Container } from "reactstrap";

import "./Header.scss";
import { logout } from "../../../../ApiService";

function HeaderAdmin() {
  const userLocal = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

    const handleLogout = () => {
      logout().then((res)=>{
      })
    }
  return (
    <Container fluid>
      <div className="headeradmin__inner">
        <div className="headeradmin__search">
          <input type="text" placeholder="search" />
          <button type="submit" className="headeradmin__btnsearch">
            <i className="fa fa-search" />
          </button>
        </div>
        <div className="headeradmin__action">
          <div className="headeradmin__avatar">
            <span>
              <img
                src={`${userLocal?.image}`}
                alt="avatar"
              />
            </span>
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
