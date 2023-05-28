import { Link } from "react-router-dom";

import "./SidebarItem.css";

function SidebarItem({ itemName, linkTo, itemIcon }) {
  return (
    <div className="sidebar__item">
      <span className="sidebar__item--icon">
        {/* <i className="fa fa-home" /> */}
        {itemIcon}
      </span>
      <Link to={linkTo} className="sidebar__item--link">
        <p>{itemName}</p>
      </Link>
    </div>
  );
}

export default SidebarItem;
