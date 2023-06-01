import clsx from "clsx";
import FormInputText from "../FormInputText/FormInputText";
import styles from "./LoginForm.module.css";
import Toast from "../Toast/Toast";
import { useStore, actions } from "../../store";
import { memo, useState } from "react";
import OTPForm from "../OTPForm/OTPForm";
// router
import { Link, useNavigate } from "react-router-dom";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../common/notify";
//Spinner Loader
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { login } from "../../ApiService/index";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import SpinFC from "antd/es/spin";
import { Spinner } from "reactstrap";

const { Paragraph } = Typography;

// const login_success = () => toast.success("Register success!");
// const login_error = (error) => toast.error(error.response.data.userMessage);
function LoginForm() {
  let [loading, setLoading] = useState(false);
  const [state, dispatch] = useStore();

  let navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    login(values.username, values.password)
      .then(async (res) => {
        if (!res && res?.data) {
          notify("error", "Password or Email is wrong");
          setLoading(false);
        } else {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          const user = res?.data;
          delete user?.accessToken;
          localStorage.setItem("user", JSON.stringify(res?.data));
          await dispatch(actions.setAuthUser(true));
          let isUser = user?.role.find((ele)=>ele == "ROLE_USER")
          let isAdmin = user?.role.find((ele)=>ele == "ROLE_SUPER_ADMIN" || ele == "ROLE_ADMIN")

          if(isUser){
            navigate(`../`);
          }else if(isAdmin){
            navigate(`../admin`);
          }
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="mt-5 mb-5"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography.Title level={1} style={{ margin: 50, textAlign: "center" }}>
        Login
      </Typography.Title>
      <Card style={{ padding: 20 }} className="mb-5">
        <Form 
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800, minWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              size="large"
              style={{ width: 100 }}
              type="primary"
              htmlType="submit"
            >
              {loading ? <Spinner /> : "Submit"}
            </Button>
          </Form.Item>
        </Form>
        <ToastContainer />
      </Card>
    </div>
  );
}

export default memo(LoginForm);
