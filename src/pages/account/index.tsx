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

  type FieldType = {
    fundId: number
    userId: number
    accountNumber: string
    accountTypeId: number
    tenor: number
    interestRate: number
    repaymentFrequencyId: number
    repaymentModeId: number
    rolloverModeId: number
    openDate: string
    closeDate: string
    principalAmount: number
    balance: number
  };
  const data = [
    {
      id: 1,
      fund: {
        fullName: 'Fund 1 Full Name',
      },
      user: {
        fullName: 'User 2',
      },
      accountTypeId: {
        description: 'Term deposit (Tien gui co ky han)',
      },
      accountNumber: 'number1',
      tenor: '11',
      interestRate: '0.1000',
      openDate: '2008-01-01T00:00:00.000Z',
      closeDate: '2008-11-11T00:00:00.000Z',
      principalAmount: '1111',
      balance: '2222',
      repaymentFrequency: [
        {
          description: 'At maturity',
        },
      ],
      rolloverMode: [
        {
          description: 'Do not roll over',
        },
      ],
      repaymentFrequencyMode: [
        {
          description: 'Added to the balance of this account',
        },
      ],
    },
    {
      id: 2,
      fund: {
        fullName: 'Fund 2 Full Name',
      },
      user: {
        fullName: 'User 3',
      },
      accountTypeId: {
        description: 'Savings account (Tai khoan tiet kiem)',
      },
      accountNumber: 'number2',
      tenor: '12',
      interestRate: '0.2000',
      openDate: '2008-11-11T00:00:00.000Z',
      closeDate: '2020-04-16T00:00:00.000Z',
      principalAmount: '2222',
      balance: '1111',
      repaymentFrequency: [
        {
          description: 'Monthly',
        },
      ],
      rolloverMode: [
        {
          description: 'Do not roll over',
        },
      ],
      repaymentFrequencyMode: [
        {
          description: 'Added to the balance of this account',
        },
      ],
    },
    {
      id: 3,
      fund: {
        fullName: 'Fund 3 Full Name',
      },
      user: {
        fullName: 'User 4',
      },
      accountTypeId: {
        description: 'Term deposit (Tien gui co ky han)',
      },
      accountNumber: 'number3',
      tenor: '33',
      interestRate: '0.3000',
      openDate: '2003-11-11T00:00:00.000Z',
      closeDate: '2008-11-11T00:00:00.000Z',
      principalAmount: '3333',
      balance: '3333',
      repaymentFrequency: [
        {
          description: 'Monthly',
        },
      ],
      rolloverMode: [
        {
          description: 'Do not roll over',
        },
      ],
      repaymentFrequencyMode: [
        {
          description: 'Added to the balance of this account',
        },
      ],
    },
  ]

  const columns: ColumnsType<DataType> = [
    {
      title: "Fund",
      dataIndex: "fund",
      key: 'fund',
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User",
      dataIndex: "user",
      key: 'user',
      render: (text) => <a>{text}</a>,
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
      key: "interestRate",
      children: [
        {
          title: 'Tenor',
          dataIndex: 'tenor',
          key: 'tenor',
        },
        {
          title: 'Rate',
          dataIndex: 'interestRate',
          key: 'interestRate',
        },
      ]
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
            <p color="blue" key={item}>
              {item}
            </p>
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
            <p color="blue" key={item}>
              {item}
            </p>
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
            <p color="blue" key={item}>
              {item}
            </p>
          ))}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleClick(record.id)} style={{ border: 'none' }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleClick = (id: number) => {
    if (id !== 0) {
      const value = data.find(x => x.id === id)
    }
  };
  return (
    <Space size={5} direction="vertical" style={{ width: '98%', height: '90%' }}>
      <Typography.Title level={3}>Accounts</Typography.Title>
      <button onClick={() => handleClick(0)} style={{ float: 'right' }}>Add</button>
      <Table
        columns={columns}
        dataSource={
          data.map((item) => {
            return (
              {
                id: item.id,
                fund: item.fund.fullName,
                user: item.user.fullName,
                accountType: item.accountTypeId.description,
                accountNumber: item.accountNumber,
                tenor: item.tenor,
                interestRate: item.interestRate,
                openDate: converDateToString(new Date(item.openDate), 'dd/MM/yyyy'),
                closeDate: converDateToString(new Date(item.closeDate), 'dd/MM/yyyy'),
                principalAmount: item.principalAmount,
                balance: item.balance,
                repaymentFrequency: item.repaymentFrequency.map(x => x.description),
                rolloverMode: item.rolloverMode.map(x => x.description),
                repaymentFrequencyMode: item.repaymentFrequencyMode.map(x => x.description),
              }
            )
          })
        }
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

function showDeleteConfirm(id: number) {
  const { confirm } = Modal;
  confirm({
    title: 'Are you sure delete this Account?',
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
}

function converDateToString(date: Date, format: string, separatorDate = '/'): string {
  const result = ''

  if (!date) {
    return result
  }

  const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  const MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  const yyyy = date.getFullYear().toString()
  const mm = date.getHours().toString()
  const HH = date.getMinutes().toString()

  if (format === 'dd/MM/yyyy') {
    return dd + separatorDate + MM + separatorDate + yyyy
  } else if (format === 'yyyy/MM/dd') {
    return yyyy + separatorDate + MM + separatorDate + dd
  } else if (format === 'MM/yyyy') {
    return MM + separatorDate + yyyy
  } else if (format === 'dd/MM/yyyy mm:HH') {
    return `${dd + separatorDate + MM + separatorDate + yyyy} ${mm}:${HH}`
  } else if (format === 'mm:HH') {
    return `${mm}:${HH}`
  }

  return result
}

