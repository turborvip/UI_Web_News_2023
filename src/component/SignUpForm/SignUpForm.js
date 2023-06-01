import React from "react";
import styles from "./SignUpForm.module.css";
import axios from "axios";
import { memo, useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// Toast
import "react-toastify/dist/ReactToastify.css";
import notify from "../../common/notify";
import { Form, Button, DatePicker, InputNumber, Select } from "antd";
import { Input } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { register } from "../../ApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

function SignUpForm() {
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const [form] = Form.useForm();
  const login_success = () => toast.success("Register success!");
  const login_error = (error) => toast.error(error.response.data.userMessage);
  const handleSubmit = ({
    address,
    avatar,
    birthday,
    email,
    fullName,
    gender,
    password,
    phone,
    username,
  }) => {
    const payload = {
      address,
      avatar,
      birthday: moment(birthday)?.format("DD/MM/yyyy"),
      email,
      fullName,
      gender,
      password,
      phone,
      username,
    };
    console.log(payload);
    setLoading(true);
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/no-auth/create-user",
      data: payload,
    })
      .then(async (res) => {
        console.log("res", res?.data);
        form.resetFields();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        login_success();
      })
      .catch((error) => login_error(error));

    setLoading(false);
  };
  return (
    <div className={styles.test}>
      <div className={styles.caption}>Sign up</div>
      <div id="formLogin" style={{ display: "flex", justifyContent: "center" }}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: "default" }}
          size={"default"}
          style={{ minWidth: 600 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Full name"
            name={"fullName"}
            rules={[{ required: true, message: "Full name is require!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name={"username"}
            rules={[{ required: true, message: "Username is require!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name={"first_password"}
            rules={[{ required: true, message: "Password is require!" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            label="Re-Password"
            name={"password"}
            rules={[
              { required: true, message: "Re-password is require!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("first_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Confirm passwords not match!")
                  );
                },
              }),
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name={"birthday"}
            rules={[{ required: true, message: "Please input your birthday!" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item label="Phone number" name={"phone"}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Select" name={"gender"}>
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">FE-male</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={"address"} label="Address">
            <TextArea />
          </Form.Item>
          {/* <Form.Item label="Avatar" name={"avatar"}>
            <Input />
          </Form.Item> */}
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default memo(SignUpForm);
