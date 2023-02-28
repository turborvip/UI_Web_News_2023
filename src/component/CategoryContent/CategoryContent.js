import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, memo } from 'react'
import axios from 'axios'
import styles from './CategoryContent.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import { useNavigate } from "react-router-dom";
import NewsHistoryViewed from '../NewsHistoryViewed/NewsHistoryViewed'

const moment = require('moment');

function CategoryContent({ page, filter }) {
    let pageQuery = page || '';
    let filterQuery = filter || '';
    let { idCategory } = useParams();
    const [data, setData] = useState();
    const [filterData, setFilterData] = useState(filterQuery);

    let navigate = useNavigate();


    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        axios({
            method: 'get',
            url: `http://localhost:1337/listnews/${idCategory}?page=${pageQuery}&filter=${filterQuery}`,
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let arr = Object.values(res.data.data.data);
                setData(arr);
            })
            .catch(error => console.log(error));
    }, [idCategory, pageQuery, filterQuery]);

    useEffect(() => {
        navigate(`../category/${idCategory}?page=${pageQuery}&filter=${filterData}`);
        // eslint-disable-next-line
    }, [filterData])

    const handleFilter = () => {
        setFilterData(document.getElementById('selectForm').value);
    }
    return (
        <>
            {data && (
                <div>
                    <div className={clsx(styles.topCategory)}>
                        <div className={clsx(styles.nameCategory)}>
                            {data[0].name}
                        </div>
                        <div className={styles.descriptionCategory}>
                            {data[0].description}
                        </div>
                        <hr className={styles.hrCategory} />
                    </div>
                    <div className={styles.formSelect}>
                        <select id='selectForm'
                            className={clsx("form-select", styles.select)}
                            style={{ width: '130px' }}
                            onChange={handleFilter}
                        >
                            <option value="createdAt DESC">Mới nhất</option>
                            <option value="createdAt ASC">Cũ nhất</option>
                            <option value="viewer DESC">Lượt xem</option>
                        </select>
                    </div>
                    <div className={clsx(styles.listnews)}>
                        {data[1] && data[1].map(item => (
                            <Link key={item.id} to={'/news/' + item.id} className='text-decoration-none'>
                                <div className={clsx(styles.item, 'row')}>
                                    <div className={clsx(styles.leftItem, 'col-4')} >
                                        <img className={clsx(styles.imgItem, 'image-fluid')} src={item.image} alt='' />
                                    </div>
                                    <div className={clsx(styles.rightItem, 'col-8')} >
                                        <div className={clsx(styles.captionItem)}>
                                            {item.caption}
                                        </div>
                                        <div className={clsx(styles.createdAtItem)}>
                                            {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                        </div>
                                        <div className={clsx(styles.descriptionItem)}>
                                            {item.description}
                                        </div>
                                        <div className={clsx(styles.view)}>Lượt xem: {item.viewer}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.paginationCategoryContent}>
                        <Pagination page={pageQuery || 1} totalPage={data[2]} idCategory={idCategory} filter={filterData || ''} />
                    </div>
                    <NewsHistoryViewed />
                </div>
            )
            }
        </>
    )
}
export default memo(CategoryContent);
