import { Container } from "reactstrap";
import "./AdminLayout.css";
import SideBar from "./components/SideBar";
import HeaderAdmin from "./components/HeaderAdmin";
import { useStore, actions } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function AdminLayout({ children }) {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();

  useEffect(() => {
    if(!state?.auth){
      navigate(`../login`)
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
          <ToastContainer />
        </Container>
      ) : (
        navigate(`../login`)
      )}
    </>
  );
}

export default AdminLayout;
