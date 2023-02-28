import "./ListNews.scss";

function ListNews() {
  return (
    <div className="listnews__container">
      <div className="listnews__inner">
        <div className="listnews__news--thumnel">
          <img
            src="https://images.unsplash.com/photo-1677257283498-a3433130074d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="listnews__news--content">
          <header>
            <div className="listnews__news--title">title--view</div>
          </header>
          <body>
            <div className="listnews__news--categories">
              Catagories: categories, categories
            </div>
            <div className="listnews__news--createby">
              <span>Create By: </span>
              <span>Create At: </span>
            </div>
            <div className="listnews__news--update">
              <span>Update By: </span>
              <span>Update At: </span>
            </div>
          </body>
        </div>
        <div className="listnews__news--action">
          <i className="fa fa-edit" />
          <i className="fa fa-trash-o" />
        </div>
      </div>
    </div>
  );
}

export default ListNews;
