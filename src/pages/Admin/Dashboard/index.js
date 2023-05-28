// import { Container } from "reactstrap";

import "./Dashboard.css";
import { NewsOfCategory } from "./NewsOfCategory";
import { ViewOfDaily } from "./ViewsOfDaily";
import { ViewsOfHourly } from "./ViewsOfHourly";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { amount, logout } from "../../../ApiService";

function Dashboard() {
  const [count, setCount] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    amount().then((res)=>{
      setCount(res?.data);
    })
    .catch(()=>{
      // logout().then((res) => {
      //   navigate("../admin/login");
      // });
    })
  }, []);

  return (
    <>
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
                  <span>{count ? count : ""}</span>
                </div>
                <div className="newofcategory">
                  <NewsOfCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
