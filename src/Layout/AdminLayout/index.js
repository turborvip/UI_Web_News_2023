import { Container } from "reactstrap";
import "./AdminLayout.css";
import SideBar from "./components/SideBar";
import HeaderAdmin from "./components/HeaderAdmin";
import { useStore, actions } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminLayout({ children }) {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();

  useEffect(() => {
    if(!state?.auth){
      navigate(`../admin/login`)
    }
  }, [])
  
  return (
    <>
      {state?.auth ? (
        <Container fluid className="admin__container">
          <SideBar />
          <div className="admin__content">
            <HeaderAdmin />
            <div className="admin__content-pages">
              {children}
            </div>
          </div>
        </Container>
      ) : (
        navigate(`../admin/login`)
      )}
    </>
  );
}

export default AdminLayout;
