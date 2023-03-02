import { useEffect, useState } from "react";
import { getAllNews } from "../../../ApiService";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
import ListNews from "./ListNews";
import "./NewsManagement.scss";

function NewsManagement() {
  const [modal, setModal] = useState(false);
  const [dataNews, setDataNews] = useState();

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = () => {
    getAllNews().then((res) => {
      console.log(res.data);
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
        </div>
      </div>
      <ModalAdmin modal={modal} toggle={toggle} create fetch={fetch} />
    </div>
  );
}

export default NewsManagement;
