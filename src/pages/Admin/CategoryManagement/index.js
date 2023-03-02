import { useEffect, useState } from "react";
import { getCategoryInAdmin } from "../../../ApiService";
import Pagination from "../../../component/Pagination/Pagination";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
// import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";

import "./CategoryManagement.scss";
import ListCategory from "./ListCategory";

function CategoryManagement() {
  const [dataCategory, setDataCategory] = useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    fetch();
  }, []);
  const fetch = (id, page, filter, pageSize) => {
    getCategoryInAdmin(page, pageSize).then((res) => {
      console.log(res);
      setPage(res?.page);
      setTotalPage(res?.totalPage);
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
          <div className="category__pagination">
            <Pagination page={page || 1} totalPage={totalPage} fetch={fetch} />
          </div>
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
