import { useState } from "react";
// import { useStore } from "../../../../store";
import "./ListNews.css";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";

function ListNews({ dataNews, fetch }) {
  // const [state] = useStore();
  // const { dataNews } = state;
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [newsDelete, setNewsDelete] = useState();
  const [newsUpdate, setNewsUpdate] = useState();

  const toggleEditNews = (news) => {
    setNewsUpdate(news);
    setModal(!modal);
  };

  const toggleDeleteNews = (news) => {
    setNewsDelete(news);
    setModalDelete(!modalDelete);
  };
  return (
    <>
      {dataNews &&
        dataNews.length > 0 &&
        dataNews.map((news, index) => {
          return (
            <div className="listnews__container" key={index}>
              <div className="listnews__inner">
                <div className="listnews__news--thumnel">
                  <img src={news.image} alt={news.caption} />
                </div>
                <div className="listnews__news--content">
                  <header>
                    <div className="listnews__news--title">{news.caption}</div>
                  </header>
                  <>
                    <div className="listnews__news--categories">
                      Catagories: categories, categories
                    </div>
                    <div className="listnews__news--createby">
                      <span>Create By: {news.createBy}</span>
                      <span>Create At: {news.created_at}</span>
                    </div>
                    <div className="listnews__news--update">
                      <span>Update By: {news.updateBy}</span>
                      <span>Update At: {news.updated_at}</span>
                    </div>
                  </>
                </div>
                <div className="listnews__news--action">
                  <i
                    className="fa fa-edit"
                    onClick={() => toggleEditNews(news)}
                  />
                  <i
                    className="fa fa-trash-o"
                    onClick={() => toggleDeleteNews(news)}
                  />
                </div>
              </div>
            </div>
          );
        })}

      <ModalAdmin
        modal={modal}
        toggle={toggleEditNews}
        create
        data={newsUpdate}
      />
      <ModalAdmin
        modal={modalDelete}
        toggle={toggleDeleteNews}
        fetch={fetch}
        deletemode
        data={newsDelete}
      />
    </>
  );
}

export default ListNews;
