import { Space, Typography, ConfigProvider, Button, Modal, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { ProTable, ProColumns } from '@ant-design/pro-components';
import viVNIntl from 'antd/lib/locale/vi_VN';
import { Breadcrumb } from 'antd';

export default function UserComponent() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  interface DataType {
    id: number
    fullName: string
    phone: string
    fundFullName: string
    fundShortName: string
  }

  type FieldType = {
    fullName: string
    phone: string
    fundId: string
    accountStatus?: string
  };

  const data = [
    {
      id: 1,
      fullName: 'User 1',
      phone: '8401',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 2,
      fullName: 'User 2',
      phone: '8402',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 3,
      fullName: 'User 3',
      phone: '8403',
      fund: {
        fullName: 'Fund 2 Full Name',
        shortName: 'Fund 2',
      },
      accountStatus: '0'
    },
    {
      id: 4,
      fullName: 'User 4',
      phone: '8404',
      fund: {
        fullName: 'Fund 2 Full Name',
        shortName: 'Fund 2',
      },
      accountStatus: '0'
    },
    {
      id: 5,
      fullName: 'User 5',
      phone: '8405',
      fund: {
        fullName: 'Fund 3 Full Name',
        shortName: 'Fund 3',
      },
      accountStatus: '0'
    },
    {
      id: 6,
      fullName: 'User 6',
      phone: '8406',
      fund: {
        fullName: 'Fund 3 Full Name',
        shortName: 'Fund 3',
      },
      accountStatus: '0'
    },
    {
      id: 1,
      fullName: 'User 1',
      phone: '8401',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 2,
      fullName: 'User 2',
      phone: '8402',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 3,
      fullName: 'User 3',
      phone: '8403',
      fund: {
        fullName: 'Fund 2 Full Name',
        shortName: 'Fund 2',
      },
      accountStatus: '0'
    },
    {
      id: 1,
      fullName: 'User 1',
      phone: '8401',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 2,
      fullName: 'User 2',
      phone: '8402',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 3,
      fullName: 'User 3',
      phone: '8403',
      fund: {
        fullName: 'Fund 2 Full Name',
        shortName: 'Fund 2',
      },
      accountStatus: '0'
    },
    {
      id: 1,
      fullName: 'User 1',
      phone: '8401',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 2,
      fullName: 'User 2',
      phone: '8402',
      fund: {
        fullName: 'Fund 1 Full Name',
        shortName: 'Fund 1',
      },
      accountStatus: '0'
    },
    {
      id: 3,
      fullName: 'User 3',
      phone: '8403',
      fund: {
        fullName: 'Fund 2 Full Name',
        shortName: 'Fund 2',
      },
      accountStatus: '0'
    },
  ]

  const funds = [
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

  const columns: ProColumns<DataType>[] = [
    {
      title: 'Full name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Fund',
      key: 'fund',
      children: [
        {
          title: 'Full name',
          dataIndex: 'fundFullName',
          key: 'fundFullName',
        },
        {
          title: 'Short name',
          dataIndex: 'fundShortName',
          key: 'fundShortName',
        },
      ]
    },
    {
      title: 'Action',
      key: 'action',
      width: '13%',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => AddUser(record.id)} style={{ border: 'none' }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const onFundChange = (value: number) => {
    const name = funds.find(x => x.id = value)?.fullName
    form.setFieldsValue({ fund: { name } });
  };

  const AddUser = (id: number) => {
    setOpen(true)
    if (id !== 0) {
      const value = data.find(x => x.id === id)
      form.setFieldsValue({ fullName: value?.fullName, phone: value?.phone, fund: value?.fund.fullName, accountStatus: value?.accountStatus });
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
    <Space size={5} direction="vertical" style={{ width: '100%', height: '100%' }}>
      <div style={{ height: 30, paddingTop: 10, paddingLeft: 10 }}>
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: 'User',

            },
          ]}
        /></div>
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

          <Form.Item name="fund" label="Fund" rules={[{ required: true }]}>
            <Select
              placeholder="Chọn Fund"
              onChange={onFundChange}
              allowClear
            >
              {
                funds.map(x => {
                  if (x.accountStatus === '0') {
                    return (<Select.Option value={x.id}>{x.fullName}</Select.Option>)
                  }
                })
              }
            </Select>
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
      <ConfigProvider locale={viVNIntl}>
        <ProTable<DataType>
          columns={columns}
          rowKey="key"
          search={false}
          headerTitle=" "
          options={
            {
              reload: false,
            }
          }
          toolbar={{
            search: {
              onSearch: (value: string) => {
                alert(value);
              },
            },
            actions: [
              <Button type="primary" onClick={() => AddUser(0)} style={{ float: 'right' }}>
                <PlusOutlined />
                Thêm
              </Button>
            ],
          }}
          dataSource={
            data.map((item) => {
              return (
                {
                  id: item.id,
                  fullName: item.fullName,
                  phone: item.phone,
                  fundFullName: item.fund.fullName,
                  fundShortName: item.fund.shortName,
                }
              )
            })
          }
          pagination={{
            pageSize: 7,
            showTotal: (total, range) => (
              <div>{`Hiển thị ${range[0]}-${range[1]} trên ${total}`}</div>
            ),
          }}
        />
      </ConfigProvider>
    </Space>
  );
}

function showDeleteConfirm(id: number) {
  const { confirm } = Modal;
  confirm({
    title: 'Are you sure delete this User?',
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


