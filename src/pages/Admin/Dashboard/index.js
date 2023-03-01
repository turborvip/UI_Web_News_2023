// import { Container } from "reactstrap";

import "./Dashboard.scss";
import { NewsOfCategory } from "./NewsOfCategory";
import { ViewOfDaily } from "./ViewsOfDaily";
import { ViewsOfHourly } from "./ViewsOfHourly";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__inner">
        <header className="dashboard__header">
          <h2>Dashboard</h2>
        </header>
        <div className="dashboard__content">
          <div className="viewdaily">
            <ViewOfDaily />
          </div>
          <div className="dashboard__wraper">
            <div className="viewhourly">
              <ViewsOfHourly />
            </div>
            <div className="dashboard__wraper--news">
              <div className="quantityOfNews">
                <label>Quantity Of News</label>
                <span>100</span>
              </div>
              <div className="newofcategory">
                <NewsOfCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
