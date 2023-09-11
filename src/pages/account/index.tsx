import React from "react";
import { Avatar, Button, Modal, Space, Table, Tag, Typography } from 'antd';
import { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";

export default function AccountComponent() {
  interface DataType {
    id: number;
    fund: string
    user: string
    accountType: string
    accountNumber: string
    tenor: string
    interestRate: string
    openDate: string
    closeDate: string
    principalAmount: string
    balance: string
    repaymentFrequency: string[]
    rolloverMode: string[]
    repaymentFrequencyMode: string[]
  }
  const data: DataType[] = []

  const { confirm } = Modal;
  const showDeleteConfirm = (id: number) => {
    confirm({
      title: 'Are you sure delete this product?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleClick = (id: number) => {
    if(id !== 0) {
      const value = data.find(x => x.id === id)
    }
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Fund",
      dataIndex: "fund",
      key: 'fund',
    },
    {
      title: "User",
      dataIndex: "user",
      key: 'user',
    },
    {
      title: "Account Type",
      dataIndex: "accountType",
      key: 'accountType',
    },
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: 'accountNumber',
    },
    {
      title: "Tenor",
      dataIndex: "tenor",
      key: 'tenor',
    },
    {
      title: "Interest Rate",
      dataIndex: "interestRate",
      key: 'interestRate',
    },
    {
      title: "Open Date",
      dataIndex: "openDate",
      key: 'openDate',
    },
    {
      title: "Close Date",
      dataIndex: "closeDate",
      key: 'closeDate',
    },
    {
      title: "Principal Amount",
      dataIndex: "principalAmount",
      key: 'principalAmount',
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: 'balance',
    },
    {
      title: "Repayment Frequency",
      dataIndex: "repaymentFrequency",
      key: 'repaymentFrequency',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <Tag color="blue" key={item}>
              {item}
            </Tag>
          ))}
        </>
      )
    },
    {
      title: "Rollover Mode",
      dataIndex: "rolloverMode",
      key: 'rolloverMode',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <Tag color="blue" key={item}>
              {item}
            </Tag>
          ))}
        </>
      )
    },
    {
      title: "Repayment Frequency Mode",
      dataIndex: "repaymentFrequencyMode",
      key: 'repaymentFrequencyMode',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <Tag color="blue" key={item}>
              {item}
            </Tag>
          ))}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleClick(record.id)}  style={{  border: 'none' }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Space size={5} direction="vertical" style={{width: '100%', height: '100%'}}>
      <Typography.Title level={3}>Accounts</Typography.Title>
      <Table
        
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

