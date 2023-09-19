import { Space, Typography, Table, Button, Modal, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'

export default function FundComponent() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  interface DataType {
    id: number
    phone: string
    fullName: string
    shortName: string
    accountStatus: string
  }

  type FieldType = {
    phone: string
    fullName: string
    shortName: string
    accountStatus?: string
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Full name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: '30%',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Short name',
      dataIndex: 'shortName',
      key: 'shortName',
    },
    {
      title: 'Status',
      dataIndex: 'accountStatus',
      key: 'accountStatus',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => AddFund(record.id)} style={{ border: 'none' }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]
  const data = [
    {
      id: 1,
      phone: '8401',
      fullName: 'Fund 1 Full Name',
      shortName: 'Fund 1',
      accountStatus: '0',
    },
    {
      id: 2,
      phone: '8402',
      fullName: 'Fund 2 Full Name',
      shortName: 'Fund 2',
      accountStatus: '0',
    },
    {
      id: 3,
      phone: '8403',
      fullName: 'Fund 3 Full Name',
      shortName: 'Fund 3',
      accountStatus: '0',
    },
  ]

  const AddFund = (id: number) => {
    setOpen(true)
    if (id !== 0) {
      const value = data.find(x => x.id === id)
      form.setFieldsValue({ fullName: value?.fullName, phone: value?.phone, shortName: value?.shortName, accountStatus: value?.accountStatus });
    }
  };

  const Submit = async () => {
    console.log('Success:', form.getFieldsValue());

    console.log(form.validateFields().then(value => value))

    form.resetFields();
    setOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <Space size={5} direction="vertical" style={{ width: '98%', height: '100%' }}>
      <Typography.Title level={3}>Fund</Typography.Title>
      <button onClick={() => AddFund(0)} style={{ float: 'right' }}>Add</button>
      <Modal
        title="Add Product"
        open={open}
        bodyStyle={{
          minWidth: 700,
          width: '100%'
        }}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="add"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={Submit}
        >
          <Form.Item<FieldType>
            label="Full name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your Full name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' },
            {
              pattern: /^[Z0-9]+$/,
              message: 'Description can only include letters and numbers.',
            },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Short name"
            name="shortName"
            rules={[{ required: true, message: 'Please input your Short name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Account Status"
            name="accountStatus"
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={
          data.map((item) => {
            return (
              {
                id: item.id,
                fullName: item.fullName,
                phone: item.phone,
                accountStatus: item.accountStatus,
                shortName: item.shortName,
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
    title: 'Are you sure delete this Fund?',
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

