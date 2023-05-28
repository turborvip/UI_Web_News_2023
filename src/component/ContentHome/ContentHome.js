import React from "react";
import HotNews from "./HotNews/HotNews";
import NewContent from "./NewContent/NewContent";
import styles from "./ContentHome.module.css";
import { useLayoutEffect, useState } from "react";
import InfiniteList from "./InfiniteList/InfiniteList";
import { getDataHome } from "../../ApiService";

function ContentHome() {
  const [data, setData] = useState({});
  const [normalContent, setNormalContent] = useState([]);
  const [page, setPage] = useState(0);

  useLayoutEffect(() => {
    getDataHome()
      .then(async (res) => {
        let arr = res.data
        setData(arr);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles.contentHome}>
      <NewContent data={data.newContent} />
      <HotNews data={data.hotNewsHour} />
      {
        <InfiniteList
          state={normalContent}
          setState={setNormalContent}
          page={page}
          setPage={setPage}
        />
      }
    </div>
  );
}
export default ContentHome;
