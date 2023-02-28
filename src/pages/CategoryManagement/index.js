import { useState } from "react";
import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";
// import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";

import "./CategoryManagement.scss";
import ListCategory from "./ListCategory";

function CategoryManagement() {
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
    },
  ];
  const [data, setData] = useState(dataUser);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="categorymanagement__container">
      <div className="categorymanagement__inner">
        <header className="categorymanagement__header">
          <h2>Category Management</h2>
        </header>
        <div className="categorymanagement__content">
          <button className="categorymanagement__btn--add" onClick={toggle}>
            Create new category
          </button>
          <ListCategory data={data} setData={setData} />
        </div>
      </div>
      <ModalAdmin modal={modal} toggle={toggle} setData={setData} data={data} />
    </div>
  );
}

export default CategoryManagement;
