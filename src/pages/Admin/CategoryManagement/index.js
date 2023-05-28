import { useEffect, useState } from "react";
import { getCategories, getCategoryInAdmin } from "../../../ApiService";
import Pagination from "../../../component/Pagination/Pagination";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
// import ModalAdmin from "../../Layout/AdminLayout/components/ModalAdmin";

import "./CategoryManagement.css";
import ListCategory from "./ListCategory";

function CategoryManagement() {
  const [dataCategory, setDataCategory] = useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async(id, page, filter, pageSize) => {
    await getCategoryInAdmin(page, pageSize).then((res) => {
      setPage(res?.currentPage);
      setTotalPage(res?.totalPage);
      setDataCategory(res?.pageData);
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
