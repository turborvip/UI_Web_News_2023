import React from 'react'
import styles from './MenuChildrent.module.css'
import { Link } from "react-router-dom";

function MenuChildrent({ data }) {
    return (
        <div className={styles.menuChildrent}>
            {
                data.map(item => (
                    <div key={item.data.id}>
                        <Link to={'../categories/' + item.data.id} className={styles.nameCategory}>
                            {item.data.title}
                        </Link>
                        {item.children.length === 0 ? '' : <MenuChildrent data={item.children} />}
                    </div>
                ))


            }
        </div>
    )
}
export default MenuChildrent

