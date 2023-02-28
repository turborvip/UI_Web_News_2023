import React from 'react'
import styles from './Pagination.module.css'
import { Link } from 'react-router-dom'
import clsx from 'clsx';

function Pagination({ page, totalPage, idCategory, filter }) {
    const createArr = (page, totalPage) => {
        if (+totalPage === 2) {
            return [1, 2];
        } else if (+totalPage === 1) {
            return [1];
        } else if (+totalPage === 0) {
            return [];
        } else {
            if (+page === 1) {
                return [1, 2, 3];
            } else if (+page === totalPage) {
                return [+page - 2, +page - 1, page];
            } else {
                return [+page - 1, +page, +page + 1];
            }
        }
    }
    const handleDisableNext = (page, totalPage) => {
        if (+page === +totalPage || +totalPage === 0) {
            return 'disabled';
        } else {
            return '';
        }
    }

    const handleDisablePrev = (page) => {
        if (+page === 1) {
            return 'disabled';
        } else {
            return '';
        }
    }

    // console.log('page', page, totalPage, createArr(page, totalPage));

    return (
        <div className={styles.paginationItem}>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item ">
                        <Link to={`/category/${idCategory}?page=${parseInt(page) - 1}&filter=${filter}`}
                            className={clsx("page-link", handleDisablePrev(page, totalPage))}
                        >
                            Previous
                        </Link>
                    </li>
                    <li className="page-item " aria-current="page">
                        <Link to={`/category/${idCategory}?page=${1}&filter=${filter}`}
                            className="page-link" >
                            Frist
                        </Link>
                    </li>
                    <li className="page-item">
                        <div
                            className={clsx("page-link disabled")}  >
                            ...
                        </div>
                    </li>
                    {createArr(page, totalPage).map((item, index) => (
                        +item === +page
                            ? <li key={index} className="page-item active" aria-current="page">
                                <Link to={`/category/${idCategory}?page=${page}&filter=${filter}`}
                                    className="page-link" >
                                    {page}
                                </Link>
                            </li>
                            : <li key={index} className="page-item">
                                <Link to={`/category/${idCategory}?page=${item}&filter=${filter}`}
                                    className="page-link" >
                                    {item}
                                </Link>
                            </li>
                    ))}
                    <li className="page-item">
                        <div
                            className={clsx("page-link disabled")}  >
                            ...
                        </div>
                    </li>
                    <li className="page-item " aria-current="page">
                        <Link to={`/category/${idCategory}?page=${totalPage}&filter=${filter}`}
                            className="page-link" >
                            Last
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link to={`/category/${idCategory}?page=${parseInt(page) + 1}&filter=${filter}`}
                            className={clsx("page-link", handleDisableNext(page, totalPage))}  >
                            Next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination