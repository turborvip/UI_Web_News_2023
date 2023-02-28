import { Container } from "reactstrap";

import "./Header.scss";

function HeaderAdmin() {
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
          <i className="fa fa-envelope-o" />
          <div className="headeradmin__avatar">
            <span>
              <img
                src="https://images.unsplash.com/photo-1677061856345-e6c5502f125b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeaderAdmin;
