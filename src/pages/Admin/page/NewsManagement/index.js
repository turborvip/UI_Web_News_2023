import ListNews from "./ListNews";
import "./NewsManagement.scss";

function NewsManagement() {
  return (
    <div className="newsmanagement__container">
      <div className="newsmanagement__inner">
        <header className="newsmanagement__header">
          <h2>Account Management</h2>
        </header>
        <div className="newsmanagement__content">
          <button className="newsmanagement__btn--add">Create new news</button>
          <ListNews />
        </div>
      </div>
    </div>
  );
}

export default NewsManagement;
