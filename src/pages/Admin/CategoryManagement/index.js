import { useEffect, useState } from "react";
import { getCategories } from "../../../ApiService";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
// import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";

import "./CategoryManagement.scss";
import ListCategory from "./ListCategory";

function CategoryManagement() {
  const [dataCategory, setDataCategory] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = () => {
    getCategories().then((res) => {
      console.log(res);
      setDataCategory(res?.data);
    });
  };

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
          <ListCategory dataCategory={dataCategory} fetch={fetch} />
        </div>
      </div>
      <ModalAdmin
        modal={modal}
        toggle={toggle}
        create="category"
        fetch={fetch}
      />
    </div>
  );
}

export default CategoryManagement;
