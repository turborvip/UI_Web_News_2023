import { useEffect, useState } from "react";
import { getAllNews } from "../../../ApiService";
import Pagination from "../../../component/Pagination/Pagination";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
import ListNews from "./ListNews";
import "./NewsManagement.css";

function NewsManagement() {
  const [modal, setModal] = useState(false);
  const [dataNews, setDataNews] = useState();
  const [page, setPage] = useState();
  const [totalPage, setTotalPage] = useState();

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = (id, page, filter, pageSize) => {
    getAllNews(page, pageSize).then((res) => {
      console.log(res.data);
      setPage(res?.page);
      setTotalPage(res?.totalPage);
      setDataNews(res?.data);
    });
  };
  return (
    <div className="newsmanagement__container">
      <div className="newsmanagement__inner">
        <header className="newsmanagement__header">
          <h2>News Management</h2>
        </header>
        <div className="newsmanagement__content">
          <button className="newsmanagement__btn--add" onClick={toggle}>
            Create new news
          </button>
          <ListNews dataNews={dataNews} fetch={fetch} />
          <div className="newsmanagement__pagination">
            <Pagination page={page || 1} totalPage={totalPage} fetch={fetch} />
          </div>
        </div>
      </div>
      <ModalAdmin modal={modal} toggle={toggle} create fetch={fetch} />
    </div>
  );
}

export default NewsManagement;
