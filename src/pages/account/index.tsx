import React from "react";
import { Avatar, Space, Table, Tag, Typography } from 'antd';
import { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";

export default function AccountComponent() {
  interface DataType {
    key: string;
    image: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const columns: ColumnsType<DataType> = [
    {
      title: "Photo",
      dataIndex: "image",
      key: 'image',
      render: (link) => {
        return <Avatar src={link} />;
      },
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: 'firstName',
    },
    {
      title: "LastName",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },

  ];
  return (
    <Space size={5} direction="vertical" style={{width: '100%', height: '100%'}}>
      <Typography.Title level={3}>Accounts</Typography.Title>
      <Table
        style={{width: '100%', height: '100%'}}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

