import { useState } from "react";
import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";

import "./AccountManagement.scss";
import ListAccount from "./ListAccount";

function AccouontManagement() {
  const dataUser = [
    {
      id: 1,
      name: "admin",
      password: "123456789",
      email: "admin@gmail.com",
      createAt: "1/2/2022",
      createBy: "admin",
      updateAt: "1/2/2022",
      updateBy: "admin",
      role: "superAdmin",
    },
  ];
  const [data, setData] = useState(dataUser);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="accountmanagement__container">
      <div className="accountmanagement__inner">
        <header className="accountmanagement__header">
          <h2>Account Management</h2>
        </header>
        <div className="accountmanagement__content">
          <button className="accountmanagement__btn--add" onClick={toggle}>
            Create new account
          </button>
          <ListAccount />
        </div>
      </div>
      <ModalAdmin modal={modal} toggle={toggle} create />
    </div>
  );
}

export default AccouontManagement;
