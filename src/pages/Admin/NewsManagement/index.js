import { useState } from "react";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
import ListNews from "./ListNews";
import "./NewsManagement.scss";

function NewsManagement() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
          <ListNews />
        </div>
      </div>
      <ModalAdmin modal={modal} toggle={toggle} create />
    </div>
  );
}

export default NewsManagement;
