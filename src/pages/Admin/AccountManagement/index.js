import { useState, useEffect } from "react";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";

import "./AccountManagement.scss";
import ListAccount from "./ListAccount";
import { getUser } from "../../../ApiService";

function AccountManagement() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [dataUser, setDataUser] = useState();
  const [modal, setModal] = useState(false);

  function fetch() {
    getUser().then((res) => {
      console.log(res);
      setDataUser(res?.data);
    });
  }

  useEffect(() => {
    fetch();
  }, []);

  const toggle = () => setModal(!modal);
  return (
    <div className="accountmanagement__container">
      <div className="accountmanagement__inner">
        <header className="accountmanagement__header">
          <h2>Account Management</h2>
        </header>
        <div className="accountmanagement__content">
          {user?.role == "superAdmin" && (
            <button className="accountmanagement__btn--add" onClick={toggle}>
              Create new account
            </button>
          )}
          <ListAccount data={dataUser} fetch={fetch} />
        </div>
      </div>
      <ModalAdmin
        modal={modal}
        toggle={toggle}
        create="account"
        fetch={fetch}
      />
    </div>
  );
}

export default AccountManagement;
