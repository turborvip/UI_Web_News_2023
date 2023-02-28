import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './NewsDetailContent.module.css'
import clsx from 'clsx'
import NewsHistoryViewed from '../NewsHistoryViewed/NewsHistoryViewed'
// import { Link } from 'react-router-dom'
const moment = require('moment');

function NewsDetail() {
    let { idNews } = useParams();
    const [data, setData] = useState([]);
    const sliceArr = (newsViewedData, dataCompare) => {
        for (let i = 0; i < newsViewedData.length; i++) {
            if (newsViewedData[i].id === dataCompare[0].id) {
                newsViewedData.splice(i, 1);
            }
        }
        return newsViewedData;
    }
    const pushLocalStorage = (data) => {
        let newsViewedData = JSON.parse(localStorage.getItem('newsViewed'));
        if (newsViewedData) {
            let newsData = sliceArr(newsViewedData, data)
            newsData = [...newsViewedData, ...data]
            localStorage.setItem('newsViewed', JSON.stringify(newsData));
        } else {
            newsViewedData = data;
            localStorage.setItem('newsViewed', JSON.stringify(newsViewedData));
        }

    }
    useEffect(() => {
        let token = localStorage.getItem('accessToken');
        axios({
            method: 'get',
            url: `http://localhost:1337/detailnews/${idNews}`,
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let arr = res.data.data.data;
                setData(arr);
                pushLocalStorage([arr]);
            })
            .catch(error => console.log(error));
        // eslint-disable-next-line
    }, [idNews])
    return (
        <div>
            <p className={clsx(styles.titleNews)}>
                {data.caption}
            </p>
            <div className={clsx(styles.infoNews)}>
                <span className={styles.author}>
                    {data.author}
                </span>
                <span className={styles.timeCreate}>
                    <i className="uil uil-minus"></i>
                    {moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </span>
            </div>
            <div className={clsx(styles.descriptionNews)}>
                {data.description}
            </div>
            <hr className={styles.hrNews} />
            <div className={styles.contentNews}>
                {data.text}
            </div>
            <NewsHistoryViewed />
        </div>
    )
}

export default NewsDetail