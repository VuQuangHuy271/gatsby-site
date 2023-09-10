import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default function ProductComponent() {
  interface DataType {
    id: number;
    name: string;
    fund: string;
    accountType: string;
    tenor: number;
    rate: number;
    interestRateDescription: string;
    rolloverModes: string[];
    repaymentFrequencies: string[]
    repaymentModes: string[]
  }

  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();
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
  type FieldType = {
    name?: string;
    description?: string;
    fund?: string;
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    form.resetFields();
    setOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setOpen(false);
  };

  const onFundChange = (value: string) => {
    switch (value) {
      case 'fund1':
        form.setFieldsValue({ note: 'fund1' });
        break;
      case 'fund2':
        form.setFieldsValue({ note: 'fund2' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'fund3' });
        break;
      default:
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const Submit = () => {
    console.log('Success:', form.getFieldsValue());
    form.resetFields();
    setOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '5%',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fund',
      dataIndex: 'fund',
      key: 'fund',
      width: '5%',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
      width: '10%',
    },
    {
      title: "Interest Rate",
      width: '15%',
      children: [
        {
          title: 'Tenor',
          dataIndex: 'tenor',
          key: 'tenor',
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
        },
        {
          title: 'Description',
          dataIndex: 'interestRateDescription',
          key: 'interestRateDescription',
        },
      ]
    },
    {
      title: 'RolloverModes',
      dataIndex: 'rolloverModes',
      key: 'rolloverModes',
      width: '15%',
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
      title: 'RepaymentFrequencies',
      dataIndex: 'repaymentFrequencies',
      key: 'repaymentFrequencies',
      width: '15%',
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
      title: 'RepaymentModes',
      dataIndex: 'repaymentModes',
      key: 'repaymentModes',
      width: '15%',
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
          <a>Edit</a>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
      width: '10%',
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      name: "Jone",
      fund: "Fund 1",
      accountType: "Test",
      tenor: 1,
      rate: 1,
      interestRateDescription: "Test",
      rolloverModes: ["xyddddddddddddddddddddddddddddddddddddddddz", "xyddddddddddddddddddddddddddddddddddddddddddddddz", "aaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddssssssssssssssssaa"],
      repaymentFrequencies: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      repaymentModes: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    },
    {
      id: 20,
      name: 'Jim Green',
      fund: "Fund 3",
      accountType: "Test",
      tenor: 1,
      rate: 1,
      interestRateDescription: "Test",
      rolloverModes: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      repaymentFrequencies: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      repaymentModes: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    },
    {
      id: 3,
      name: 'Joe Black',
      fund: "Fund 3",
      accountType: "Test",
      tenor: 1,
      rate: 1,
      interestRateDescription: "Test",
      rolloverModes: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      repaymentFrequencies: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      repaymentModes: ["abc", "xyz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    },
  ];

  return (

    <Space size={5} direction="vertical" style={{ width: '98%', height: '100%' }}>
      <div>
        <Typography.Title level={3}>Products</Typography.Title>
        <button onClick={handleClick} style={{ float: 'right' }}>Add</button>
        <Modal
          title="Add Product"
          open={open}
          bodyStyle={{
            minWidth: 700,
            width: '100%'
          }}
          onCancel={handleCancel}
          onOk={Submit}
        >

          <Form
            name="add"
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="fund" label="Fund" rules={[{ required: true }]}>
              <Select
                placeholder="Select Fund"
                onChange={onFundChange}
                allowClear
              >
                <Select.Option value="fund1">Fund 1</Select.Option>
                <Select.Option value="fund2">Fund 2</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.fund !== currentValues.fund}
            >
              {({ getFieldValue }) =>
                getFieldValue('fund') === 'other' ? (
                  <Form.Item name="otherFund" label="Customize Fund" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item<FieldType>
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>

        </Modal>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
      />
    </Space>
  );
}
