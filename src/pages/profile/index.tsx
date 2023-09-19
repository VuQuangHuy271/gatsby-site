import React, { useState } from "react";
import {
  Drawer,
  Form,
  Input,
  Select,
  Button,
  Avatar,
  DatePicker,
} from "antd";

const Profile = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState("");
  const [fund, setFund] = useState(0);
  const [account, setAccount] = useState("");

  return (
    <Drawer
      title="Profile"
      width={720}
      onClose={() => {
        console.log("Drawer closed");
      }}
    >

      <Form>
        <Form.Item label="Tên">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Avatar
            src={avatar}
            size={100}
            onClick={() => {
              // Open file picker
            }}
          />
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker
            value={birthday}
            // onChange={(date) => setBirthday(date)}
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Form.Item label="Giới tính">
          <Select
            value={gender}
            onChange={(value) => setGender(value)}
          >
            <Select.Option value="Nam">Nam</Select.Option>
            <Select.Option value="Nữ">Nữ</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Fund">
          <Input value={fund} />
        </Form.Item>
        <Form.Item label="Account">
          <Input value={account} onChange={(e) => setAccount(e.target.value)} />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default Profile;
