import React from 'react'
import styles from './MenuTree.module.css'
import clsx from 'clsx';
import MenuChildrent from './MenuChildrent/MenuChildrent';
import { Link } from "react-router-dom";

function MenuTree({ data }) {
  return (
    <div className={clsx(styles.MenuTree)}>
      {
        data.map(item => (
          <div key={item.data.id}>
            <div>
              <Link to={'/category/' + item.data.id} className={styles.nameCategory}>
                {item.data.name}
              </Link>
              <MenuChildrent data={item.children} />
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default MenuTree
