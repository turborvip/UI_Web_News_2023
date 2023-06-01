import clsx from "clsx";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Search from "antd/es/input/Search";
import { LoginOutlined, UserAddOutlined,UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const logo = "../../../image/logo/logo-nosloganblack.png";
const onSearch = (value) => console.log(value);

function Header() {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  user = user ? JSON.parse(user) : undefined;

  return (
    <div className={clsx(styles.headerForm, "row")}>
      <div className="col-xs-12  col-sm-5 col-md-7 col-lg-7">
        <Link to={"../"}>
          <img src={logo} alt="" className={styles.logo} />
        </Link>
      </div>
      <div
        className={clsx(
          styles.formSearch,
          "col-xs-12 col-md-3 col-lg-3 col-sm-5"
        )}
      >
        <form className="d-flex" role="search">
          <Search placeholder="Enter" onSearch={onSearch} enterButton />
        </form>
      </div>
      <div
        className={clsx(
          styles.formBtn,
          "col-xs-12  col-md-2 col-lg-2 col-sm-2"
        )}
      >
        {user ? (
          <Avatar src={user?.avatar} />
        ) : (
          <>
            <UserOutlined
              style={{ cursor: "pointer", width: "20px" }}
              onClick={() => navigate("../login")}
            />
            <UserAddOutlined onClick={() => navigate("../register")} />
          </>
        )}
        <LoginOutlined onClick={()=>{localStorage.clear(); navigate("../")}}/>
      </div>
    </div>
  );
}
export default Header;
