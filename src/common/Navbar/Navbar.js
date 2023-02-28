import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Navbar.module.css'
import { arrayToTree } from "performant-array-to-tree";
import MenuTree from './FamilyTree/MenuTree';
import { Link } from 'react-router-dom'


function Navbar() {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(false);
    const [tree, setTree] = useState();

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        axios({
            method: 'get',
            url: 'http://localhost:1337/listcategory',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(async (res) => {
                // console.log(res.data.data.categoryDB)
                let arr = Object.values(res.data.data.categoryDB);
                let abc = Object.values(res.data.data.categoryDB);
                arr.filter(item => { return item.idParent !== '' });
                arr = arr.length > 10 ? arr.slice(0, 9) : arr;
                // console.log('arr', arr);
                let newArray = arrayToTree(abc, { id: "id", parentId: "idParent" });
                // console.log('tree', newArray);
                setItems(arr);
                setTree(newArray);

            })
            .catch(error => console.log(error));
    }, [])

    const handleClick = () => {
        setCount(!count);
    }

    return (
        <div className={styles.navForm}>
            <ul className={styles.nav}>
                {items.map(item => (
                    item.idParent === '' &&
                    <li className={styles.navItem} key={item.id}>
                        <Link to={'/category/' + item.id} className={styles.span}>
                            {item.name}
                        </Link>
                    </li>
                ))}
                <li className={styles.navItem} onClick={handleClick}>
                    <span><i className="uil uil-bars"></i></span>
                </li>
            </ul>
            <hr />
            {count && (
                <MenuTree data={tree} />
            )}
        </div>
    )
}

export default Navbar;
