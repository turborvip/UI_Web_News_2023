import React from 'react'
import HotNews from './HotNews/HotNews'
import NewContent from './NewContent/NewContent'
import styles from './ContentHome.module.css'
// import NormalContent from './NormalContent/NormalContent'
import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import InfiniteList from './InfiniteList/InfiniteList'

function ContentHome() {
    const [data, setData] = useState({});
    const [normalContent, setNormalContent] = useState([]);
    const [page, setPage] = useState(1);
    // console.log('data', data, 'normalContent', normalContent)

    useLayoutEffect(() => {
        let token = localStorage.getItem('accessToken')
        axios({
            method: 'get',
            url: 'http://localhost:1337/homedata',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(async (res) => {
                let arr = Object.values(res.data.data.data);
                setData(arr);
                // setNormalContent();
            })
            .catch(error => console.log(error));

    }, []);
    return (
        <div className={styles.contentHome}>
            <NewContent data={data[1]} />
            <HotNews data={data[2]} />
            {
                < InfiniteList
                    state={normalContent}
                    setState={setNormalContent}
                    page={page}
                    setPage={setPage}
                />
            }
        </div>
    )
}
export default ContentHome