import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { navigate } from "gatsby";


const Login: React.FC = () => {
  const [form] = Form.useForm();
  let [errphone, setErrphone] = useState('');
  let [errPassword, setErrPassword] = useState('');

  type FieldType = {
    phone: string;
    password: string;
  };

  const data = {
    phone: '9999',
    password: 'admin'
  }
  const onFinish = () => {
    setErrphone('')
    setErrPassword('')

    if (form.getFieldValue('phone') !== data.phone) {
      setErrphone('Sai tài khoản')
      return
    }
    if (form.getFieldValue('password') !== data.password) {
      setErrPassword('Sai mật khẩu')
      return
    }
    console.log(form.getFieldValue)
    navigate('/')
  };

  return (
    <Row style={{ height: "100vh" }} justify={"center"} align={"middle"}>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          name="phone"
          help={errphone === '' ? '' : 'Sai tài khoản'}
          validateStatus={errphone === '' ? '' : 'error'}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Phone"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          validateStatus={errPassword === '' ? '' : 'error'}
          help={errPassword === '' ? '' : 'Sai mật khẩu'}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            // type="password"
            placeholder="Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Login;
